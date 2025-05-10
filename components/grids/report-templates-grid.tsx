"use client"

import { FileBarChart, FileSpreadsheet, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const templates = [
  {
    id: "TPL-001",
    name: "Relatório Financeiro Mensal",
    description: "Visão geral das finanças com demonstrativos de resultados, balanço e fluxo de caixa.",
    type: "Financeiro",
    icon: FileText,
    format: "PDF",
  },
  {
    id: "TPL-002",
    name: "Análise de Fluxo de Caixa",
    description: "Análise detalhada do fluxo de caixa com projeções e comparativos.",
    type: "Financeiro",
    icon: FileBarChart,
    format: "PDF",
  },
  {
    id: "TPL-003",
    name: "Relatório de Impostos",
    description: "Resumo de obrigações fiscais, impostos pagos e previsão de tributos.",
    type: "Fiscal",
    icon: FileText,
    format: "PDF",
  },
  {
    id: "TPL-004",
    name: "Análise de Desempenho",
    description: "Análise detalhada de KPIs financeiros, comparativos e tendências de desempenho.",
    type: "Gerencial",
    icon: FileBarChart,
    format: "PDF",
  },
  {
    id: "TPL-005",
    name: "Relatório de Vendas",
    description: "Análise de vendas por produto, cliente, região e período.",
    type: "Operacional",
    icon: FileSpreadsheet,
    format: "XLSX",
  },
  {
    id: "TPL-006",
    name: "Relatório de Despesas",
    description: "Detalhamento de despesas por categoria, centro de custo e período.",
    type: "Financeiro",
    icon: FileSpreadsheet,
    format: "XLSX",
  },
]

export function ReportTemplatesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <Card key={template.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{template.type}</Badge>
              <Badge variant="secondary">{template.format}</Badge>
            </div>
            <CardTitle className="text-base mt-2">{template.name}</CardTitle>
            <CardDescription className="line-clamp-2">{template.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center p-4">
              <template.icon className="h-16 w-16 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Gerar Relatório
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
