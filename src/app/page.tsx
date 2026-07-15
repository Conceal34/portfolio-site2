import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import BlogPost from "./components/Blogpost";
import TechTicker from './components/TechTicker'
import TerminalMock from "./components/TerminalMock"

// photos
import prof_photo from '../assets/prof_photo.jpeg';
import gym_proj from '../assets/admin-client.png';
import ecommerce_proj from '../assets/ecommerce.png';
import anpr_proj from '../assets/anpr.jpg';
import flood_proj from '../assets/flood.png';
import tracker_proj from '../assets/job-tracker.png';

export default async function Home() {
  const projects = [
    {
      id: "0",
      proj_img: tracker_proj,
      proj_name: "Job Application Tracker",
      description: "Full-stack DevOps portfolio project built with Next.js 14, Prisma, and PostgreSQL. Dockerized with a multi-stage build, deployed to AWS EC2 via a GitHub Actions CI/CD pipeline (Docker Hub push → SSH deploy) that cut deploy time from 45 minutes to 3-5 minutes.",
      project_link: "https://github.com/Conceal34/application-tracker"
    },
    {
      id: "1",
      proj_img: gym_proj,
      proj_name: "Gym Management System",
      description: "Full-stack SaaS-style fitness management platform for personal trainers. Features real-time chat, Google Calendar API integration, role-based authentication, dynamic workout planner, performance charts with E-1RM calculator, and meal plan management.",
      project_link: "https://github.com/Conceal34/personal-trainer-next",
      live_link: "https://vinner-gym.netlify.app"
    },
    {
      id: "2",
      proj_img: ecommerce_proj,
      proj_name: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with separate Admin, Seller, and Buyer roles. Designed in Figma before implementation. Built with Node.js, Express and EJS templating with raw PostgreSQL queries. Features bcrypt authentication, product management, cart and order functionality.",
      project_link: "https://github.com/Conceal34/Ecommerce"
    },
    {
      id: "3",
      proj_img: anpr_proj,
      proj_name: "ANPR System",
      description: "Automated Number Plate Recognition system integrating YOLO object detection and PaddleOCR. Achieved 80% accuracy across diverse lighting and weather conditions with 20% improvement in data throughput over manual methods.",
      project_link: "https://github.com/Conceal34/ANPR"
    },
    {
      id: "4",
      proj_img: flood_proj,
      proj_name: "Flood Detection & Severity Mapping — IEEE Research",
      description: "IEEE published research on satellite-based flood detection using deep learning. Trained a U-Net CNN on Sentinel-1 SAR imagery achieving 83% recall optimized for disaster response. Generated probabilistic severity maps for the Ganga floodplain.",
      project_link: "https://github.com/Conceal34/Flood-Detection-Severity-Mapping",
      live_link: "https://ieeexplore.ieee.org/document/11577034",
      live_link_text: "Read Paper ↗"
    }
  ]

  // when we have blogs online, we can fetch them here and pass them to the blog section. For now, I'll just hardcode some dummy data to show how the blog section will look like once we have blogs to display.
  // const blogs = [{
  //   id: "1",
  //   blog_img: prof_photo,
  //   blog_title: "akjsdghbj",
  //   blog_content: "nmcxbvkujsdhbfkjnklasndklnkcjlxz",
  //   blog_link: "Link"
  // }]


  return (
    <div className="flex flex-col gap-2 lg:flex-1 lg:min-h-0">
      <main className="lg:w-full lg:flex-1 lg:min-h-0 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">

        {/* Hero section */}
        <div className="bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] rounded-3xl p-5 xl:p-6 lg:col-start-2 lg:row-start-1 flex flex-col justify-between relative overflow-hidden group transition-colors duration-500">
          {/* AWS Status Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#15803D]/10 border border-[#15803D]/15 rounded-full px-2 py-0.5 pointer-events-none select-none z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse" />
            <span className="text-[8px] xl:text-[9px] font-mono tracking-wider uppercase text-[#15803D] font-bold">AWS: Active</span>
          </div>

          <div className="text-xl lg:text-2xl xl:text-3xl font-playfair leading-tight relative z-10 pr-16">
            Let's <span className="italic font-bold text-[#4C4B40]">BUILD</span> some tech.
          </div>
          <div className="bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 rounded-xl p-3 flex flex-col gap-2 w-full mt-2 relative z-10">
            {/* Terminal window controls */}
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1A1A1A]/20" />
              <span className="w-2 h-2 rounded-full bg-[#1A1A1A]/20" />
              <span className="w-2 h-2 rounded-full bg-[#1A1A1A]/20" />
            </div>
            <div className="min-h-[76px] w-full">
              <TerminalMock />
            </div>
          </div>
        </div>

        {/* Photo card */}
        <div className="relative rounded-3xl overflow-hidden h-64 lg:h-full lg:col-start-3 group">
          <Image src={prof_photo} alt="Vinner's photo" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700 ease-out" fill />
        </div>


        {/* About section */}
        <div className="bg-[#4C4B40] dark:bg-[#2C2B25] text-[#E8E4D9] rounded-3xl p-5 xl:p-6 md:col-span-2 flex flex-col gap-2.5 xl:gap-3 lg:min-h-0 transition-colors duration-500">
          <p className="text-xs tracking-widest uppercase text-[#E8E4D9]/40">About</p>
          <div className="h-px bg-[#E8E4D9]/10" />
          <p className="font-playfair text-base xl:text-lg 2xl:text-xl leading-relaxed flex-1">
            I build end-to-end web applications
            and research satellite-based disaster detection.
            Next.js by day. Docker and AWS by night.
          </p>
          <div className="h-px bg-[#E8E4D9]/10" />
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#E8E4D9]/60 font-medium">Currently: Full-Stack Developer Intern @ Jobiffi</p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-[#E8E4D9]/50">Delhi NCR, India · Open to work</p>
              <span className="text-xs tracking-widest uppercase text-[#E8E4D9]/30 border border-[#E8E4D9]/20 rounded-full px-3 py-1 shrink-0">MCA · Christ University</span>
            </div>
          </div>
        </div>

        {/* Currently Learning section later make it  a blog section */}
        <div className="bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] rounded-3xl p-3.5 xl:p-4.5 lg:col-start-4 lg:row-span-full flex flex-col gap-2 xl:gap-2.5 lg:min-h-0 lg:overflow-y-auto no-scrollbar transition-colors duration-500">

          <h1 className="text-base xl:text-xl font-playfair font-bold">Currently Learning</h1>
          <div className="h-px bg-[#1A1A1A]/20" />

          {/* 2x2 Grid of learning tags */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="border border-[#1A1A1A]/10 dark:border-white/10 bg-[#1A1A1A]/5 dark:bg-white/5 rounded-xl p-1.5 flex flex-col justify-center transition-colors">
              <span className="font-bold text-[10px] xl:text-[11px] text-[#1A1A1A] dark:text-[#E8E4D9] leading-none">Docker</span>
              <span className="text-[8px] xl:text-[9px] text-[#1A1A1A]/55 dark:text-[#E8E4D9]/60 mt-0.5 leading-tight">Containerizing projects</span>
            </div>
            <div className="border border-[#1A1A1A]/10 dark:border-white/10 bg-[#1A1A1A]/5 dark:bg-white/5 rounded-xl p-1.5 flex flex-col justify-center transition-colors">
              <span className="font-bold text-[10px] xl:text-[11px] text-[#1A1A1A] dark:text-[#E8E4D9] leading-none">GitHub Actions</span>
              <span className="text-[8px] xl:text-[9px] text-[#1A1A1A]/55 dark:text-[#E8E4D9]/60 mt-0.5 leading-tight">CI/CD pipelines</span>
            </div>
            <div className="border border-[#1A1A1A]/10 dark:border-white/10 bg-[#1A1A1A]/5 dark:bg-white/5 rounded-xl p-1.5 flex flex-col justify-center transition-colors">
              <span className="font-bold text-[10px] xl:text-[11px] text-[#1A1A1A] dark:text-[#E8E4D9] leading-none">AWS</span>
              <span className="text-[8px] xl:text-[9px] text-[#1A1A1A]/55 dark:text-[#E8E4D9]/60 mt-0.5 leading-tight">Practitioner prep</span>
            </div>
            <div className="border border-[#1A1A1A]/10 dark:border-white/10 bg-[#1A1A1A]/5 dark:bg-white/5 rounded-xl p-1.5 flex flex-col justify-center transition-colors">
              <span className="font-bold text-[10px] xl:text-[11px] text-[#1A1A1A] dark:text-[#E8E4D9] leading-none">Linux</span>
              <span className="text-[8px] xl:text-[9px] text-[#1A1A1A]/55 dark:text-[#E8E4D9]/60 mt-0.5 leading-tight">Shell & Server</span>
            </div>
          </div>

          <div className="h-px bg-[#1A1A1A]/10" />

          <div className="flex flex-col gap-0.5">
            <p className="text-[9px] xl:text-[10px] text-[#1A1A1A]/50 dark:text-[#E8E4D9]/60 tracking-widest uppercase font-medium">Roadmap</p>
            <p className="text-xs xl:text-sm font-bold">DSA (NeetCode 150) + LLD</p>
            <p className="text-[9px] xl:text-[10px] text-[#1A1A1A]/60 dark:text-[#E8E4D9]/70 mt-0.5 font-medium">🎯 Goal: SWE Offer · Oct 2026</p>
          </div>

          <div className="h-px bg-[#1A1A1A]/10 dark:bg-white/10" />

          <div className="flex-1" /> {/* Dynamic spacer to push tech stack to the bottom on tall viewports */}

          <div className="flex flex-col gap-2">
            <div>
              <p className="text-[9px] xl:text-[10px] text-[#1A1A1A]/50 dark:text-[#E8E4D9]/60 tracking-widest uppercase mb-0.5 font-medium">Core Tech</p>
              <p className="text-[11px] xl:text-xs font-semibold text-[#1A1A1A]/80 dark:text-[#E8E4D9]/90 leading-normal">
                Next.js · TS · Node.js · Postgres · Docker · AWS
              </p>
            </div>
            <div>
              <p className="text-[9px] xl:text-[10px] text-[#1A1A1A]/50 dark:text-[#E8E4D9]/60 tracking-widest uppercase mb-1 font-medium">Tech Stack</p>
              <TechTicker />
            </div>
          </div>

        </div>

        {/* Projects section */}
        <div className="flex flex-col bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] rounded-3xl p-4 lg:row-span-full lg:min-h-0 transition-colors duration-500">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-base xl:text-xl font-playfair font-bold">Projects</h1>
            <div className="flex gap-2">
              <Link 
                className="group/btn flex items-center gap-1 text-[10px] xl:text-xs font-sans tracking-wider uppercase border border-[#1A1A1A]/20 rounded-full px-3 py-1 hover:bg-[#1A1A1A] hover:text-[#D3CAB3] transition-all duration-300 ease-out" 
                href="/project"
              >
                Archive <span className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200">↗</span>
              </Link>
              <Link 
                className="group/btn flex items-center gap-1 text-[10px] xl:text-xs font-sans tracking-wider uppercase border border-[#1A1A1A]/20 rounded-full px-3 py-1 hover:bg-[#1A1A1A] hover:text-[#D3CAB3] transition-all duration-300 ease-out" 
                href="https://github.com/Conceal34" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub <span className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200">↗</span>
              </Link>
            </div>
          </div>
          <div className="h-px bg-[#1A1A1A]/20 mb-6" />
          <div className="flex flex-col gap-4 lg:overflow-y-auto no-scrollbar flex-1 lg:min-h-0">
            {projects.map((project, index) => (
              <div key={project.id} className={index >= 5 ? "hidden lg:block" : "block"}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  );
}
