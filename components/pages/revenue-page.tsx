"use client"

import { useState } from "react"
import { Calendar, Download, Filter, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { RevenueSourcesChart } from "@/components/charts/revenue-sources-chart"
import { RevenueTable } from "@/components/tables/revenue-table"
import { RevenueMetricsCards } from "@/components/cards/revenue-metrics-cards"
import { AddRevenueDialog } from "@/components/dialogs/add-revenue-dialog"

export function RevenuePageContent() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Receitas</h1>
          <p className="text-muted-foreground">Análise detalhada de receitas e fontes de renda</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1 sm:gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Maio 2025</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 sm:gap-2">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filtros</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 sm:gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Exportar</span>
          </Button>
          <Button size="sm" className="gap-2" onClick={() => setOpenDialog(true)}>
            <Plus className="h-4 w-4" />
            <span>Nova Receita</span>
          </Button>
        </div>
      </div>

      <RevenueMetricsCards />

      <Tabs defaultValue="overview" className="mb-6 mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="sources">Fontes</TabsTrigger>
            <TabsTrigger value="trends">Tendências</TabsTrigger>
            <TabsTrigger value="forecasts">Previsões</TabsTrigger>
          </TabsList>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-full sm:w-[180px]">
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
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Evolução de Receitas</CardTitle>
                <CardDescription>Análise de receitas ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fontes de Receita</CardTitle>
                <CardDescription>Distribuição por categoria</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueSourcesChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="sources" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Fontes de Receita</CardTitle>
              <CardDescription>Detalhamento por fonte de receita</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <RevenueSourcesChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Tendências de Receita</CardTitle>
              <CardDescription>Análise de tendências e padrões</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <RevenueChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="forecasts" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Previsão de Receitas</CardTitle>
              <CardDescription>Projeções para os próximos períodos</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[300px] sm:h-[400px] flex items-center justify-center text-muted-foreground">
                Funcionalidade de previsão em desenvolvimento
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle>Histórico de Receitas</CardTitle>
            <CardDescription>Registro detalhado de receitas</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver todas
          </Button>
        </CardHeader>
        <CardContent className="overflow-auto">
          <RevenueTable />
        </CardContent>
      </Card>

      <AddRevenueDialog open={openDialog} onOpenChange={setOpenDialog} />
    </div>
  )
}
