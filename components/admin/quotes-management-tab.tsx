"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { QuoteRequest } from "@/lib/types"
import { Calendar, Package, MessageSquare, Edit } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface QuotesManagementTabProps {
  quotes: QuoteRequest[]
}

export function QuotesManagementTab({ quotes }: QuotesManagementTabProps) {
  const [filterStatus, setFilterStatus] = useState<QuoteRequest["status"] | "all">("all")
  const { toast } = useToast()

  const filteredQuotes = filterStatus === "all" ? quotes : quotes.filter((q) => q.status === filterStatus)

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
      <div className="flex items-center justify-between">
        <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value as any)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Quotes</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="quoted">Quoted</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Showing {filteredQuotes.length} {filteredQuotes.length === 1 ? "quote" : "quotes"}
        </p>
      </div>

      {filteredQuotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} toast={toast} />
      ))}
    </div>
  )
}

function QuoteCard({ quote, toast }: { quote: QuoteRequest; toast: any }) {
  const [open, setOpen] = useState(false)
  const [quotedPrice, setQuotedPrice] = useState(quote.quotedPrice?.toString() || "")
  const [adminNotes, setAdminNotes] = useState(quote.adminNotes || "")

  const handleSubmitQuote = () => {
    toast({
      title: "Quote Sent",
      description: `Quote for request #${quote.id} has been sent to the customer.`,
    })
    setOpen(false)
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
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="font-semibold text-foreground">Quote #{quote.id}</h3>
              <Badge className={getStatusColor(quote.status)}>{quote.status}</Badge>
            </div>

            <div className="mb-3 text-sm">
              <span className="text-muted-foreground">Customer: </span>
              <span className="font-medium text-foreground">{quote.customerName}</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-muted-foreground">{quote.customerEmail}</span>
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
            {quote.status === "pending" && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="mt-2">
                    <Edit className="mr-2 h-4 w-4" />
                    Send Quote
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Send Quote</DialogTitle>
                    <DialogDescription>Provide pricing and notes for this quote request</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="quoted-price">Quoted Price (₹)</Label>
                      <Input
                        id="quoted-price"
                        type="number"
                        placeholder="Enter price"
                        value={quotedPrice}
                        onChange={(e) => setQuotedPrice(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-notes">Notes for Customer</Label>
                      <Textarea
                        id="admin-notes"
                        placeholder="Add any notes or details..."
                        rows={4}
                        value={adminNotes}
                        onChange={(e) => setAdminNotes(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleSubmitQuote} className="w-full">
                      Send Quote to Customer
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
