"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", Receitas: 108000, Despesas: 85000 },
  { month: "Fev", Receitas: 107000, Despesas: 88000 },
  { month: "Mar", Receitas: 125000, Despesas: 90000 },
  { month: "Abr", Receitas: 128000, Despesas: 92000 },
  { month: "Mai", Receitas: 108000, Despesas: 94000 },
  { month: "Jun", Receitas: 105000, Despesas: 95000 },
  { month: "Jul", Receitas: 96000, Despesas: 96000 },
  { month: "Ago", Receitas: 121000, Despesas: 97000 },
  { month: "Set", Receitas: 135000, Despesas: 98000 },
  { month: "Out", Receitas: 159000, Despesas: 99000 },
  { month: "Nov", Receitas: 168000, Despesas: 100000 },
  { month: "Dez", Receitas: 176000, Despesas: 102000 },
]

export function CashFlowChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
        />
        <Legend />
        <Area type="monotone" dataKey="Receitas" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorRevenue)" />
        <Area type="monotone" dataKey="Despesas" stroke="#f43f5e" fillOpacity={1} fill="url(#colorExpenses)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
