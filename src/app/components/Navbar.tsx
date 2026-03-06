import Link from "next/link";

export default function Navbar() {
    return (
        <div className="rounded-xl bg-[#D3CAB3] text-[#1A1A1A] justify-between items-center flex p-4 text-xl lg:rounded-2xl lg:text-2xl lg:p-4 ">
            <Link href={'/'} className="underline underline-offset-1 font-bold">
                Vinner
            </Link>
            <div className="flex gap-4 underline-offset-1">
                <Link href={'/project'} className="hover:underline transition-all duration-100">Project</Link>
                <Link href={'/contact'} className="hover:underline transition-all duration-100">Contact</Link>
            </div>
        </div>
    )
}