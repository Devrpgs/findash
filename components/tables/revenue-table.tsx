"use client"

import { MoreHorizontal } from "lucide-react"
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

const revenues = [
  {
    id: "RV-7523",
    date: "08/05/2025",
    description: "Pagamento de Cliente XYZ",
    amount: 28500,
    category: "Vendas",
    status: "received",
  },
  {
    id: "RV-7522",
    date: "07/05/2025",
    description: "Serviço de Consultoria",
    amount: 12350,
    category: "Serviços",
    status: "received",
  },
  {
    id: "RV-7521",
    date: "06/05/2025",
    description: "Assinatura Mensal",
    amount: 5000,
    category: "Assinaturas",
    status: "pending",
  },
  {
    id: "RV-7520",
    date: "05/05/2025",
    description: "Venda de Produto ABC",
    amount: 15800,
    category: "Vendas",
    status: "received",
  },
  {
    id: "RV-7519",
    date: "04/05/2025",
    description: "Rendimento de Investimentos",
    amount: 3500,
    category: "Investimentos",
    status: "received",
  },
]

export function RevenueTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {revenues.map((revenue) => (
          <TableRow key={revenue.id}>
            <TableCell className="font-medium">{revenue.id}</TableCell>
            <TableCell>{revenue.date}</TableCell>
            <TableCell>{revenue.description}</TableCell>
            <TableCell>{revenue.category}</TableCell>
            <TableCell>R$ {revenue.amount.toLocaleString("pt-BR")}</TableCell>
            <TableCell>
              <Badge
                variant={revenue.status === "received" ? "default" : "outline"}
                className={
                  revenue.status === "received"
                    ? "bg-green-500/20 text-green-600 hover:bg-green-500/20 hover:text-green-600"
                    : "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-600"
                }
              >
                {revenue.status === "received" ? "Recebido" : "Pendente"}
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
