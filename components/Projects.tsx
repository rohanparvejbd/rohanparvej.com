import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Cinematic Wedding Video",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
    }
  ]

  return (
    <section id="work" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-10 text-center">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-zinc-500 mb-2 font-medium">{project.category}</p>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{project.title}</h3>
                <Button variant="outline" className="w-full">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}