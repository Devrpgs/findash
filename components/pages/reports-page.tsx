"use client"

import { useState } from "react"
import { Calendar, Download, FileText, Filter, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ReportsTable } from "@/components/tables/reports-table"
import { ReportsMetricsCards } from "@/components/cards/reports-metrics-cards"
import { ReportTemplatesGrid } from "@/components/grids/report-templates-grid"
import { ReportScheduleTable } from "@/components/tables/report-schedule-table"
import { AddReportDialog } from "@/components/dialogs/add-report-dialog"

export function ReportsPageContent() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Relatórios</h1>
          <p className="text-muted-foreground">Geração e visualização de relatórios financeiros</p>
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
            <span>Novo Relatório</span>
          </Button>
        </div>
      </div>

      <ReportsMetricsCards />

      <Tabs defaultValue="recent" className="mb-6 mt-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="recent">Recentes</TabsTrigger>
            <TabsTrigger value="templates">Modelos</TabsTrigger>
            <TabsTrigger value="scheduled">Agendados</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
          </TabsList>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo de relatório" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              <SelectItem value="financial">Financeiro</SelectItem>
              <SelectItem value="tax">Fiscal</SelectItem>
              <SelectItem value="operational">Operacional</SelectItem>
              <SelectItem value="management">Gerencial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsContent value="recent" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Recentes</CardTitle>
              <CardDescription>Relatórios gerados recentemente</CardDescription>
            </CardHeader>
            <CardContent>
              <ReportsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="templates" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Modelos de Relatórios</CardTitle>
              <CardDescription>Modelos pré-configurados para geração rápida</CardDescription>
            </CardHeader>
            <CardContent>
              <ReportTemplatesGrid />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="scheduled" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Agendados</CardTitle>
              <CardDescription>Relatórios configurados para geração automática</CardDescription>
            </CardHeader>
            <CardContent>
              <ReportScheduleTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="favorites" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Favoritos</CardTitle>
              <CardDescription>Seus relatórios marcados como favoritos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <FileText className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Nenhum relatório favorito</h3>
                <p className="text-muted-foreground mt-2 max-w-md">
                  Você ainda não marcou nenhum relatório como favorito. Marque relatórios como favoritos para acessá-los
                  rapidamente.
                </p>
                <Button className="mt-4">Explorar relatórios</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Relatórios Personalizados</CardTitle>
            <CardDescription>Crie relatórios personalizados com base nas suas necessidades</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={() => setOpenDialog(true)}>
            Criar Relatório
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Relatório Financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visão geral das finanças com demonstrativos de resultados, balanço e fluxo de caixa.
                </p>
                <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setOpenDialog(true)}>
                  Gerar Relatório
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Análise de Desempenho</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Análise detalhada de KPIs financeiros, comparativos e tendências de desempenho.
                </p>
                <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setOpenDialog(true)}>
                  Gerar Relatório
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Relatório Fiscal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Resumo de obrigações fiscais, impostos pagos e previsão de tributos.
                </p>
                <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setOpenDialog(true)}>
                  Gerar Relatório
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <AddReportDialog open={openDialog} onOpenChange={setOpenDialog} />
    </div>
  )
}
