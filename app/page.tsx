import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="flex h-screen flex-col items-center justify-center gap-6 px-4 text-center mt-10">
        
        {/* প্রোফাইল ছবি */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-xl mb-2">
          <img 
            src="/profile.png" 
            alt="Rohan Parvej" 
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900">
          Rohan Parvej
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl">
          Professional Video Editor, Graphic Designer & Digital Marketer.
        </p>
        
        <div className="flex gap-4 mt-4">
          <Button size="lg" className="px-8">View Projects</Button>
          <Button size="lg" variant="outline" className="px-8">Contact Me</Button>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* Footer Section */}
      <Footer />
    </main>
  )
}