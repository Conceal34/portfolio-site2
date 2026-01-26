import Link from "next/link"
import Image from "next/image"

export default function ProjectCard({id, proj_img, proj_name, description, project_link}) {
    return (
        <div href={project_link} className="flex flex-col gap-1 border-2 border-solid border-black rounded-3xl bg-[#D3CAB3] w-full max-h-3xl">
            <Image src={proj_img} alt='project_image' className='float-left rounded-3xl w-0.5 h-0.5'/>
            <div>
                {proj_name}
                <Link href={project_link}>Link</Link>
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}