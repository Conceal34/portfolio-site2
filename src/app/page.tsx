import Image from "next/image";
import prof_photo from '../assets/prof_photo.jpeg';
import ProjectCard from "./components/ProjectCard";

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
  }]

  return (
    <div className=" text-[#1A1A1A] ">
      <main className="lg:w-full grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-4  lg:grid-rows-2 lg:gap-4">
        <Image src={prof_photo} alt="Vinner's photo" className="rounded-3xl lg:h-full  lg:col-start-3" />
        <div className="bg-[#D3CAB3] rounded-3xl p-8 lg:col-start-2 lg:row-start-1">
          <div>Let's <span>CREATE</span> some tech.</div>
          <div>Vinner</div>
        </div>

        <div className="bg-[#D3CAB3] rounded-3xl p-8 lg:col-span-2">
          ABout Section
        </div>

        <div className="border-2 bg-[#D3CAB3] rounded-3xl p-4 lg:row-span-full">
          <div>Projects</div>
          <div className="flex flex-col gap-4 overflow-y-auto h-full">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>

        </div>

        <div className="bg-[#D3CAB3] rounded-3xl p-8 mb-4 lg:col-start-4 lg:row-span-full">
          Blog Section
        </div>
      </main>
      <div className="lg:w-full lg:flex lg:justify-end lg:mt-2">
        <div className="bg-[#D3CAB3] rounded-3xl p-8 lg:w-1/4">
          Contact Section
        </div>
      </div>

    </div>
  );
}
