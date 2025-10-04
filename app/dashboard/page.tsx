"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth-context"
import { mockQuoteRequests, mockOrders } from "@/lib/mock-data"
import { Package, FileText, ShoppingCart, User } from "lucide-react"
import { QuotesTab } from "@/components/dashboard/quotes-tab"
import { OrdersTab } from "@/components/dashboard/orders-tab"
import { ProfileTab } from "@/components/dashboard/profile-tab"

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    } else if (user?.role === "admin") {
      router.push("/admin")
    }
  }, [isAuthenticated, user, router])

  if (!user || user.role !== "customer") {
    return null
  }

  // Filter data for current user
  const userQuotes = mockQuoteRequests.filter((q) => q.customerId === user.id)
  const userOrders = mockOrders.filter((o) => o.customerId === user.id)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-muted/30">
        {/* Header */}
        <section className="border-b border-border bg-background py-8">
          <div className="container mx-auto px-4">
            <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">Manage your quotes, orders, and account settings</p>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Stats Cards */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{userQuotes.length}</p>
                    <p className="text-sm text-muted-foreground">Quote Requests</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{userOrders.length}</p>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {userOrders.filter((o) => o.status === "shipped" || o.status === "processing").length}
                    </p>
                    <p className="text-sm text-muted-foreground">Active Orders</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>View and manage your quotes, orders, and profile</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="quotes" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="quotes">
                      <FileText className="mr-2 h-4 w-4" />
                      Quotes
                    </TabsTrigger>
                    <TabsTrigger value="orders">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Orders
                    </TabsTrigger>
                    <TabsTrigger value="profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="quotes" className="mt-6">
                    <QuotesTab quotes={userQuotes} />
                  </TabsContent>

                  <TabsContent value="orders" className="mt-6">
                    <OrdersTab orders={userOrders} />
                  </TabsContent>

                  <TabsContent value="profile" className="mt-6">
                    <ProfileTab user={user} />
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
