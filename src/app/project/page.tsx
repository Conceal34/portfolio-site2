"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// Import project images
import gym_proj from '../../assets/admin-client.png'
import ecommerce_proj from '../../assets/ecommerce.png'
import anpr_proj from '../../assets/anpr.jpg'
import flood_proj from '../../assets/flood.png'
import tracker_proj from '../../assets/job-tracker.png'

const projectsList = [
  {
    id: "0",
    proj_img: tracker_proj,
    proj_name: "Job Application Tracker",
    description: "Full-stack DevOps portfolio project built with Next.js 14, Prisma, and PostgreSQL. Dockerized with a multi-stage build, deployed to AWS EC2 via a GitHub Actions CI/CD pipeline (Docker Hub push → SSH deploy) that cut deploy time from 45 minutes to 3-5 minutes.",
    project_link: "https://github.com/Conceal34/application-tracker",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Docker", "AWS", "GitHub Actions"],
    category: "DevOps"
  },
  {
    id: "1",
    proj_img: gym_proj,
    proj_name: "Gym Management System",
    description: "Full-stack SaaS-style fitness management platform for personal trainers. Features real-time chat, Google Calendar API integration, role-based authentication, dynamic workout planner, performance charts with E-1RM calculator, and meal plan management.",
    project_link: "https://github.com/Conceal34/personal-trainer-next",
    live_link: "https://vinner-gym.netlify.app",
    tags: ["Next.js", "React", "TypeScript", "Google Calendar API", "Tailwind"],
    category: "Full-Stack"
  },
  {
    id: "2",
    proj_img: ecommerce_proj,
    proj_name: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with separate Admin, Seller, and Buyer roles. Designed in Figma before implementation. Built with Node.js, Express and EJS templating with raw PostgreSQL queries. Features bcrypt authentication, product management, cart and order functionality.",
    project_link: "https://github.com/Conceal34/Ecommerce",
    tags: ["Node.js", "Express", "EJS", "PostgreSQL", "Bcrypt"],
    category: "Full-Stack"
  },
  {
    id: "3",
    proj_img: anpr_proj,
    proj_name: "ANPR System",
    description: "Automated Number Plate Recognition system integrating YOLO object detection and PaddleOCR. Achieved 80% accuracy across diverse lighting and weather conditions with 20% improvement in data throughput over manual methods.",
    project_link: "https://github.com/Conceal34/ANPR",
    tags: ["Python", "YOLOv8", "PaddleOCR", "OpenCV"],
    category: "AI / ML"
  },
  {
    id: "4",
    proj_img: flood_proj,
    proj_name: "Flood Detection & Severity Mapping — IEEE Research",
    description: "IEEE published research on satellite-based flood detection using deep learning. Trained a U-Net CNN on Sentinel-1 SAR imagery achieving 83% recall optimized for disaster response. Generated probabilistic severity maps for the Ganga floodplain.",
    project_link: "https://github.com/Conceal34/Flood-Detection-Severity-Mapping",
    live_link: "https://ieeexplore.ieee.org/document/11577034",
    live_link_text: "Read Paper ↗",
    tags: ["Python", "PyTorch", "U-Net", "Sentinel-1 SAR", "GIS"],
    category: "AI / ML & Research"
  }
]

