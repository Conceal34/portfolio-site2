"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronRight, ChevronDown, File, Folder, GitBranch, FolderGit2, ExternalLink, ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

// Minimal types for GitHub API
interface GitHubNode {
  path: string
  mode: string
  type: "blob" | "tree"
  sha: string
  size?: number
  url: string
}

interface FileTree {
  name: string
  path: string
  type: "blob" | "tree"
  children?: FileTree[]
}

export default function CodeViewerPage() {
  const params = useParams()
  const owner = params.owner as string
  const repo = params.repo as string

  const [loading, setLoading] = useState(true)
  const [tree, setTree] = useState<FileTree[]>([])
  const [defaultBranch, setDefaultBranch] = useState("main")
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [fileContent, setFileContent] = useState<string>("")
  const [loadingFile, setLoadingFile] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Expanded folders state
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedFolders(newExpanded)
  }

  useEffect(() => {
    async function fetchRepo() {
      try {
        setLoading(true)
        // Fetch repo info to get default branch
        const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
        if (!repoRes.ok) throw new Error("Failed to fetch repository information")
        const repoData = await repoRes.json()
        const branch = repoData.default_branch
        setDefaultBranch(branch)

        // Fetch tree
        const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`)
        if (!treeRes.ok) throw new Error("Failed to fetch repository tree")
        const treeData = await treeRes.json()

        // Build hierarchical tree
        const root: FileTree[] = []
        const map = new Map<string, FileTree>()

        treeData.tree.forEach((node: GitHubNode) => {
          const parts = node.path.split('/')
          const name = parts.pop()!
          const parentPath = parts.join('/')

          const fileNode: FileTree = {
            name,
            path: node.path,
            type: node.type,
            ...(node.type === "tree" ? { children: [] } : {})
          }

          map.set(node.path, fileNode)

          if (parentPath === "") {
            root.push(fileNode)
          } else {
            const parent = map.get(parentPath)
            if (parent && parent.children) {
              parent.children.push(fileNode)
            }
          }
        })

        // Sort: folders first, then alphabetically
        const sortTree = (nodes: FileTree[]) => {
          nodes.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name)
            return a.type === "tree" ? -1 : 1
          })
          nodes.forEach(node => {
            if (node.children) sortTree(node.children)
          })
        }
        sortTree(root)

        setTree(root)
        
        // Find README and select it by default
        const readmeNode = treeData.tree.find((n: GitHubNode) => n.path.toLowerCase() === 'readme.md')
        if (readmeNode) {
          loadFile(readmeNode.path, branch)
        }
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (owner && repo) {
      fetchRepo()
    }
  }, [owner, repo])

  const loadFile = async (path: string, branch = defaultBranch) => {
    setSelectedFile(path)
    setLoadingFile(true)
    setError(null)
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`)
      if (!res.ok) throw new Error("Failed to load file content")
      const text = await res.text()
      setFileContent(text)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoadingFile(false)
    }
  }

  const renderTree = (nodes: FileTree[], depth = 0) => {
    return (
      <ul className="flex flex-col w-full">
        {nodes.map(node => (
          <li key={node.path} className="w-full">
            <div 
              className={`flex items-center gap-1.5 py-1 px-2 rounded-md cursor-pointer text-sm transition-colors ${selectedFile === node.path ? 'bg-[#1A1A1A]/10 dark:bg-white/10 font-medium' : 'hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5'}`}
              style={{ paddingLeft: `${depth * 12 + 8}px` }}
              onClick={() => {
                if (node.type === "tree") {
                  toggleFolder(node.path)
                } else {
                  loadFile(node.path)
                }
              }}
            >
              {node.type === "tree" ? (
                <>
                  {expandedFolders.has(node.path) ? (
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  )}
                  <Folder className="w-4 h-4 text-blue-500/80 dark:text-blue-400 shrink-0" />
                </>
              ) : (
                <>
                  <span className="w-3.5 h-3.5 shrink-0" />
                  <File className="w-3.5 h-3.5 opacity-70 shrink-0" />
                </>
              )}
              <span className="truncate opacity-90">{node.name}</span>
            </div>
            {node.type === "tree" && expandedFolders.has(node.path) && node.children && (
              <div>{renderTree(node.children, depth + 1)}</div>
            )}
          </li>
        ))}
      </ul>
    )
  }

  const getLanguage = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase()
    const map: Record<string, string> = {
      'js': 'javascript', 'jsx': 'jsx', 'ts': 'typescript', 'tsx': 'tsx',
      'json': 'json', 'html': 'html', 'css': 'css', 'md': 'markdown',
      'py': 'python', 'java': 'java', 'cpp': 'cpp', 'c': 'c',
      'go': 'go', 'rs': 'rust', 'sh': 'bash', 'yaml': 'yaml', 'yml': 'yaml'
    }
    return map[ext || ''] || 'text'
  }

  return (
    <div className="flex flex-col lg:flex-1 lg:min-h-0 bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] rounded-3xl border border-[#1A1A1A]/10 dark:border-white/10 lg:overflow-hidden h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-2.5 px-4 border-b border-[#1A1A1A]/10 dark:border-white/10 bg-[#EAE4D3] dark:bg-[#2A2A28]">
        <div className="flex items-center gap-3">
          <Link href="/project" className="p-1 hover:bg-[#1A1A1A]/10 dark:hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="font-playfair font-bold text-base flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" />
              {owner} / {repo}
            </h1>
            <div className="flex items-center gap-1 text-[10px] opacity-70 border border-[#1A1A1A]/20 dark:border-white/20 rounded-full px-2 py-0.5">
              <GitBranch className="w-3 h-3" /> {defaultBranch}
            </div>
          </div>
        </div>
        <a 
          href={`https://github.com/${owner}/${repo}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-[#1A1A1A]/20 dark:border-white/20 rounded-full hover:bg-[#1A1A1A] hover:text-[#D3CAB3] dark:hover:bg-white dark:hover:text-[#1C1C1A] transition-colors"
        >
          View on GitHub <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 lg:w-72 border-b md:border-b-0 md:border-r border-[#1A1A1A]/10 dark:border-white/10 overflow-y-auto bg-[#D3CAB3]/50 dark:bg-[#1C1C1A]/50 p-2 max-h-[30vh] md:max-h-full shrink-0">
          {loading ? (
            <div className="p-4 text-sm opacity-70 flex items-center gap-2">
              <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
              Loading tree...
            </div>
          ) : error ? (
            <div className="p-4 text-sm text-red-500">Error: {error}</div>
          ) : (
            renderTree(tree)
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0D0D0C] relative">
          {loadingFile ? (
            <div className="absolute inset-0 flex items-center justify-center opacity-70">
              <div className="flex flex-col items-center gap-2">
                <span className="animate-spin h-8 w-8 border-2 border-current border-t-transparent rounded-full" />
                <span className="text-sm font-medium tracking-widest uppercase">Loading File...</span>
              </div>
            </div>
          ) : !selectedFile ? (
            <div className="flex h-full items-center justify-center opacity-50 flex-col gap-3">
              <File className="w-12 h-12" />
              <p className="font-medium tracking-wide uppercase text-sm">Select a file to view</p>
            </div>
          ) : (
            <div className="flex flex-col min-h-full max-w-full overflow-hidden">
              <div className="flex items-center justify-between p-2 px-3 border-b border-[#1A1A1A]/10 dark:border-white/10 bg-[#f8f8f8] dark:bg-[#151515] sticky top-0 z-10">
                <div className="flex items-center gap-2 text-xs font-medium truncate">
                  <File className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  <span className="truncate">{selectedFile}</span>
                </div>
              </div>
              <div className="flex-1 p-4 md:p-6 overflow-x-auto">
                {selectedFile.toLowerCase().endsWith('.md') ? (
                  <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-pre:bg-[#1E1E1E] prose-pre:p-0">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]} 
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        code({node, inline, className, children, ...props}: any) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={vscDarkPlus as any}
                              language={match[1]}
                              PreTag="div"
                              className="!m-0 !rounded-md"
                              wrapLines={true}
                              wrapLongLines={true}
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    >
                      {fileContent}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-sm rounded-lg overflow-hidden border border-[#1A1A1A]/10 dark:border-white/10 w-full max-w-full">
                    <SyntaxHighlighter
                      language={getLanguage(selectedFile)}
                      style={vscDarkPlus as any}
                      showLineNumbers
                      wrapLines={true}
                      wrapLongLines={true}
                      lineNumberStyle={{ color: '#6e7681', paddingRight: '1.5rem', minWidth: '3rem', textAlign: 'right' }}
                      customStyle={{ margin: 0, padding: '1.5rem', background: '#1E1E1E', fontSize: '13px' }}
                    >
                      {fileContent}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
