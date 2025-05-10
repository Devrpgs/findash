"use client"

import { Mail, MoreHorizontal, Phone } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const clients = [
  {
    id: "CLI-7523",
    name: "Empresa XYZ Ltda",
    contact: "João Silva",
    email: "joao.silva@xyz.com",
    phone: "(11) 98765-4321",
    segment: "Corporativo",
    revenue: 285000,
    status: "active",
  },
  {
    id: "CLI-7522",
    name: "Tech Solutions S.A.",
    contact: "Maria Oliveira",
    email: "maria@techsolutions.com",
    phone: "(11) 91234-5678",
    segment: "Empresarial",
    revenue: 450000,
    status: "active",
  },
  {
    id: "CLI-7521",
    name: "Startup Inovadora",
    contact: "Pedro Santos",
    email: "pedro@startup.com",
    phone: "(21) 99876-5432",
    segment: "Startup",
    revenue: 75000,
    status: "active",
  },
  {
    id: "CLI-7520",
    name: "Comércio Local ME",
    contact: "Ana Costa",
    email: "ana@comerciolocal.com",
    phone: "(31) 98765-1234",
    segment: "PME",
    revenue: 120000,
    status: "inactive",
  },
  {
    id: "CLI-7519",
    name: "Indústria Nacional Ltda",
    contact: "Carlos Mendes",
    email: "carlos@industrianacional.com",
    phone: "(41) 99988-7766",
    segment: "Corporativo",
    revenue: 320000,
    status: "active",
  },
]

export function ClientsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Contato</TableHead>
          <TableHead>Segmento</TableHead>
          <TableHead>Receita Anual</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={client.name} />
                  <AvatarFallback>{client.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="font-medium">{client.name}</div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span>{client.contact}</span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone className="h-3 w-3" />
                  <span>{client.phone}</span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{client.segment}</Badge>
            </TableCell>
            <TableCell>R$ {client.revenue.toLocaleString("pt-BR")}</TableCell>
            <TableCell>
              <Badge
                variant={client.status === "active" ? "default" : "outline"}
                className={
                  client.status === "active"
                    ? "bg-green-500/20 text-green-600 hover:bg-green-500/20 hover:text-green-600"
                    : "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-600"
                }
              >
                {client.status === "active" ? "Ativo" : "Inativo"}
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
                  <DropdownMenuItem>Enviar email</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Desativar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
