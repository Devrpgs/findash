"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", Ações: 450000, "Renda Fixa": 350000, Imóveis: 250000, Outros: 150000 },
  { month: "Fev", Ações: 460000, "Renda Fixa": 355000, Imóveis: 250000, Outros: 152000 },
  { month: "Mar", Ações: 440000, "Renda Fixa": 360000, Imóveis: 252000, Outros: 155000 },
  { month: "Abr", Ações: 470000, "Renda Fixa": 365000, Imóveis: 255000, Outros: 158000 },
  { month: "Mai", Ações: 490000, "Renda Fixa": 370000, Imóveis: 258000, Outros: 160000 },
  { month: "Jun", Ações: 485000, "Renda Fixa": 375000, Imóveis: 260000, Outros: 162000 },
  { month: "Jul", Ações: 500000, "Renda Fixa": 380000, Imóveis: 265000, Outros: 165000 },
  { month: "Ago", Ações: 520000, "Renda Fixa": 385000, Imóveis: 270000, Outros: 168000 },
  { month: "Set", Ações: 530000, "Renda Fixa": 390000, Imóveis: 275000, Outros: 170000 },
  { month: "Out", Ações: 550000, "Renda Fixa": 395000, Imóveis: 280000, Outros: 172000 },
  { month: "Nov", Ações: 570000, "Renda Fixa": 400000, Imóveis: 285000, Outros: 175000 },
  { month: "Dez", Ações: 590000, "Renda Fixa": 405000, Imóveis: 290000, Outros: 178000 },
]

export function InvestmentsPerformanceChart() {
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
          <linearGradient id="colorAcoes" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRendaFixa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorImoveis" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorOutros" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
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
        <Area type="monotone" dataKey="Ações" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorAcoes)" />
        <Area type="monotone" dataKey="Renda Fixa" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRendaFixa)" />
        <Area type="monotone" dataKey="Imóveis" stroke="#6366f1" fillOpacity={1} fill="url(#colorImoveis)" />
        <Area type="monotone" dataKey="Outros" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorOutros)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
