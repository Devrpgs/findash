"use client"

import { ArrowUp, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InvestmentsMetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Valor Total Investido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 1.245.000,00</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            <span>+8,3% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Retorno Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 187.450,00</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>15,1% de retorno</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Retorno Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 12.450,00</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <TrendingDown className="mr-1 h-3 w-3" />
            <span>-2,8% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Rentabilidade Anual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,4%</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+1,2% acima do benchmark</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
