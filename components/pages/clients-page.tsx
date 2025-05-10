"use client"

import { useState } from "react"
import { Calendar, Download, Filter, Plus, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ClientsTable } from "@/components/tables/clients-table"
import { ClientsMetricsCards } from "@/components/cards/clients-metrics-cards"
import { ClientsDistributionChart } from "@/components/charts/clients-distribution-chart"
import { ClientsRevenueChart } from "@/components/charts/clients-revenue-chart"
import { Pagination } from "@/components/ui/pagination"
import { AddClientDialog } from "@/components/dialogs/add-client-dialog"

export function ClientsPageContent() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Clientes</h1>
          <p className="text-muted-foreground">Gerenciamento e análise de clientes</p>
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
            <span>Novo Cliente</span>
          </Button>
        </div>
      </div>

      <ClientsMetricsCards />

      <Tabs defaultValue="overview" className="mb-6 mt-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="segments">Segmentos</TabsTrigger>
            <TabsTrigger value="revenue">Receita</TabsTrigger>
            <TabsTrigger value="retention">Retenção</TabsTrigger>
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
                <CardTitle>Receita por Cliente</CardTitle>
                <CardDescription>Análise de receita gerada por cliente ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ClientsRevenueChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Clientes</CardTitle>
                <CardDescription>Por segmento</CardDescription>
              </CardHeader>
              <CardContent>
                <ClientsDistributionChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="segments" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Segmentos</CardTitle>
              <CardDescription>Distribuição e desempenho por segmento de cliente</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ClientsDistributionChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Receita</CardTitle>
              <CardDescription>Receita gerada por cliente e segmento</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ClientsRevenueChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="retention" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Retenção</CardTitle>
              <CardDescription>Taxa de retenção e churn de clientes</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Funcionalidade de análise de retenção em desenvolvimento
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Todos os Clientes</CardTitle>
          <CardDescription>Lista completa de clientes</CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar clientes..." className="pl-8 w-full" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Segmento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="enterprise">Empresarial</SelectItem>
                  <SelectItem value="corporate">Corporativo</SelectItem>
                  <SelectItem value="sme">PME</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                  <SelectItem value="prospect">Prospecto</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="name">
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="revenue">Receita</SelectItem>
                  <SelectItem value="recent">Mais recentes</SelectItem>
                  <SelectItem value="oldest">Mais antigos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ClientsTable />
          <div className="mt-4 flex justify-center">
            <Pagination />
          </div>
        </CardContent>
      </Card>

      <AddClientDialog open={openDialog} onOpenChange={setOpenDialog} />
    </div>
  )
}
