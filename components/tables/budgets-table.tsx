"use client"

import { MoreHorizontal } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const budgets = [
  {
    id: "BG-7523",
    name: "Operacional",
    budgeted: 200000,
    spent: 180000,
    remaining: 20000,
    progress: 90,
    status: "active",
  },
  {
    id: "BG-7522",
    name: "Marketing",
    budgeted: 60000,
    spent: 75000,
    remaining: -15000,
    progress: 125,
    status: "exceeded",
  },
  {
    id: "BG-7521",
    name: "Pessoal",
    budgeted: 130000,
    spent: 120000,
    remaining: 10000,
    progress: 92,
    status: "active",
  },
  {
    id: "BG-7520",
    name: "Tecnologia",
    budgeted: 50000,
    spent: 45000,
    remaining: 5000,
    progress: 90,
    status: "active",
  },
  {
    id: "BG-7519",
    name: "Administrativo",
    budgeted: 25000,
    spent: 30000,
    remaining: -5000,
    progress: 120,
    status: "exceeded",
  },
]

export function BudgetsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Orçado</TableHead>
          <TableHead>Utilizado</TableHead>
          <TableHead>Restante</TableHead>
          <TableHead>Progresso</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {budgets.map((budget) => (
          <TableRow key={budget.id}>
            <TableCell className="font-medium">{budget.id}</TableCell>
            <TableCell>{budget.name}</TableCell>
            <TableCell>R$ {budget.budgeted.toLocaleString("pt-BR")}</TableCell>
            <TableCell>R$ {budget.spent.toLocaleString("pt-BR")}</TableCell>
            <TableCell className={budget.remaining < 0 ? "text-red-500" : ""}>
              R$ {budget.remaining.toLocaleString("pt-BR")}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={budget.progress} max={100} className={budget.progress > 100 ? "bg-red-200" : ""} />
                <span className="text-xs">{budget.progress}%</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={budget.status === "active" ? "default" : "destructive"}
                className={
                  budget.status === "active"
                    ? "bg-green-500/20 text-green-600 hover:bg-green-500/20 hover:text-green-600"
                    : "bg-red-500/20 text-red-600 hover:bg-red-500/20 hover:text-red-600"
                }
              >
                {budget.status === "active" ? "Ativo" : "Excedido"}
              </Badge>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuItem>Exportar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
