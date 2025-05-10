"use client"

import {
  ArrowUp,
  Calendar,
  DollarSign,
  Download,
  Filter,
  PieChart,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { ExpensesChart } from "@/components/charts/expenses-chart"
import { BudgetChart } from "@/components/charts/budget-chart"
import { TransactionsTable } from "@/components/tables/transactions-table"
import { CashFlowChart } from "@/components/charts/cash-flow-chart"

export function DashboardContent() {
  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-muted/30">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Dashboard Financeiro</h1>
          <p className="text-muted-foreground">Visão geral dos seus indicadores financeiros</p>
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
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">R$ 724.352,00</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+15,3% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Despesas</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">R$ 432.987,00</div>
            <div className="flex items-center pt-1 text-xs text-red-500">
              <TrendingDown className="mr-1 h-3 w-3" />
              <span>+8,7% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">R$ 291.365,00</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+24,8% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Margem de Lucro</CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">40,2%</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+5,4% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="revenue">Receitas</TabsTrigger>
            <TabsTrigger value="expenses">Despesas</TabsTrigger>
            <TabsTrigger value="budgets">Orçamentos</TabsTrigger>
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
                <CardTitle>Fluxo de Caixa</CardTitle>
                <CardDescription>Análise de receitas e despesas ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <CashFlowChart />
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
        <TabsContent value="revenue" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Receitas</CardTitle>
              <CardDescription>Receitas por fonte ao longo do tempo</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <RevenueChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Despesas</CardTitle>
              <CardDescription>Despesas por categoria ao longo do tempo</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ExpensesChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="budgets" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Orçamentos vs. Realizado</CardTitle>
              <CardDescription>Comparação entre orçamentos planejados e valores realizados</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <BudgetChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>Últimas transações financeiras</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Ver todas
            </Button>
          </CardHeader>
          <CardContent className="overflow-auto">
            <TransactionsTable />
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between border-t px-6 py-4 gap-4">
            <div className="text-xs text-muted-foreground">Mostrando 5 de 245 transações</div>
            <Button variant="outline" size="sm">
              Carregar mais
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
