"use client"

import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ClientsMetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">248</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+15 no último mês</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Novos Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">32</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            <span>+24% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">94,2%</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+1,8% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Receita por Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 12.365,00</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <ArrowDown className="mr-1 h-3 w-3" />
            <span>-2,8% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
