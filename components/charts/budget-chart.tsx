"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Operacional", Orçado: 200000, Realizado: 180000 },
  { name: "Marketing", Orçado: 60000, Realizado: 75000 },
  { name: "Pessoal", Orçado: 130000, Realizado: 120000 },
  { name: "Tecnologia", Orçado: 50000, Realizado: 45000 },
  { name: "Administrativo", Orçado: 25000, Realizado: 30000 },
]

export function BudgetChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={100} />
        <Tooltip
          formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
        />
        <Legend />
        <Bar dataKey="Orçado" fill="#3b82f6" />
        <Bar dataKey="Realizado" fill="#0ea5e9" />
      </BarChart>
    </ResponsiveContainer>
  )
}
