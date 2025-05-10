"use client"

import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react"
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

const investments = [
  {
    id: "INV-7523",
    name: "Ações - Empresa XYZ",
    type: "Ações",
    initialValue: 100000,
    currentValue: 125000,
    return: 25,
    returnValue: 25000,
    trend: "up",
  },
  {
    id: "INV-7522",
    name: "Tesouro Direto",
    type: "Renda Fixa",
    initialValue: 200000,
    currentValue: 218000,
    return: 9,
    returnValue: 18000,
    trend: "up",
  },
  {
    id: "INV-7521",
    name: "Fundo Imobiliário ABC",
    type: "Imóveis",
    initialValue: 150000,
    currentValue: 142500,
    return: -5,
    returnValue: -7500,
    trend: "down",
  },
  {
    id: "INV-7520",
    name: "Fundo de Investimento",
    type: "Outros",
    initialValue: 80000,
    currentValue: 92000,
    return: 15,
    returnValue: 12000,
    trend: "up",
  },
  {
    id: "INV-7519",
    name: "Ações - Empresa ABC",
    type: "Ações",
    initialValue: 120000,
    currentValue: 132000,
    return: 10,
    returnValue: 12000,
    trend: "up",
  },
]

export function InvestmentsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Valor Inicial</TableHead>
          <TableHead>Valor Atual</TableHead>
          <TableHead>Retorno</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {investments.map((investment) => (
          <TableRow key={investment.id}>
            <TableCell className="font-medium">{investment.id}</TableCell>
            <TableCell>{investment.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{investment.type}</Badge>
            </TableCell>
            <TableCell>R$ {investment.initialValue.toLocaleString("pt-BR")}</TableCell>
            <TableCell>R$ {investment.currentValue.toLocaleString("pt-BR")}</TableCell>
            <TableCell className="flex items-center">
              {investment.trend === "up" ? (
                <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
              )}
              <span className={investment.trend === "up" ? "text-green-500" : "text-red-500"}>
                {investment.return}% (R$ {Math.abs(investment.returnValue).toLocaleString("pt-BR")})
              </span>
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
