"use client"

import { useState } from "react"
import { Calendar, Download, Filter, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExpensesChart } from "@/components/charts/expenses-chart"
import { ExpensesTrendChart } from "@/components/charts/expenses-trend-chart"
import { ExpensesTable } from "@/components/tables/expenses-table"
import { ExpensesMetricsCards } from "@/components/cards/expenses-metrics-cards"
import { AddExpenseDialog } from "@/components/dialogs/add-expense-dialog"

export function ExpensesPageContent() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Despesas</h1>
          <p className="text-muted-foreground">Análise detalhada de despesas e custos</p>
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
            <span>Nova Despesa</span>
          </Button>
        </div>
      </div>

      <ExpensesMetricsCards />

      <Tabs defaultValue="overview" className="mb-6 mt-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="categories">Categorias</TabsTrigger>
            <TabsTrigger value="trends">Tendências</TabsTrigger>
            <TabsTrigger value="optimization">Otimização</TabsTrigger>
          </TabsList>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Diário</SelectItem>
              <SelectItem value="weekly">Semanal</SelectItem>
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
                <CardTitle>Evolução de Despesas</CardTitle>
                <CardDescription>Análise de despesas ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ExpensesTrendChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Despesas</CardTitle>
                <CardDescription>Por categoria</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpensesChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="categories" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise por Categoria</CardTitle>
              <CardDescription>Detalhamento de despesas por categoria</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ExpensesChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Tendências de Despesas</CardTitle>
              <CardDescription>Análise de tendências e padrões</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ExpensesTrendChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="optimization" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Oportunidades de Otimização</CardTitle>
              <CardDescription>Áreas potenciais para redução de custos</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Funcionalidade de otimização em desenvolvimento
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Histórico de Despesas</CardTitle>
            <CardDescription>Registro detalhado de despesas</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver todas
          </Button>
        </CardHeader>
        <CardContent>
          <ExpensesTable />
        </CardContent>
      </Card>

      <AddExpenseDialog open={openDialog} onOpenChange={setOpenDialog} />
    </div>
  )
}
