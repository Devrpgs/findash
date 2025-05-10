"use client"

import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"
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

const transactions = [
  {
    id: "TR-7523",
    date: "08/05/2025",
    description: "Pagamento de Cliente XYZ",
    amount: 28500,
    type: "income",
    category: "Vendas",
    status: "completed",
  },
  {
    id: "TR-7522",
    date: "07/05/2025",
    description: "Pagamento de Fornecedor ABC",
    amount: 12350,
    type: "expense",
    category: "Operacional",
    status: "completed",
  },
  {
    id: "TR-7521",
    date: "06/05/2025",
    description: "Investimento em Ações",
    amount: 50000,
    type: "expense",
    category: "Investimentos",
    status: "pending",
  },
  {
    id: "TR-7520",
    date: "05/05/2025",
    description: "Pagamento de Serviços",
    amount: 15800,
    type: "income",
    category: "Serviços",
    status: "completed",
  },
  {
    id: "TR-7519",
    date: "04/05/2025",
    description: "Pagamento de Salários",
    amount: 85000,
    type: "expense",
    category: "Pessoal",
    status: "completed",
  },
]

export function TransactionsTable() {
  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead className="w-[100px]">Data</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead className="hidden md:table-cell">Categoria</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell className="max-w-[200px] truncate">{transaction.description}</TableCell>
              <TableCell className="hidden md:table-cell">{transaction.category}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {transaction.type === "income" ? (
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                  )}
                  <span className={transaction.type === "income" ? "text-green-500" : "text-red-500"}>
                    R$ {transaction.amount.toLocaleString("pt-BR")}
                  </span>
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  variant={transaction.status === "completed" ? "default" : "outline"}
                  className={
                    transaction.status === "completed"
                      ? "bg-green-500/20 text-green-600 hover:bg-green-500/20 hover:text-green-600"
                      : "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-600"
                  }
                >
                  {transaction.status === "completed" ? "Concluído" : "Pendente"}
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
    </div>
  )
}
