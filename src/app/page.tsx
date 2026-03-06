import Image from "next/image";
import prof_photo from '../assets/prof_photo.jpeg';
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import BlogPost from "./components/Blogpost";

export default async function Home() {
  const projects = [{
    id: "1",
    proj_img: prof_photo,
    proj_name: "akjsdghbj",
    description: "nmcxbvkujsdhbfkjnklasndklnkcjlxz",
    project_link: "Link"
  },
  {
    id: "2",
    proj_img: prof_photo,
    proj_name: "akjsdghbj",
    description: "nmcxbvkujsdhbfkjnklasndklnkcjasdjkhvbsfcxjhkbujsakbdfkjhscdvbhjksadvfkhjabvskhjuvsdkhjcvbukysahdgfhjskdcbvkhjasdfvjshkdcbvhjksdcgvklxz",
    project_link: "Link"
  },
  {
    id: "3",
    proj_img: prof_photo,
    proj_name: "akjsdghbj",
    description: "nmcxbvkujsdhbfkjnklasndklnkcjasdjkhvbsfcxjhkbujsakbdfkjhscdvbhjksadvfkhjabvskhjuvsdkhjcvbukysahdgfhjskdcbvkhjasdfvjshkdcbvhjksdcgvklxz",
    project_link: "Link"
  },
  {
    id: "4",
    proj_img: prof_photo,
    proj_name: "akjsdghbj",
    description: "nmcxbvkujsdhbfkjnklasndklnkcjasdjkhvbsfcxjhkbujsakbdfkjhscdvbhjksadvfkhjabvskhjuvsdkhjcvbukysahdgfhjskdcbvkhjasdfvjshkdcbvhjksdcgvklxz",
    project_link: "Link"
  }]

  const blogs = [{
    id: "1",
    blog_img: prof_photo,
    blog_title: "akjsdghbj",
    blog_content: "nmcxbvkujsdhbfkjnklasndklnkcjlxz",
    blog_link: "Link"
  }]


  return (
    <div className=" text-[#1A1A1A] ">
      <main className="lg:w-full lg:h-screen grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4  lg:grid-rows-2 lg:gap-4">
        {/* Photo card */}
        <div className="relative rounded-3xl overflow-hidden h-64 lg:h-full lg:col-start-3">
          <Image src={prof_photo} alt="Vinner's photo" className="object-cover w-full h-full object-top" fill />
        </div>
        {/* hero section */}
        <div className="bg-[#D3CAB3] rounded-3xl p-8 lg:col-start-2 lg:row-start-1 flex flex-col justify-between">
          <div className="text-3xl md:text-4xl font-playfair leading-tight">
            Let's <span className="italic font-normal">CREATE</span> some tech.
          </div>
          <div className="text-sm tracking-widest uppercase text-end text-[#1A1A1A]/60">Vinner</div>
        </div>

        {/* about section */}
        <div className="bg-[#4C4B40] text-[#E8E4D9] rounded-3xl p-8 md:col-span-2 flex flex-col justify-between">
          <p className="text-xs tracking-widest uppercase text-[#E8E4D9]/50 mb-4">About</p>
          <p className="font-playfair text-2xl md:text-3xl leading-snug">
            MCA student at Christ University, Delhi NCR.
            I build end-to-end applications from Figma to cloud-ready systems. Currently transitioning into DevOps — containerizing apps, building CI/CD pipelines, and learning AWS.
          </p>
          <p className="text-sm text-[#E8E4D9]/60 mt-4">Panipat, Haryana · Open to work</p>
        </div>

        {/* Projects section */}
        <div className="border-2 flex flex-col bg-[#D3CAB3] rounded-3xl p-4 lg:row-span-full ">
          <div className="flex items-center justify-between gap-2 text-2xl font-playfair mb-4">
            <h1 className="text-xl font-playfair font-bold">Projects</h1>
            <span className="text-xs">↗</span>
          </div>
          <div className="flex flex-col gap-4 lg:overflow-y-auto h-full no-scrollbar flex-1 overflow-hidden">
            <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-[#D3CAB3]/20 to-transparent z-10 pointer-events-none"></div>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={index >= 5 ? "hidden lg:block" : "block"}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <Link href={'/projectflex-1 '} className="lg:hidden mt-4 text-[#1A1A1A] font-bold underline">
            View All Projects
          </Link>
        </div>

        {/* Blog section/Currently learning - blog section will later be created as I dont have any blogs ONLINE right now. */}
        <div className="bg-[#D3CAB3] rounded-3xl p-8 lg:mb-4 lg:col-start-4 lg:row-span-full text-2xl md:text-3xl">

          <div className="flex justify-between items-center">
            <h1 className="text-xl font-playfair font-bold">Currently Learning</h1>
          </div>

          <div className="h-px bg-[#1A1A1A]/20" />

          <div className="flex flex-col gap-3 flex-1">
            <div className="flex items-start gap-3">
              <span className="text-xl">🐋</span>
              <div>
                <p className="font-bold text-sm">Docker</p>
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

          <div className="h-px bg-[#1A1A1A]/20" />

          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#1A1A1A]/50 tracking-widest uppercase">Roadmap</p>
            <p className="text-sm font-bold">Tutedude DevOps Course</p>
            <p className="text-xs text-[#1A1A1A]/60 mt-1">🎯 Goal: DevOps Internship · Late 2025</p>
          </div>

          {/* for the blog section  
          <h1 className="text-2xl mb-2 md:text-3xl flex-none">
            Blog Section
          </h1>
          <div className="flex flex-col gap-4 lg:overflow-y-auto h-full no-scrollbar flex-1 overflow-hidden">
            <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-[#D3CAB3]/20 to-transparent z-10 pointer-events-none"></div>
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className={index >= 5 ? "hidden lg:block" : "block"}
              >
                <BlogPost {...blog} />
              </div>
            ))}
          </div>
          <Link href={'/projectflex-1 '} className="lg:hidden mt-4 text-[#1A1A1A] font-bold underline">
            Go to MEDIUM
          </Link> */}
        </div>
      </main>

      {/* footer */}
      <div className="w-full w-full lg:flex lg:justify-end lg:mt-4 mt-4">
        <div className="bg-[#D3CAB3] rounded-3xl p-8 lg:w-1/4 flex gap-2 p-8 justify-between">
          <Link
            href={'https://www.linkedin.com/in/vinnerhooda/'}
            className="hover:underline flex-1 border-r-2 border-[#1A1A1A]/20 w-full text-center text-xs tracking-widest uppercase"
          >
            Linkedin
          </Link>
          <Link
            href={'https://github.com/Conceal34'}
            className="hover:underline flex-1 border-r-2 border-[#1A1A1A]/20 w-full text-center text-xs tracking-widest uppercase"
          >
            Github
          </Link>
          <Link
            href={'https://x.com/vinnerhooda'}
            className="hover:underline flex-1 border-r-2 border-[#1A1A1A]/20 w-full text-center text-xs tracking-widest uppercase"
          >
            X
          </Link>
        </div>
      </div>

    </div>
  );
}
