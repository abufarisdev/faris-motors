"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Order } from "@/lib/types"
import { Calendar, Package, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface OrdersManagementTabProps {
  orders: Order[]
}

export function OrdersManagementTab({ orders }: OrdersManagementTabProps) {
  const [filterStatus, setFilterStatus] = useState<Order["status"] | "all">("all")
  const { toast } = useToast()

  const filteredOrders = filterStatus === "all" ? orders : orders.filter((o) => o.status === filterStatus)

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

  const handleUpdateStatus = (orderId: string, newStatus: Order["status"]) => {
    toast({
      title: "Order Updated",
      description: `Order #${orderId} status changed to ${newStatus}.`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value as any)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Showing {filteredOrders.length} {filteredOrders.length === 1 ? "order" : "orders"}
        </p>
      </div>

      {filteredOrders.map((order) => (
        <Card key={order.id}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">Order #{order.id}</h3>
                  <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                </div>

                <div className="mb-3 text-sm">
                  <span className="text-muted-foreground">Customer: </span>
                  <span className="font-medium text-foreground">{order.customerName}</span>
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
                {order.status !== "delivered" && order.status !== "cancelled" && (
                  <Select
                    value={order.status}
                    onValueChange={(value) => handleUpdateStatus(order.id, value as Order["status"])}
                  >
                    <SelectTrigger className="mt-2 w-[150px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
