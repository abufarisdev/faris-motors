import Link from "next/link"
import { Truck, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none text-foreground">Faris Motors</span>
                <span className="text-xs text-muted-foreground">Since 1998</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading wholesale supplier of truck body and chassis parts for Tata vehicles across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About Us
              </Link>
              <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Products
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Product Categories</h3>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Engine Parts</span>
              <span className="text-sm text-muted-foreground">Transmission Parts</span>
              <span className="text-sm text-muted-foreground">Brake System</span>
              <span className="text-sm text-muted-foreground">Electrical Components</span>
              <span className="text-sm text-muted-foreground">Body Parts</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Industrial Area, Phase 2<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+91 98765 00000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@farismotors.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Faris Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
