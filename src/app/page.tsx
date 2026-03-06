import Image from "next/image";
import prof_photo from '../assets/prof_photo.jpeg';
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import BlogPost from "./components/Blogpost";
import TechTicker from './components/TechTicker'


export default async function Home() {
  const projects = [
    {
      id: "1",
      proj_img: prof_photo,
      proj_name: "Gym Management System",
      description: "Full-stack SaaS-style fitness management platform for personal trainers. Features real-time chat, Google Calendar API integration, role-based authentication, dynamic workout planner, performance charts with E-1RM calculator, and meal plan management.",
      project_link: "https://github.com/Conceal34/personal-trainer-next"
    },
    {
      id: "2",
      proj_img: prof_photo,
      proj_name: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with separate Admin, Seller, and Buyer roles. Designed in Figma before implementation. Built with Node.js, Express and EJS templating with raw PostgreSQL queries. Features bcrypt authentication, product management, cart and order functionality.",
      project_link: "https://github.com/Conceal34/Ecommerce"
    },
    {
      id: "3",
      proj_img: prof_photo,
      proj_name: "ANPR System",
      description: "Automated Number Plate Recognition system integrating YOLO object detection and PaddleOCR. Achieved 80% accuracy across diverse lighting and weather conditions with 20% improvement in data throughput over manual methods.",
      project_link: "https://github.com/Conceal34/ANPR"
    },
    {
      id: "4",
      proj_img: prof_photo,
      proj_name: "Flood Detection & Severity Mapping — IEEE Research",
      description: "IEEE accepted research on satellite-based flood detection using deep learning. Trained a U-Net CNN on Sentinel-1 SAR imagery achieving 83% recall optimized for disaster response. Generated probabilistic severity maps for the Ganga floodplain.",
      project_link: "https://github.com/Conceal34/Flood-Detection-Severity-Mapping"
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

        {/* Photo card */}
        <div className="relative rounded-3xl overflow-hidden h-64 lg:h-full lg:col-start-3">
          <Image src={prof_photo} alt="Vinner's photo" className="object-cover w-full h-full object-top" fill />
        </div>

        {/* Hero section */}
        <div className="bg-[#D3CAB3] rounded-3xl p-8 lg:col-start-2 lg:row-start-1 flex flex-col justify-between">
          <div className="text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-playfair leading-tight">
            Let's <span className="italic font-normal">CREATE</span> some tech.
          </div>
          <div className="text-sm tracking-widest uppercase text-end text-[#1A1A1A]/60">Vinner</div>
        </div>

        {/* About section */}
        <div className="bg-[#4C4B40] text-[#E8E4D9] rounded-3xl p-6 md:col-span-2 flex flex-col justify-between">
          <p className="text-xs tracking-widest uppercase text-[#E8E4D9]/50 mb-3">About</p>
          <p className="font-playfair text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-snug">
            MCA student at Christ University, Delhi NCR.
            I build end-to-end applications from Figma to cloud-ready systems. Currently transitioning into DevOps — containerizing apps, building CI/CD pipelines, and learning AWS.
          </p>
          <p className="text-xs text-[#E8E4D9]/60 mt-3">Delhi, India · Open to work</p>
        </div>

        {/* Projects section */}
        <div className="flex flex-col bg-[#D3CAB3] rounded-3xl p-4 lg:row-span-full lg:min-h-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-base xl:text-xl font-playfair font-bold">Projects</h1>
            <span className="text-xs">↗</span>
          </div>
          <div className="flex flex-col gap-4 lg:overflow-y-auto no-scrollbar flex-1 lg:min-h-0">
            {projects.map((project, index) => (
              <div key={project.id} className={index >= 5 ? "hidden lg:block" : "block"}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <Link href={'/project'} className="lg:hidden mt-4 text-[#1A1A1A] font-bold underline text-sm">
            View All Projects
          </Link>
        </div>

        {/* Currently Learning section */}
        <div className="bg-[#D3CAB3] rounded-3xl p-6 lg:col-start-4 lg:row-span-full flex flex-col gap-4 lg:min-h-0 lg:overflow-y-auto no-scrollbar">

          <h1 className="text-base xl:text-xl font-playfair font-bold">Currently Learning</h1>
          <div className="h-px bg-[#1A1A1A]/20" />

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">🐋</span>
              <div>
                <p className="font-bold text-xs xl:text-sm">Docker</p>
                <p className="text-xs text-[#1A1A1A]/60">Containerizing personal projects</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">⚙️</span>
              <div>
                <p className="font-bold text-sm">GitHub Actions</p>
                <p className="text-xs text-[#1A1A1A]/60">Building CI/CD pipelines</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">☁️</span>
              <div>
                <p className="font-bold text-sm">AWS</p>
                <p className="text-xs text-[#1A1A1A]/60">Cloud Practitioner prep</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🐧</span>
              <div>
                <p className="font-bold text-sm">Linux</p>
                <p className="text-xs text-[#1A1A1A]/60">Shell scripting & server management</p>
              </div>
            </div>
          </div>

          <div className="flex-1" />
          <div className="h-px bg-[#1A1A1A]/20" />

          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#1A1A1A]/50 tracking-widest uppercase">Roadmap</p>
            <p className="text-sm font-bold">Tutedude DevOps Course</p>
            <p className="text-xs text-[#1A1A1A]/60 mt-1">🎯 Goal: DevOps Internship · Late 2025</p>
          </div>

          <div className="h-px bg-[#1A1A1A]/20" />

          <div>
            <p className="text-xs text-[#1A1A1A]/50 tracking-widest uppercase mb-3">Tech Stack</p>
            <TechTicker />
          </div>

        </div>
      </main>

      {/* Footer */}
      <div className="w-full lg:flex lg:justify-end mt-2">
        <div className="bg-[#D3CAB3] rounded-3xl px-6 py-3 lg:w-1/4 flex gap-2 justify-between">
          <Link href={'https://www.linkedin.com/in/vinnerhooda/'} className="hover:underline flex-1 border-r-2 border-[#1A1A1A]/20 text-center text-xs tracking-widest uppercase">
            LinkedIn
          </Link>
          <Link href={'https://github.com/Conceal34'} className="hover:underline flex-1 border-r-2 border-[#1A1A1A]/20 text-center text-xs tracking-widest uppercase">
            Github
          </Link>
          <Link href={'https://x.com/vinnerhooda'} className="hover:underline flex-1 text-center text-xs tracking-widest uppercase">
            X
          </Link>
        </div>
      </div>

    </div>
  );
}
