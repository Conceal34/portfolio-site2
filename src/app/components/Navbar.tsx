import Link from "next/link";

export default function Navbar() {
    return (
        <div className="rounded-3xl bg-[#D3CAB3] text-[#1A1A1A] lgtext-2xl p-8 justify-between items-center flex">
            <Link href={'/'} className="underline underline-offset-1">
                Vinner
            </Link>
            <div className="flex gap-4 underline-offset-1">
                <Link href={'/project'} className="hover:underline transition-all duration-100">Project</Link>
                <Link href={'/contact'} className="hover:underline transition-all duration-100">Contact</Link>
            </div>
        </div>
    )
}