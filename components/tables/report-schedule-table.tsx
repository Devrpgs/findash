"use client"

import { Calendar, MoreHorizontal } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const schedules = [
  {
    id: "SCH-7523",
    name: "Relatório Financeiro Mensal",
    frequency: "Mensal",
    nextRun: "01/06/2025",
    recipients: 5,
    status: "active",
  },
  {
    id: "SCH-7522",
    name: "Análise de Fluxo de Caixa",
    frequency: "Semanal",
    nextRun: "15/05/2025",
    recipients: 3,
    status: "active",
  },
  {
    id: "SCH-7521",
    name: "Relatório de Impostos",
    frequency: "Trimestral",
    nextRun: "01/07/2025",
    recipients: 2,
    status: "active",
  },
  {
    id: "SCH-7520",
    name: "Análise de Desempenho",
    frequency: "Mensal",
    nextRun: "01/06/2025",
    recipients: 4,
    status: "paused",
  },
  {
    id: "SCH-7519",
    name: "Relatório de Vendas",
    frequency: "Semanal",
    nextRun: "12/05/2025",
    recipients: 6,
    status: "active",
  },
]

export function ReportScheduleTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Frequência</TableHead>
          <TableHead>Próxima Execução</TableHead>
          <TableHead>Destinatários</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedules.map((schedule) => (
          <TableRow key={schedule.id}>
            <TableCell className="font-medium">{schedule.id}</TableCell>
            <TableCell>{schedule.name}</TableCell>
            <TableCell>{schedule.frequency}</TableCell>
            <TableCell className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              {schedule.nextRun}
            </TableCell>
            <TableCell>{schedule.recipients}</TableCell>
            <TableCell>
              <Badge
                variant={schedule.status === "active" ? "default" : "outline"}
                className={
                  schedule.status === "active"
                    ? "bg-green-500/20 text-green-600 hover:bg-green-500/20 hover:text-green-600"
                    : "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-600"
                }
              >
                {schedule.status === "active" ? "Ativo" : "Pausado"}
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
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuItem>Ver destinatários</DropdownMenuItem>
                  <DropdownMenuItem>Executar agora</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {schedule.status === "active" ? (
                    <DropdownMenuItem>Pausar</DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>Ativar</DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
