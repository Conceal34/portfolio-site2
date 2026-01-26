import { StaticImageData } from "next/image";
import Link from "next/link"
import Image from "next/image"

interface ProjectProps {
    id: number | string;
    proj_img: string | StaticImageData;
    proj_name: string;
    description: string;
    project_link: string;
}

export default function ProjectCard({ id, proj_img, proj_name, description, project_link } : ProjectProps) {
    return (
        <div className="p-4 border-2 border-solid border-black rounded-2xl bg-[#D3CAB3] w-full min-h-fit md:flow-root flex flex-col gap-2">
            <Image
                src={proj_img}
                alt='project_image'
                className='rounded-3xl w-full h-auto mb-2 md:float-left md:w-1/3 md:mr-4'
            />
            <div className="flex flex-col justify-between items-start mb-1">
                <span className="font-bold text-lg">{proj_name}</span>
                <Link href={project_link} className="text-blue-700 underline">Link</Link>
            </div>
            <p className="text-sm leading-relaxed text-wrap break-words">
                {description}
            </p>
        </div>

    )
}