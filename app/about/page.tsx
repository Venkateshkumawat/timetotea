import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">About Time to Tea</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg">
              Time to Tea began with a simple mission: to share the world's finest teas and the cultural traditions that
              surround them. Our journey started in the misty mountains of China's Fujian province, where we forged
              relationships with local tea masters and farmers who had been perfecting their craft for generations.
            </p>
            <p className="text-lg">
              Today, we continue to honor these traditions while embracing innovation in tea cultivation and
              preparation. Our commitment to quality, sustainability, and cultural preservation remains unwavering.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070&auto=format&fit=crop"
              alt="Tea Tradition"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We source only the finest teas from renowned tea gardens around the world.",
              },
              {
                title: "Sustainability",
                description: "Our commitment to environmental stewardship guides every decision we make.",
              },
              {
                title: "Community",
                description: "We believe in fostering connections through the shared experience of tea.",
              },
            ].map((value, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-serif text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & Tea Master",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "David Wong",
                role: "Head of Sourcing",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Emily Parker",
                role: "Tea Educator",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Michael Zhang",
                role: "Quality Control",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <div key={index} className="space-y-4">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

