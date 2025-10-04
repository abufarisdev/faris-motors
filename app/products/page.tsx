"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mockProducts, getProductsByCategory, searchProducts } from "@/lib/mock-data"
import type { ProductCategory } from "@/lib/types"
import { Search, Filter, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories: (ProductCategory | "all")[] = [
  "all",
  "Engine Parts",
  "Transmission Parts",
  "Suspension & Steering",
  "Brake System",
  "Electrical Components",
  "Body Parts",
  "Cooling System",
  "Fuel System",
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get("category") as ProductCategory) || "all"

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(initialCategory)
  const [searchQuery, setSearchQuery] = useState("")
  const [stockFilter, setStockFilter] = useState<"all" | "in-stock" | "out-of-stock">("all")

  const filteredProducts = useMemo(() => {
    let products = selectedCategory === "all" ? mockProducts : getProductsByCategory(selectedCategory)

    if (searchQuery) {
      products = searchProducts(searchQuery)
      if (selectedCategory !== "all") {
        products = products.filter((p) => p.category === selectedCategory)
      }
    }

    if (stockFilter === "in-stock") {
      products = products.filter((p) => p.inStock)
    } else if (stockFilter === "out-of-stock") {
      products = products.filter((p) => !p.inStock)
    }

    return products
  }, [selectedCategory, searchQuery, stockFilter])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Product Catalog</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Browse our extensive range of truck parts for Tata vehicles
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="border-b border-border bg-background py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by part name, number, or vehicle model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Filters:</span>
                </div>

                <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as any)}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat === "all" ? "All Categories" : cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={stockFilter} onValueChange={(value) => setStockFilter(value as any)}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Stock Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="in-stock">In Stock</SelectItem>
                    <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
              {(searchQuery || selectedCategory !== "all" || stockFilter !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setStockFilter("all")
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Package className="mb-4 h-16 w-16 text-muted-foreground" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                      <CardContent className="flex flex-col p-0">
                        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
                          <Image
                            src={product.imageUrl || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                          {!product.inStock && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                              <Badge variant="secondary">Out of Stock</Badge>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                          <Badge variant="outline" className="mb-2 w-fit text-xs">
                            {product.category}
                          </Badge>
                          <h3 className="mb-1 font-semibold text-foreground line-clamp-1">{product.name}</h3>
                          <p className="mb-2 text-xs text-muted-foreground">Part #: {product.partNumber}</p>
                          <p className="mb-3 text-xs text-muted-foreground">{product.vehicleModel}</p>
                          <div className="mt-auto flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
                            {product.inStock && (
                              <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                                In Stock
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
