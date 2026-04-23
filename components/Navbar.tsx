import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl bg-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100">
        
        {/* লোগো এবং আপনার ছবি */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 shadow-sm">
            <img src="/profile.png" alt="Rohan Parvej" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl font-black tracking-tight text-zinc-900 leading-none mb-0.5">
              ROHAN
            </span>
            <span className="text-[10px] font-bold tracking-widest text-blue-600 leading-none">
              PARVEJ
            </span>
          </div>
        </div>
        
        {/* মেনু লিংকগুলো */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wide text-zinc-600">
          <Link href="#about" className="hover:text-blue-600 transition-colors">ABOUT</Link>
          <Link href="#services" className="hover:text-blue-600 transition-colors">SERVICES</Link>
          <Link href="#projects" className="hover:text-blue-600 transition-colors">PROJECTS</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">CONTACT</Link>
          <Link href="#blog" className="hover:text-blue-600 transition-colors">BLOG</Link>
        </div>
        
        {/* বাটনগুলো */}
        <div className="hidden md:flex items-center gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 font-bold text-xs h-10 transition-colors">
            START YOUR PROJECT
          </Button>
          <Button variant="outline" className="rounded-full px-6 font-bold text-xs h-10 border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-colors">
            LOGIN
          </Button>
        </div>

      </nav>
    </div>
  )
}