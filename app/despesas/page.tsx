import { ExpensesPageContent } from "@/components/pages/expenses-page"
import { DashboardShell } from "@/components/dashboard-shell"

export default function ExpensesPage() {
  return (
    <DashboardShell>
      <ExpensesPageContent />
    </DashboardShell>
  )
}
