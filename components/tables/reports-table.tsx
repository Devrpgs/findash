"use client"

import { Download, MoreHorizontal, Star } from "lucide-react"
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

const reports = [
  {
    id: "REP-7523",
    name: "Relatório Financeiro Mensal",
    type: "Financeiro",
    date: "08/05/2025",
    status: "completed",
    format: "PDF",
  },
  {
    id: "REP-7522",
    name: "Análise de Fluxo de Caixa",
    type: "Financeiro",
    date: "07/05/2025",
    status: "completed",
    format: "XLSX",
  },
  {
    id: "REP-7521",
    name: "Relatório de Impostos",
    type: "Fiscal",
    date: "06/05/2025",
    status: "processing",
    format: "PDF",
  },
  {
    id: "REP-7520",
    name: "Análise de Desempenho",
    type: "Gerencial",
    date: "05/05/2025",
    status: "completed",
    format: "PDF",
  },
  {
    id: "REP-7519",
    name: "Relatório de Vendas",
    type: "Operacional",
    date: "04/05/2025",
    status: "completed",
    format: "XLSX",
  },
]

export function ReportsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Formato</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[100px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">{report.id}</TableCell>
            <TableCell>{report.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{report.type}</Badge>
            </TableCell>
            <TableCell>{report.date}</TableCell>
            <TableCell>{report.format}</TableCell>
            <TableCell>
              <Badge
                variant={report.status === "completed" ? "default" : "outline"}
                className={
                  report.status === "completed"
                    ? "bg-green-500/20 text-green-600 hover:bg-green-500/20 hover:text-green-600"
                    : "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-600"
                }
              >
                {report.status === "completed" ? "Concluído" : "Processando"}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {report.status === "completed" && (
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                )}
                <Button variant="ghost" size="icon">
                  <Star className="h-4 w-4" />
                  <span className="sr-only">Favorito</span>
                </Button>
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
                    <DropdownMenuItem>Compartilhar</DropdownMenuItem>
                    <DropdownMenuItem>Gerar novamente</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
