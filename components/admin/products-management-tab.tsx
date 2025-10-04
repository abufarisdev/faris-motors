"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Product } from "@/lib/types"
import { Search, Edit, Trash2, Plus } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

interface ProductsManagementTabProps {
  products: Product[]
}

export function ProductsManagementTab({ products }: ProductsManagementTabProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.vehicleModel.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleEdit = (productId: string) => {
    toast({
      title: "Edit Product",
      description: "Product editing functionality would open here.",
    })
  }

  const handleDelete = (productId: string) => {
    toast({
      title: "Product Deleted",
      description: "Product has been removed from the catalog.",
      variant: "destructive",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
                      <p className="text-xs text-muted-foreground">Part #: {product.partNumber}</p>
                    </div>
                    {product.inStock ? (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Out of Stock</Badge>
                    )}
                  </div>
                  <p className="mb-2 text-xs text-muted-foreground">{product.vehicleModel}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(product.id)}
                        className="bg-transparent"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(product.id)}
                        className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
