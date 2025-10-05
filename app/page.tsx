import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Truck, Shield, Clock, Users, Package, Wrench, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Trusted Since 1998</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
               Wholesale Supplier of Truck Parts
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty md:text-xl">
                Specializing in body and chassis parts for Tata vehicles. Quality parts and Competitive prices
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/products">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Choose Faris Motors?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Over 25 years of experience serving the commercial vehicle industry with excellence
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Extensive Inventory</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive range of genuine and OEM parts for all Tata truck models
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All parts tested and certified to meet industry standards and specifications
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Quick dispatch and reliable delivery across India to minimize your downtime
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Expert Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Knowledgeable team ready to help you find the right parts for your needs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center ">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Wrench className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Wholesale Pricing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Competitive bulk pricing for garages, fleet owners, and transport companies
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Tata Specialists</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Specialized expertise in Tata 407, 709, 1109, 1512, and other models
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Categories Preview */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Product Categories</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Browse our comprehensive range of truck chasis and body parts
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Engine Parts",
                "Transmission Parts",
                "Suspension & Steering",
                "Brake System",
                "Electrical Components",
                "Body Parts",
                "Cooling System",
                "Fuel System",
              ].map((category) => (
                <Link key={category} href={`/products?category=${encodeURIComponent(category)}`}>
                  <Card className="transition-all hover:border-primary hover:shadow-md">
                    <CardContent className="flex items-center justify-between p-4">
                      <span className="font-medium text-foreground">{category}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/products">
                <Button size="lg">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center md:p-12">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Ready to Get Started?</h2>
                <p className="mx-auto mb-8 max-w-2xl text-muted-foreground leading-relaxed">
                  Join hundreds of satisfied customers who trust Faris Motors for their truck parts needs. Request a
                  quote today and experience our exceptional service.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Request a Quote
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                      Browse Catalog
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
