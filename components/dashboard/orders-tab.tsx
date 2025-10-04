import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Order } from "@/lib/types"
import { Calendar, Package, MapPin, Truck } from "lucide-react"

interface OrdersTabProps {
  orders: Order[]
}

export function OrdersTab({ orders }: OrdersTabProps) {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Package className="mb-4 h-16 w-16 text-muted-foreground" />
        <h3 className="mb-2 text-xl font-semibold text-foreground">No orders yet</h3>
        <p className="text-muted-foreground">Your order history will appear here</p>
      </div>
    )
  }

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      case "processing":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "shipped":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400"
      case "delivered":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "cancelled":
        return "bg-red-500/10 text-red-700 dark:text-red-400"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">Order #{order.id}</h3>
                  <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                </div>

                <div className="mb-4 space-y-2">
                  {order.products.map((product, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">
                          {product.productName} × {product.quantity}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">₹{product.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-3 flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                  <MapPin className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                  <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-3">
                  <span className="text-sm font-medium text-foreground">Total Amount:</span>
                  <span className="text-xl font-bold text-primary">₹{order.totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(order.createdAt).toLocaleDateString()}
                </div>
                {(order.status === "shipped" || order.status === "processing") && (
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    <Truck className="mr-2 h-4 w-4" />
                    Track Order
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
