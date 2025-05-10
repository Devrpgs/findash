"use client"

import { ArrowUp, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExpensesMetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Despesas Totais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 432.987,00</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            <span>+8,7% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Despesas Fixas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 285.432,00</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <TrendingDown className="mr-1 h-3 w-3" />
            <span>-1,2% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Despesas Variáveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 147.555,00</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            <span>+12,8% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Taxa de Variação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8,7%</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+2,4% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
