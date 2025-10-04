import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { QuoteRequest } from "@/lib/types"
import { Calendar, Package, MessageSquare } from "lucide-react"
import Link from "next/link"

interface QuotesTabProps {
  quotes: QuoteRequest[]
}

export function QuotesTab({ quotes }: QuotesTabProps) {
  if (quotes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Package className="mb-4 h-16 w-16 text-muted-foreground" />
        <h3 className="mb-2 text-xl font-semibold text-foreground">No quote requests yet</h3>
        <p className="mb-4 text-muted-foreground">Browse our products and request quotes for bulk orders</p>
        <Link href="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    )
  }

  const getStatusColor = (status: QuoteRequest["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      case "quoted":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "accepted":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "rejected":
        return "bg-red-500/10 text-red-700 dark:text-red-400"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-4">
      {quotes.map((quote) => (
        <Card key={quote.id}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">Quote #{quote.id}</h3>
                  <Badge className={getStatusColor(quote.status)}>{quote.status}</Badge>
                </div>

                <div className="mb-4 space-y-2">
                  {quote.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">
                        {product.productName} × {product.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {quote.message && (
                  <div className="mb-3 flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                    <MessageSquare className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                    <p className="text-sm text-muted-foreground">{quote.message}</p>
                  </div>
                )}

                {quote.quotedPrice && (
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">Quoted Price: </span>
                    <span className="text-lg font-bold text-primary">₹{quote.quotedPrice.toLocaleString()}</span>
                  </div>
                )}

                {quote.adminNotes && (
                  <div className="rounded-lg bg-primary/5 p-3">
                    <p className="text-sm font-medium text-foreground">Admin Notes:</p>
                    <p className="text-sm text-muted-foreground">{quote.adminNotes}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(quote.createdAt).toLocaleDateString()}
                </div>
                {quote.status === "quoted" && (
                  <Button size="sm" className="mt-2">
                    Accept Quote
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
