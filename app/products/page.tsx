"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Filter, Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Imperial Green Tea",
    category: "Green Tea",
    price: 32,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Organic Oolong",
    category: "Oolong Tea",
    price: 28,
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=2070&auto=format&fit=crop",
    badge: "Limited Edition",
  },
  {
    id: 3,
    name: "Ceremonial Matcha",
    category: "Matcha",
    price: 45,
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2068&auto=format&fit=crop",
    badge: "Organic",
  },
  // Add more products here
]

export default function ProductsPage() {
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("featured")
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) => {
    if (filter !== "all" && product.category !== filter) return false
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price
    if (sort === "price-desc") return b.price - a.price
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-serif text-4xl font-bold mb-8">Our Tea Collection</h1>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="w-full md:w-64 space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Select onValueChange={setFilter} defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Green Tea">Green Tea</SelectItem>
                <SelectItem value="Oolong Tea">Oolong Tea</SelectItem>
                <SelectItem value="Matcha">Matcha</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Sort</h2>
            <Select onValueChange={setSort} defaultValue="featured">
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {product.badge && (
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{product.name}</CardTitle>
                  <CardDescription>${product.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

