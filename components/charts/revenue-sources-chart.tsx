"use client"

import { useEffect, useState } from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Vendas", value: 450000 },
  { name: "Serviços", value: 180000 },
  { name: "Assinaturas", value: 75000 },
  { name: "Investimentos", value: 19352 },
]

const COLORS = ["#0ea5e9", "#3b82f6", "#6366f1", "#8b5cf6"]

export function RevenueSourcesChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
