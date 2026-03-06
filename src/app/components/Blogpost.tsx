import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image";


interface BlogPostProps {
    id: number | string;
    blog_img: string | StaticImageData;
    blog_title: string;
    blog_content: string;
    blog_link: string;
}


export default function BlogPost({
    id,
    blog_img,
    blog_title,
    blog_content,
    blog_link
} : BlogPostProps) {
    return (
        <div className="p-4 border-2 border-solid border-black rounded-2xl bg-[#D3CAB3] w-full min-h-fit flow-root flex flex-col gap-2">
            <Image
                src={blog_img}
                alt='project_image'
                className='rounded-xl w-1/2 mb-2 float-left mr-2'
            />
            <div className="flex flex-col justify-between items-start mb-1">
                <span className="font-bold text-lg">{blog_title}</span>
                <Link href={blog_link} className="text-blue-700 underline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
                </Link>
            </div>
            <p className="text-sm leading-relaxed text-wrap break-words">
                {blog_content.length > 250 ? (blog_content.slice(0, 249) + ".....") : blog_content}
            </p>
        </div>

    )
}