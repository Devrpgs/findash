"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", Vendas: 65000, Serviços: 28000, Investimentos: 15000 },
  { month: "Fev", Vendas: 59000, Serviços: 32000, Investimentos: 16000 },
  { month: "Mar", Vendas: 80000, Serviços: 27000, Investimentos: 18000 },
  { month: "Abr", Vendas: 81000, Serviços: 30000, Investimentos: 17000 },
  { month: "Mai", Vendas: 56000, Serviços: 33000, Investimentos: 19000 },
  { month: "Jun", Vendas: 55000, Serviços: 30000, Investimentos: 20000 },
  { month: "Jul", Vendas: 40000, Serviços: 35000, Investimentos: 21000 },
  { month: "Ago", Vendas: 60000, Serviços: 39000, Investimentos: 22000 },
  { month: "Set", Vendas: 70000, Serviços: 42000, Investimentos: 23000 },
  { month: "Out", Vendas: 90000, Serviços: 45000, Investimentos: 24000 },
  { month: "Nov", Vendas: 95000, Serviços: 48000, Investimentos: 25000 },
  { month: "Dez", Vendas: 100000, Serviços: 50000, Investimentos: 26000 },
]

export function RevenueChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
        />
        <Legend />
        <Bar dataKey="Vendas" stackId="a" fill="#0ea5e9" />
        <Bar dataKey="Serviços" stackId="a" fill="#3b82f6" />
        <Bar dataKey="Investimentos" stackId="a" fill="#6366f1" />
      </BarChart>
    </ResponsiveContainer>
  )
}
