import Link from "next/link";

export default function Navbar() {
    return (
        <div className="rounded-xl bg-[#D3CAB3] text-[#1A1A1A] justify-between items-center flex px-6 py-4 lg:rounded-2xl">
            <Link href={'/'} className="font-playfair font-bold text-xl lg:text-2xl underline underline-offset-2">
                Vinner
            </Link>
            <div className="flex gap-6">
                <Link href={'/project'} className="font-sans text-xs tracking-widest uppercase hover:underline underline-offset-4 transition-all duration-100">Project</Link>
                <Link href={'/contact'} className="font-sans text-xs tracking-widest uppercase hover:underline underline-offset-4 transition-all duration-100">Contact</Link>
            </div>
        </div>
    )
}