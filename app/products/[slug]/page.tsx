"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductZoom } from "@/components/product-zoom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { Heart, Leaf, ShieldCheck, Truck } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Imperial Green Tea",
    price: 32.0,
    description:
      "Our signature Imperial Green Tea is hand-picked from the misty mountains of China's Fujian province. Each leaf is carefully selected and processed to preserve its natural essence and therapeutic properties.",
    images: [
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=2070&auto=format&fit=crop",
    ],
    details: {
      origin: "Fujian Province, China",
      harvest: "Spring 2024",
      altitude: "1,500m",
      grade: "Premium",
    },
    brewing: {
      temperature: "80°C",
      time: "2-3 minutes",
      serving: "1 tsp per cup",
    },
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const productId = Number.parseInt(params.slug)
  if (isNaN(productId) || productId < 1 || productId > products.length) {
    return <div className="container mx-auto px-4 py-24">Product not found</div>
  }

  const [quantity, setQuantity] = useState(1)

  // This would normally come from a database
  const product = products[productId - 1]

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="container mx-auto px-4 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div variants={fadeIn("right")} className="space-y-4">
          <ProductZoom src={product.images[0]} alt={product.name} />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left")} className="space-y-8">
          <div>
            <h1 className="font-serif text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <button className="p-2 px-4 text-lg" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span className="p-2 px-4 border-x">{quantity}</span>
              <button className="p-2 px-4 text-lg" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <Button size="lg" className="flex-1">
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
            <Button size="icon" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Leaf, text: "Organic Certified" },
              { icon: ShieldCheck, text: "Quality Guaranteed" },
              { icon: Truck, text: "Free Shipping" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-4">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="brewing">Brewing Guide</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mt-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-sm text-muted-foreground capitalize">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="brewing" className="space-y-4">
              <div className="grid grid-cols-3 gap-4 mt-4">
                {Object.entries(product.brewing).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-sm text-muted-foreground capitalize">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4">
              <p>Free shipping on orders over $50. Delivery within 3-5 business days.</p>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  )
}

