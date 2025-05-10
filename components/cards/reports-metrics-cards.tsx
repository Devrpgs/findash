"use client"

import { ArrowUp, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ReportsMetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total de Relatórios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">124</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+12 no último mês</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Relatórios Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <div className="flex items-center pt-1 text-xs">
            <span>Nos últimos 30 dias</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Relatórios Agendados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
          <div className="flex items-center pt-1 text-xs">
            <span>Próximo: Relatório Mensal (01/06)</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Modelos Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <FileText className="mr-1 h-3 w-3" />
            <span>3 novos modelos adicionados</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
