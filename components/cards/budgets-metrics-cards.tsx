"use client"

import { ArrowDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BudgetsMetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Orçamento Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 465.000,00</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            <span>+5,3% em relação ao período anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Utilizado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 325.500,00</div>
          <div className="flex items-center pt-1 text-xs">
            <span>70% do orçamento total</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Disponível</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 139.500,00</div>
          <div className="flex items-center pt-1 text-xs">
            <span>30% do orçamento total</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Variação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">-2,5%</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowDown className="mr-1 h-3 w-3" />
            <span>Abaixo do orçado</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
