"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", Operacional: 45000, Marketing: 15000, Pessoal: 25000, Tecnologia: 10000, Administrativo: 5000 },
  { month: "Fev", Operacional: 42000, Marketing: 18000, Pessoal: 26000, Tecnologia: 11000, Administrativo: 5500 },
  { month: "Mar", Operacional: 48000, Marketing: 17000, Pessoal: 27000, Tecnologia: 12000, Administrativo: 6000 },
  { month: "Abr", Operacional: 51000, Marketing: 16000, Pessoal: 28000, Tecnologia: 13000, Administrativo: 5800 },
  { month: "Mai", Operacional: 46000, Marketing: 19000, Pessoal: 29000, Tecnologia: 14000, Administrativo: 6200 },
  { month: "Jun", Operacional: 45000, Marketing: 20000, Pessoal: 30000, Tecnologia: 15000, Administrativo: 6500 },
  { month: "Jul", Operacional: 47000, Marketing: 21000, Pessoal: 31000, Tecnologia: 16000, Administrativo: 6800 },
  { month: "Ago", Operacional: 49000, Marketing: 22000, Pessoal: 32000, Tecnologia: 17000, Administrativo: 7000 },
  { month: "Set", Operacional: 50000, Marketing: 23000, Pessoal: 33000, Tecnologia: 18000, Administrativo: 7200 },
  { month: "Out", Operacional: 52000, Marketing: 24000, Pessoal: 34000, Tecnologia: 19000, Administrativo: 7500 },
  { month: "Nov", Operacional: 54000, Marketing: 25000, Pessoal: 35000, Tecnologia: 20000, Administrativo: 7800 },
  { month: "Dez", Operacional: 56000, Marketing: 26000, Pessoal: 36000, Tecnologia: 21000, Administrativo: 8000 },
]

export function ExpensesTrendChart() {
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
        />
        <Legend />
        <Area type="monotone" dataKey="Operacional" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" />
        <Area type="monotone" dataKey="Marketing" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
        <Area type="monotone" dataKey="Pessoal" stackId="1" stroke="#6366f1" fill="#6366f1" />
        <Area type="monotone" dataKey="Tecnologia" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
        <Area type="monotone" dataKey="Administrativo" stackId="1" stroke="#a855f7" fill="#a855f7" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
