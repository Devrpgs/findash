"use client"

import { BarChart3, Briefcase, CreditCard, DollarSign, FileText, PieChart, Settings, Users, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DashboardSidebarProps {
  open: boolean
}

export function DashboardSidebar({ open }: DashboardSidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { icon: BarChart3, label: "Visão Geral", href: "/" },
    { icon: DollarSign, label: "Receitas", href: "/receitas" },
    { icon: Wallet, label: "Despesas", href: "/despesas" },
    { icon: PieChart, label: "Orçamentos", href: "/orcamentos" },
    { icon: CreditCard, label: "Transações", href: "/transacoes" },
    { icon: Briefcase, label: "Investimentos", href: "/investimentos" },
    { icon: FileText, label: "Relatórios", href: "/relatorios" },
    { icon: Users, label: "Clientes", href: "/clientes" },
    { icon: Settings, label: "Configurações", href: "/configuracoes" },
  ]

  return (
    <div
      className={cn(
        "bg-gradient-to-br from-slate-800 to-slate-900 text-white h-screen flex flex-col transition-all duration-300 ease-in-out border-r",
        open ? "w-64" : "w-20",
      )}
    >
      <div className="flex items-center justify-center h-16 border-b border-slate-700/50 p-4">
        <div className="flex items-center justify-center">
          <div className="relative h-10 w-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20%28simbolo%29-JPCwuTv6tzeF06UiO9G1Dcw2xAEIN1.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          {open && <span className="ml-3 font-bold text-lg">FinDash</span>}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-sm rounded-md hover:bg-slate-700/70 transition-colors",
                pathname === item.href ? "bg-slate-700/70" : "",
              )}
            >
              <item.icon className="h-5 w-5 text-blue-400" />
              {open && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-slate-700/50">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-white hover:bg-slate-700/70 hover:text-white",
            !open && "justify-center px-2",
          )}
        >
          <Settings className="h-5 w-5 text-blue-400" />
          {open && <span className="ml-2">Configurar</span>}
        </Button>
      </div>
    </div>
  )
}
