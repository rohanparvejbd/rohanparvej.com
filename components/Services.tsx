import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Video Editing",
      description: "Professional and cinematic video editing using Premiere Pro and After Effects to bring your visual stories to life.",
    },
    {
      title: "Graphic Design",
      description: "Creative and modern designs using Photoshop and Illustrator for brands that want to stand out.",
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns across platforms to boost your online presence and engagement.",
    }
  ]

  return (
    <section id="services" className="py-20 px-8 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-10 text-center">
          My Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}