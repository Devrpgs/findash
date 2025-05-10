"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", Empresarial: 125000, Corporativo: 185000, PME: 95000, Startup: 25000 },
  { month: "Fev", Empresarial: 130000, Corporativo: 190000, PME: 98000, Startup: 28000 },
  { month: "Mar", Empresarial: 135000, Corporativo: 195000, PME: 100000, Startup: 30000 },
  { month: "Abr", Empresarial: 140000, Corporativo: 200000, PME: 105000, Startup: 32000 },
  { month: "Mai", Empresarial: 145000, Corporativo: 205000, PME: 110000, Startup: 35000 },
  { month: "Jun", Empresarial: 150000, Corporativo: 210000, PME: 115000, Startup: 38000 },
]

export function ClientsRevenueChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
        />
        <Legend />
        <Bar dataKey="Empresarial" stackId="a" fill="#0ea5e9" />
        <Bar dataKey="Corporativo" stackId="a" fill="#3b82f6" />
        <Bar dataKey="PME" stackId="a" fill="#6366f1" />
        <Bar dataKey="Startup" stackId="a" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  )
}