export default function ProjectPage() {
  const [filter, setFilter] = useState("All")
  const [isScrolled, setIsScrolled] = useState(false)
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")

  const categories = ["All", "Full-Stack", "DevOps", "AI / ML", "AI / ML & Research"]

  const filteredProjects = filter === "All"
    ? projectsList
    : projectsList.filter(p => p.category.includes(filter))

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop
    if (scrollTop > 20) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  return (
    <div className={`flex flex-col lg:flex-1 lg:min-h-0 bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] rounded-3xl border border-[#1A1A1A]/10 dark:border-white/10 lg:overflow-hidden h-full transition-all duration-500 ease-in-out ${
      isScrolled ? "p-5 gap-3" : "p-6 lg:p-8 gap-5"
    }`}>
      {/* Unified Header & Filters Row */}
      <div className={`flex flex-wrap items-center justify-between gap-4 w-full transition-all duration-500 ease-in-out ${
        isScrolled ? "pb-0.5" : "pb-1"
      }`}>
         <div className="flex flex-wrap items-center gap-4 xl:gap-6">
           <h1 className={`font-playfair text-[#1A1A1A] dark:text-[#E8E4D9] leading-tight font-bold shrink-0 transition-all duration-500 ease-in-out ${
             isScrolled ? "text-lg xl:text-xl" : "text-xl md:text-2xl xl:text-3xl"
           }`}>
             Projects <span className="italic font-bold text-[#4C4B40] dark:text-white">ARCHIVE</span>
           </h1>
           {/* Categories */}
           <div className="flex flex-wrap gap-2">
             {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[10px] xl:text-xs font-sans tracking-wider uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    filter === cat
                      ? "bg-[#1A1A1A] dark:bg-[#E8E4D9] text-[#D3CAB3] dark:text-[#1C1C1A] border-transparent shadow-sm"
                      : "border-[#1A1A1A]/15 dark:border-white/15 text-[#1A1A1A]/60 dark:text-white/60 bg-[#1A1A1A]/5 dark:bg-white/5 hover:bg-[#1A1A1A]/10 dark:hover:bg-white/10 hover:border-[#1A1A1A]/40 dark:hover:border-white/40"
                  }`}
                >
                  {cat}
                </button>
             ))}
           </div>
         </div>
         
         <div className="flex items-center gap-3 shrink-0 ml-auto">
            {/* View Mode Toggle Buttons */}
            <div className="flex items-center gap-1 border border-[#1A1A1A]/15 dark:border-white/15 bg-[#1A1A1A]/5 dark:bg-white/5 rounded-full p-1 shrink-0">
               <button
                 onClick={() => setViewMode("list")}
                 className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                   viewMode === "list"
                     ? "bg-[#1A1A1A] dark:bg-[#E8E4D9] text-[#D3CAB3] dark:text-[#1C1C1A]"
                     : "text-[#1A1A1A]/60 dark:text-white/60 hover:text-[#1A1A1A] dark:hover:text-white"
                 }`}
                 title="List View"
               >
                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
               </button>
               <button
                 onClick={() => setViewMode("grid")}
                 className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                   viewMode === "grid"
                     ? "bg-[#1A1A1A] dark:bg-[#E8E4D9] text-[#D3CAB3] dark:text-[#1C1C1A]"
                     : "text-[#1A1A1A]/60 dark:text-white/60 hover:text-[#1A1A1A] dark:hover:text-white"
                 }`}
                 title="Grid View"
               >
                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                 </svg>
               </button>
            </div>
            
            {/* Back Button */}
            <Link
              href="/"
              className="group/back flex items-center gap-1 font-sans text-xs tracking-widest uppercase border border-[#1A1A1A]/20 dark:border-white/20 hover:bg-[#1A1A1A] dark:hover:bg-white hover:text-[#D3CAB3] dark:hover:text-[#1A1A1A] text-[#1A1A1A] dark:text-[#E8E4D9] px-4 py-2 rounded-full transition-all duration-300 ease-out"
            >
              <span className="group-hover/back:-translate-x-0.5 transition-transform duration-200">←</span> Back
            </Link>
         </div>
      </div>

      {/* Projects Container */}
      <div
        onScroll={handleScroll}
        className={`flex-1 lg:overflow-y-auto no-scrollbar mt-1 transition-all duration-500 ease-in-out ${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
            : "flex flex-col gap-4"
        }`}
      >
        {filteredProjects.map((project) => {
          if (viewMode === "grid") {
            return (
              <div
                key={project.id}
                className="group relative border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl bg-[#EAE4D3] dark:bg-[#2A2A28] hover:bg-[#DFD6C1] dark:hover:bg-[#333330] flex flex-col justify-between transition-all duration-500 ease-in-out hover:shadow-md hover:border-[#1A1A1A]/20 dark:hover:border-white/20 min-h-[385px] shrink-0 overflow-hidden"
              >
                {/* Banner image — always visible */}
                <div className="relative w-full h-36 shrink-0">
                  <Image
                    src={project.proj_img}
                    alt={project.proj_name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#EAE4D3] dark:from-[#2A2A28] group-hover:from-[#DFD6C1] dark:group-hover:from-[#333330] transition-colors duration-500 ease-in-out to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 pt-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-playfair font-bold text-sm lg:text-base text-[#1A1A1A] dark:text-[#E8E4D9] leading-tight transition-colors">
                      {project.proj_name}
                    </h3>
                    <span className="text-[8px] font-sans font-semibold tracking-wider uppercase bg-[#4C4B40]/10 dark:bg-white/10 text-[#4C4B40] dark:text-[#E8E4D9] px-2 py-0.5 rounded-full shrink-0 border border-[#4C4B40]/10 dark:border-white/10 transition-colors">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-[11px] text-[#1A1A1A]/70 dark:text-[#E8E4D9]/70 leading-relaxed font-sans font-medium line-clamp-4 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Footer - Tags and Actions */}
                <div className="flex flex-col gap-3.5 px-5 pb-5 pt-3 border-t border-[#1A1A1A]/5 mt-auto w-full">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 rounded-full px-2 py-0.5 text-[8px] font-mono text-[#1A1A1A]/60 dark:text-[#E8E4D9]/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-2 font-sans text-[9px] xl:text-[10px] tracking-wider uppercase font-semibold">
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1C1C1A] rounded-full hover:bg-[#3a3a30] dark:hover:bg-white hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-out shadow-sm"
                      >
                        {"live_link_text" in project ? (project as any).live_link_text : "Live Demo ↗"}
                      </a>
                    )}
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 border border-[#1A1A1A]/20 dark:border-white/20 text-[#1A1A1A] dark:text-[#E8E4D9] rounded-full hover:bg-[#1A1A1A] dark:hover:bg-white hover:text-[#D3CAB3] dark:hover:text-[#1C1C1A] hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-out"
                    >
                      Code ↗
                    </a>
                  </div>
                </div>
              </div>
            )
          }

          // Otherwise render list view (static left banner image, original design)
          return (
            <div
              key={project.id}
              className="group relative border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl bg-[#EAE4D3] dark:bg-[#2A2A28] hover:bg-[#DFD6C1] dark:hover:bg-[#333330] p-5 flex flex-col md:flex-row gap-5 transition-all duration-500 ease-in-out hover:shadow-md hover:border-[#1A1A1A]/20 dark:hover:border-white/20 shrink-0"
            >
              {/* Image Container with zoom */}
              <div className="relative w-full md:w-56 h-36 rounded-xl overflow-hidden shrink-0 border border-[#1A1A1A]/10 bg-[#1A1A1A]/5">
                <Image
                  src={project.proj_img}
                  alt={project.proj_name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 min-w-0 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-playfair font-bold text-lg lg:text-xl text-[#1A1A1A] dark:text-[#E8E4D9] leading-tight transition-colors">
                      {project.proj_name}
                    </h3>
                    <span className="text-[9px] xl:text-[10px] font-sans font-semibold tracking-wider uppercase bg-[#4C4B40]/10 dark:bg-white/10 text-[#4C4B40] dark:text-[#E8E4D9] px-3 py-1 rounded-full shrink-0 border border-[#4C4B40]/10 dark:border-white/10 transition-colors">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/70 dark:text-[#E8E4D9]/70 leading-relaxed font-sans font-medium transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Footer - Tags and Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#1A1A1A]/5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 rounded-full px-2.5 py-0.5 text-[9px] xl:text-[10px] font-mono text-[#1A1A1A]/60 dark:text-[#E8E4D9]/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 font-sans text-[9px] xl:text-[10px] tracking-wider uppercase font-semibold">
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1C1C1A] rounded-full hover:bg-[#3a3a30] dark:hover:bg-white hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-out shadow-sm"
                      >
                        {"live_link_text" in project ? (project as any).live_link_text : "Live Demo ↗"}
                      </a>
                    )}
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 border border-[#1A1A1A]/20 dark:border-white/20 text-[#1A1A1A] dark:text-[#E8E4D9] rounded-full hover:bg-[#1A1A1A] dark:hover:bg-white hover:text-[#D3CAB3] dark:hover:text-[#1C1C1A] hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-out"
                    >
                      Code ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-sm text-[#1A1A1A]/50 font-sans">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  )
}
