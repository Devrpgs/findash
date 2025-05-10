import { BudgetsPageContent } from "@/components/pages/budgets-page"
import { DashboardShell } from "@/components/dashboard-shell"

export default function BudgetsPage() {
  return (
    <DashboardShell>
      <BudgetsPageContent />
    </DashboardShell>
  )
}
