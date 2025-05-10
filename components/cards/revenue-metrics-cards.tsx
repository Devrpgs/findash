"use client"

import { ArrowUp, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RevenueMetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 724.352,00</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            <span>+15,3% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Receita Recorrente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 432.987,00</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            <span>+8,7% em relação ao mês anterior</span>
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
            <TrendingDown className="mr-1 h-3 w-3" />
            <span>-2,8% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Taxa de Crescimento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15,3%</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+3,4% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
