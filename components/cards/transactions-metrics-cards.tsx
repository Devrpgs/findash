"use client"

import { ArrowDown, ArrowUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TransactionsMetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total de Transações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.245</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+12,3% em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Entradas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 724.352,00</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>532 transações</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Saídas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 432.987,00</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <ArrowDown className="mr-1 h-3 w-3" />
            <span>713 transações</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Transações Pendentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23</div>
          <div className="flex items-center pt-1 text-xs">
            <span>R$ 87.450,00 em processamento</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
