"use client"

import { useState } from "react"
import { Calendar, Download, Filter, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InvestmentsPerformanceChart } from "@/components/charts/investments-performance-chart"
import { InvestmentsAllocationChart } from "@/components/charts/investments-allocation-chart"
import { InvestmentsTable } from "@/components/tables/investments-table"
import { InvestmentsMetricsCards } from "@/components/cards/investments-metrics-cards"
import { AddInvestmentDialog } from "@/components/dialogs/add-investment-dialog"

export function InvestmentsPageContent() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Investimentos</h1>
          <p className="text-muted-foreground">Gestão e acompanhamento de investimentos</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>Maio 2025</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            <span>Filtros</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            <span>Exportar</span>
          </Button>
          <Button size="sm" className="gap-2" onClick={() => setOpenDialog(true)}>
            <Plus className="h-4 w-4" />
            <span>Novo Investimento</span>
          </Button>
        </div>
      </div>

      <InvestmentsMetricsCards />

      <Tabs defaultValue="overview" className="mb-6 mt-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="performance">Desempenho</TabsTrigger>
            <TabsTrigger value="allocation">Alocação</TabsTrigger>
            <TabsTrigger value="opportunities">Oportunidades</TabsTrigger>
          </TabsList>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Mensal</SelectItem>
              <SelectItem value="quarterly">Trimestral</SelectItem>
              <SelectItem value="yearly">Anual</SelectItem>
              <SelectItem value="all">Todo o período</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsContent value="overview" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Desempenho dos Investimentos</CardTitle>
                <CardDescription>Retorno ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <InvestmentsPerformanceChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Alocação de Ativos</CardTitle>
                <CardDescription>Distribuição por classe de ativo</CardDescription>
              </CardHeader>
              <CardContent>
                <InvestmentsAllocationChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="performance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Desempenho</CardTitle>
              <CardDescription>Desempenho detalhado por investimento</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <InvestmentsPerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="allocation" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Estratégia de Alocação</CardTitle>
              <CardDescription>Análise da alocação atual e recomendada</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <InvestmentsAllocationChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="opportunities" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Oportunidades de Investimento</CardTitle>
              <CardDescription>Recomendações baseadas no perfil</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Funcionalidade de recomendações em desenvolvimento
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Portfólio de Investimentos</CardTitle>
            <CardDescription>Lista completa de investimentos</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </CardHeader>
        <CardContent>
          <InvestmentsTable />
        </CardContent>
      </Card>

      <AddInvestmentDialog open={openDialog} onOpenChange={setOpenDialog} />
    </div>
  )
}
