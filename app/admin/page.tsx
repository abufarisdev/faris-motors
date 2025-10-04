"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth-context"
import { mockProducts, mockQuoteRequests, mockOrders, mockUsers } from "@/lib/mock-data"
import { Package, FileText, ShoppingCart, Users, DollarSign } from "lucide-react"
import { ProductsManagementTab } from "@/components/admin/products-management-tab"
import { QuotesManagementTab } from "@/components/admin/quotes-management-tab"
import { OrdersManagementTab } from "@/components/admin/orders-management-tab"
import { CustomersManagementTab } from "@/components/admin/customers-management-tab"

export default function AdminPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    } else if (user?.role !== "admin") {
      router.push("/dashboard")
    }
  }, [isAuthenticated, user, router])

  if (!user || user.role !== "admin") {
    return null
  }

  const customers = mockUsers.filter((u) => u.role === "customer")
  const pendingQuotes = mockQuoteRequests.filter((q) => q.status === "pending")
  const activeOrders = mockOrders.filter((o) => o.status === "processing" || o.status === "shipped")
  const totalRevenue = mockOrders
    .filter((o) => o.status === "delivered")
    .reduce((sum, order) => sum + order.totalAmount, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-muted/30">
        {/* Header */}
        <section className="border-b border-border bg-background py-8">
          <div className="container mx-auto px-4">
            <h1 className="mb-2 text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage products, quotes, orders, and customers</p>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Stats Cards */}
            <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{mockProducts.length}</p>
                    <p className="text-sm text-muted-foreground">Total Products</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{pendingQuotes.length}</p>
                    <p className="text-sm text-muted-foreground">Pending Quotes</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                    <ShoppingCart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{activeOrders.length}</p>
                    <p className="text-sm text-muted-foreground">Active Orders</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">₹{(totalRevenue / 100000).toFixed(1)}L</p>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Management Dashboard</CardTitle>
                <CardDescription>Manage all aspects of your business</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="quotes" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="quotes">
                      <FileText className="mr-2 h-4 w-4" />
                      Quotes
                    </TabsTrigger>
                    <TabsTrigger value="orders">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Orders
                    </TabsTrigger>
                    <TabsTrigger value="products">
                      <Package className="mr-2 h-4 w-4" />
                      Products
                    </TabsTrigger>
                    <TabsTrigger value="customers">
                      <Users className="mr-2 h-4 w-4" />
                      Customers
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="quotes" className="mt-6">
                    <QuotesManagementTab quotes={mockQuoteRequests} />
                  </TabsContent>

                  <TabsContent value="orders" className="mt-6">
                    <OrdersManagementTab orders={mockOrders} />
                  </TabsContent>

                  <TabsContent value="products" className="mt-6">
                    <ProductsManagementTab products={mockProducts} />
                  </TabsContent>

                  <TabsContent value="customers" className="mt-6">
                    <CustomersManagementTab customers={customers} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
