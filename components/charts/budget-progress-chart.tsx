"use client"

import { useEffect, useState } from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Operacional", orçado: 200000, utilizado: 180000, percentual: 90 },
  { name: "Marketing", orçado: 60000, utilizado: 75000, percentual: 125 },
  { name: "Pessoal", orçado: 130000, utilizado: 120000, percentual: 92 },
  { name: "Tecnologia", orçado: 50000, utilizado: 45000, percentual: 90 },
  { name: "Administrativo", orçado: 25000, utilizado: 30000, percentual: 120 },
]

const COLORS = ["#0ea5e9", "#f43f5e", "#10b981", "#8b5cf6", "#f59e0b"]

export function BudgetProgressChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const chartData = data.map((item) => ({
    name: item.name,
    value: item.utilizado,
    percentual: item.percentual,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percentual }) => `${name} ${percentual}%`}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke={entry.percentual > 100 ? "#f43f5e" : COLORS[index % COLORS.length]}
              strokeWidth={entry.percentual > 100 ? 3 : 1}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name, props) => [
            `R$ ${value.toLocaleString("pt-BR")}`,
            `${name} (${props.payload.percentual}% do orçado)`,
          ]}
          contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
