"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, Plus, RefreshCw, ArrowLeft } from 'lucide-react'

interface Project {
  id: string
  proj_img: string
  proj_name: string
  description: string
  project_link: string
  live_link?: string
  live_link_text?: string
  tags: string[]
  category: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    proj_name: '',
    description: '',
    proj_img: '',
    project_link: '',
    live_link: '',
    live_link_text: '',
    tags: '',
    category: 'Full-Stack'
  })

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/projects')
      if (res.ok) {
        const data = await res.json()
        setProjects(data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' })
    router.push('/')
    router.refresh()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      }

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        setIsAdding(false)
        setFormData({
          proj_name: '', description: '', proj_img: '',
          project_link: '', live_link: '', live_link_text: '',
          tags: '', category: 'Full-Stack'
        })
        fetchProjects()
      } else {
        alert('Failed to add project')
      }
    } catch (err) {
      alert('An error occurred')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col flex-1 h-full bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] rounded-3xl border border-[#1A1A1A]/10 dark:border-white/10 p-6 overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]/10 dark:border-white/10">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-[#1A1A1A]/10 dark:hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-playfair font-bold text-2xl">CMS Dashboard</h1>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-2 bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1A1A1A] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            {isAdding ? 'Cancel' : <><Plus className="w-4 h-4" /> Add Project</>}
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 border border-[#1A1A1A]/20 dark:border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pt-6 no-scrollbar">
        {isAdding ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-5 bg-[#EAE4D3] dark:bg-[#2A2A28] p-6 rounded-2xl border border-[#1A1A1A]/10 dark:border-white/10">
            <h2 className="font-playfair font-bold text-xl mb-2">New Project</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5 text-xs font-medium">
                Project Name *
                <input required value={formData.proj_name} onChange={e => setFormData({...formData, proj_name: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none" placeholder="e.g. Portfolio Site" />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-medium">
                Category *
                <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none">
                  <option>Full-Stack</option>
                  <option>DevOps</option>
                  <option>AI / ML</option>
                  <option>AI / ML & Research</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-xs font-medium">
              Description *
              <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none" placeholder="Brief project overview..." />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5 text-xs font-medium">
                GitHub Repository URL *
                <input required type="url" value={formData.project_link} onChange={e => setFormData({...formData, project_link: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none" placeholder="https://github.com/..." />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-medium">
                Image URL (Absolute URL)
                <input type="url" value={formData.proj_img} onChange={e => setFormData({...formData, proj_img: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none" placeholder="https://..." />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5 text-xs font-medium">
                Live Demo URL (Optional)
                <input type="url" value={formData.live_link} onChange={e => setFormData({...formData, live_link: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none" placeholder="https://..." />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-medium">
                Live Demo Text (Optional)
                <input value={formData.live_link_text} onChange={e => setFormData({...formData, live_link_text: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none" placeholder="e.g. Live Demo ↗" />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-xs font-medium">
              Tags (Comma separated)
              <input value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} className="px-3 py-2.5 rounded-lg bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 outline-none" placeholder="React, Node.js, AWS..." />
            </label>

            <button disabled={submitting} type="submit" className="mt-2 w-full bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1A1A1A] font-bold tracking-wider uppercase text-xs py-3.5 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50">
              {submitting ? 'Saving...' : 'Save Project'}
            </button>
          </form>
        ) : loading ? (
          <div className="flex items-center justify-center h-40 opacity-50">
            <RefreshCw className="w-6 h-6 animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 opacity-50 text-sm">
            No projects found in the database.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => (
              <div key={project.id} className="bg-[#EAE4D3] dark:bg-[#2A2A28] p-4 rounded-xl border border-[#1A1A1A]/10 dark:border-white/10 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-sm leading-tight">{project.proj_name}</h3>
                  <span className="text-[9px] uppercase tracking-wider bg-[#1A1A1A]/10 dark:bg-white/10 px-2 py-0.5 rounded-full">{project.category}</span>
                </div>
                <p className="text-xs opacity-70 line-clamp-2">{project.description}</p>
                <div className="mt-auto pt-3 flex flex-wrap gap-1">
                  {project.tags?.map(tag => (
                    <span key={tag} className="text-[9px] border border-[#1A1A1A]/20 dark:border-white/20 px-1.5 py-0.5 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
