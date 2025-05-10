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

const expenses = [
  {
    id: "EX-7523",
    date: "08/05/2025",
    description: "Pagamento de Fornecedor ABC",
    amount: 18500,
    category: "Operacional",
    status: "paid",
  },
  {
    id: "EX-7522",
    date: "07/05/2025",
    description: "Campanha de Marketing",
    amount: 12350,
    category: "Marketing",
    status: "paid",
  },
  {
    id: "EX-7521",
    date: "06/05/2025",
    description: "Pagamento de Salários",
    amount: 45000,
    category: "Pessoal",
    status: "pending",
  },
  {
    id: "EX-7520",
    date: "05/05/2025",
    description: "Licenças de Software",
    amount: 8800,
    category: "Tecnologia",
    status: "paid",
  },
  {
    id: "EX-7519",
    date: "04/05/2025",
    description: "Material de Escritório",
    amount: 1500,
    category: "Administrativo",
    status: "paid",
  },
]

export function ExpensesTable() {
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
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="font-medium">{expense.id}</TableCell>
            <TableCell>{expense.date}</TableCell>
            <TableCell>{expense.description}</TableCell>
            <TableCell>{expense.category}</TableCell>
            <TableCell>R$ {expense.amount.toLocaleString("pt-BR")}</TableCell>
            <TableCell>
              <Badge
                variant={expense.status === "paid" ? "default" : "outline"}
                className={
                  expense.status === "paid"
                    ? "bg-green-500/20 text-green-600 hover:bg-green-500/20 hover:text-green-600"
                    : "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-600"
                }
              >
                {expense.status === "paid" ? "Pago" : "Pendente"}
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
