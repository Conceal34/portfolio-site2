import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#D3CAB3] rounded-3xl gap-6 border border-[#1A1A1A]/10">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-playfair font-bold text-7xl lg:text-9xl text-[#1A1A1A] tracking-tight">404</h2>
        <p className="font-sans text-xs lg:text-sm text-[#1A1A1A]/60 uppercase tracking-widest font-semibold">Page Not Found</p>
      </div>
      <div className="h-px w-24 bg-[#1A1A1A]/20" />
      <div className="flex flex-col items-center gap-3">
        <p className="font-playfair text-lg lg:text-2xl text-[#1A1A1A]/80 max-w-md leading-relaxed">
          Let's get you back to building.
        </p>
        <p className="font-sans text-xs text-[#1A1A1A]/50 max-w-sm">
          The page you are looking for doesn't exist or has been moved to another path.
        </p>
      </div>
      <Link
        href="/"
        className="mt-2 font-sans text-xs tracking-widest uppercase bg-[#4C4B40] text-[#E8E4D9] px-6 py-3 rounded-full hover:bg-[#3a3a30] hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
