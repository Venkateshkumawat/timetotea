"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { Calendar } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Art of Tea Brewing",
      excerpt: "Learn the traditional methods and secrets of brewing the perfect cup of tea.",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1557816274-5d7acd40cbb7?q=80&w=2070&auto=format&fit=crop",
      category: "Brewing Guide",
    },
    {
      id: 2,
      title: "Health Benefits of Green Tea",
      excerpt: "Discover the numerous health benefits of incorporating green tea into your daily routine.",
      date: "February 12, 2024",
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop",
      category: "Health & Wellness",
    },
    {
      id: 3,
      title: "Tea Ceremonies Around the World",
      excerpt: "Explore the rich traditions of tea ceremonies from different cultures.",
      date: "February 10, 2024",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=2069&auto=format&fit=crop",
      category: "Culture",
    },
    // Add more blog posts...
  ]

  return (
    <div className="min-h-screen py-24">
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="container mx-auto px-4">
        <motion.div variants={fadeIn()} className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Tea Journal</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles about tea culture, brewing techniques, and the latest news from the world
            of tea.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div key={post.id} variants={fadeIn("up")}>
              <Link href={`/blog/${post.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <CardTitle className="font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

