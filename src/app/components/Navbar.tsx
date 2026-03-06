import Link from "next/link";

export default function Navbar() {
    return (
        <div className="rounded-xl bg-[#D3CAB3] text-[#1A1A1A] justify-between items-center flex px-6 py-4 lg:rounded-2xl">
            <Link href={'/'} className="font-playfair font-bold text-xl lg:text-2xl underline underline-offset-2">
                Vinner
            </Link>
            <div className="flex gap-4 items-center">
                <Link
                    href="/resume.pdf"
                    download="Vinner_Resume"
                    className="font-sans text-xs tracking-widest uppercase bg-[#4C4B40] text-[#E8E4D9] px-4 py-2 rounded-full hover:bg-[#3a3a30] transition-colors duration-200"
                >
                    Resume ↓
                </Link>
            </div>
        </div>
    )
}