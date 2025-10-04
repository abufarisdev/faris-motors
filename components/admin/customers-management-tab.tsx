import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { User } from "@/lib/types"
import { Mail, Phone, Building, Calendar } from "lucide-react"

interface CustomersManagementTabProps {
  customers: User[]
}

export function CustomersManagementTab({ customers }: CustomersManagementTabProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Total {customers.length} {customers.length === 1 ? "customer" : "customers"}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {customers.map((customer) => (
          <Card key={customer.id}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{customer.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    Customer
                  </Badge>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.company}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
