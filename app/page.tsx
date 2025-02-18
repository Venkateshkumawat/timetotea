import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=2070&auto=format&fit=crop"
            alt="Tea Ceremony"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            A Journey of Flavors & Traditions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Elevate Your Tea Experience with our curated collection of premium teas and artisanal accessories
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">Shop Our Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white" asChild>
              <Link href="/about">Explore Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Our Signature Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Imperial Green Tea",
                image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop",
                price: "$32",
                badge: "Bestseller",
              },
              {
                title: "Organic Oolong",
                image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=2070&auto=format&fit=crop",
                price: "$28",
                badge: "Limited Edition",
              },
              {
                title: "Ceremonial Matcha",
                image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2068&auto=format&fit=crop",
                price: "$45",
                badge: "Organic",
              },
            ].map((product, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{product.badge}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{product.title}</CardTitle>
                  <CardDescription>{product.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href={`/products/${index + 1}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Heritage & Tradition</h2>
              <p className="text-muted-foreground mb-6">
                Time to Tea brings centuries-old tea traditions to your modern lifestyle. We carefully source our teas
                from ethical farms across Asia, ensuring each cup tells a story of heritage and craftsmanship.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
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
        </div>
      </section>
    </div>
  )
}

