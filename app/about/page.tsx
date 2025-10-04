import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Target, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">About Faris Motors</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over 25 years of excellence in serving India's commercial vehicle industry
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998 by Mohammed Faris, Faris Motors began as a small parts supplier in Mumbai with a
                  vision to provide quality truck parts at fair prices. What started as a modest operation has grown
                  into one of India's most trusted wholesale suppliers of truck body and chassis parts.
                </p>
                <p>
                  Over the past 25+ years, we've built our reputation on three core principles: quality products,
                  competitive pricing, and exceptional customer service. Our specialization in Tata vehicles has made us
                  the go-to supplier for truck owners, garage operators, and transport companies across India.
                </p>
                <p>
                  Today, Faris Motors maintains an extensive inventory of genuine and OEM parts, serving hundreds of
                  satisfied customers nationwide. Our team of experienced professionals understands the critical nature
                  of commercial vehicle operations and works tirelessly to minimize your downtime with fast, reliable
                  service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-foreground">25+</div>
                  <p className="text-sm text-muted-foreground">Years in Business</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-foreground">500+</div>
                  <p className="text-sm text-muted-foreground">Satisfied Customers</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-foreground">10,000+</div>
                  <p className="text-sm text-muted-foreground">Parts in Stock</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-foreground">98%</div>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  To be India's most trusted wholesale supplier of truck parts by consistently delivering quality
                  products, competitive pricing, and exceptional service that keeps our customers' vehicles running
                  efficiently.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to understand the unique needs of each customer and provide tailored solutions that help
                  their businesses thrive. Our commitment to excellence drives everything we do.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">Our Values</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Quality First",
                      description: "We never compromise on the quality of parts we supply",
                    },
                    {
                      title: "Customer Focus",
                      description: "Your success is our success - we're here to support you",
                    },
                    {
                      title: "Integrity",
                      description: "Honest pricing and transparent business practices always",
                    },
                    {
                      title: "Reliability",
                      description: "Consistent service you can count on, every single time",
                    },
                  ].map((value) => (
                    <div key={value.title} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground">Tata Vehicle Specialists</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Our deep expertise in Tata commercial vehicles sets us apart. We specialize in parts for:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {["Tata 407", "Tata 709", "Tata 1109", "Tata 1512"].map((model) => (
                  <Card key={model}>
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold text-foreground">{model}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                And many other Tata truck models. Contact us for specific model requirements.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
