"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getProductById, mockProducts } from "@/lib/mock-data"
import { ArrowLeft, Package, Truck, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const relatedProducts = mockProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="border-b border-border bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <Badge variant="outline" className="mb-3 w-fit">
                  {product.category}
                </Badge>
                <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
                <p className="mb-4 text-muted-foreground">{product.description}</p>

                <div className="mb-6 flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                  {product.inStock ? (
                    <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <XCircle className="mr-1 h-3 w-3" />
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <Card className="mb-6">
                  <CardContent className="p-4">
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Part Number:</span>
                        <span className="font-mono font-medium text-foreground">{product.partNumber}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vehicle Model:</span>
                        <span className="font-medium text-foreground">{product.vehicleModel}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium text-foreground">{product.category}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {product.specifications && (
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="mb-3 font-semibold text-foreground">Specifications</h3>
                      <div className="grid gap-2 text-sm">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-medium text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <QuoteRequestDialog product={product}>
                    <Button size="lg" className="flex-1">
                      <Package className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                  </QuoteRequestDialog>
                  <Link href="/contact" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full bg-transparent">
                      Contact Us
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 rounded-lg bg-muted/50 p-4">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 shrink-0 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Fast Delivery Available</p>
                      <p className="text-muted-foreground">We ship across India with reliable logistics partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-border bg-muted/30 py-12">
            <div className="container mx-auto px-4">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Related Products</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                      <CardContent className="flex flex-col p-0">
                        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
                          <Image
                            src={relatedProduct.imageUrl || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                          <h3 className="mb-1 font-semibold text-foreground line-clamp-1">{relatedProduct.name}</h3>
                          <p className="mb-2 text-xs text-muted-foreground">{relatedProduct.vehicleModel}</p>
                          <div className="mt-auto">
                            <span className="text-lg font-bold text-primary">
                              ₹{relatedProduct.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
