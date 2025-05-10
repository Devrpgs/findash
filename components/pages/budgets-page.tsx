"use client"

import { useState } from "react"
import { Calendar, Download, Filter, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BudgetChart } from "@/components/charts/budget-chart"
import { BudgetProgressChart } from "@/components/charts/budget-progress-chart"
import { BudgetsTable } from "@/components/tables/budgets-table"
import { BudgetsMetricsCards } from "@/components/cards/budgets-metrics-cards"
import { AddBudgetDialog } from "@/components/dialogs/add-budget-dialog"

export function BudgetsPageContent() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Orçamentos</h1>
          <p className="text-muted-foreground">Gerenciamento e acompanhamento de orçamentos</p>
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
            <span>Novo Orçamento</span>
          </Button>
        </div>
      </div>

      <BudgetsMetricsCards />

      <Tabs defaultValue="overview" className="mb-6 mt-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="performance">Desempenho</TabsTrigger>
            <TabsTrigger value="planning">Planejamento</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Mensal</SelectItem>
              <SelectItem value="quarterly">Trimestral</SelectItem>
              <SelectItem value="yearly">Anual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsContent value="overview" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Orçado vs. Realizado</CardTitle>
                <CardDescription>Comparação entre valores orçados e realizados</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <BudgetChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Progresso do Orçamento</CardTitle>
                <CardDescription>Percentual de utilização</CardDescription>
              </CardHeader>
              <CardContent>
                <BudgetProgressChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="performance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho do Orçamento</CardTitle>
              <CardDescription>Análise de desempenho por categoria</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <BudgetChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="planning" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Planejamento Orçamentário</CardTitle>
              <CardDescription>Ferramentas para planejamento de orçamentos</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Funcionalidade de planejamento em desenvolvimento
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Orçamentos</CardTitle>
              <CardDescription>Orçamentos de períodos anteriores</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Histórico de orçamentos em desenvolvimento
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Orçamentos Ativos</CardTitle>
            <CardDescription>Lista de orçamentos do período atual</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </CardHeader>
        <CardContent>
          <BudgetsTable />
        </CardContent>
      </Card>

      <AddBudgetDialog open={openDialog} onOpenChange={setOpenDialog} />
    </div>
  )
}
