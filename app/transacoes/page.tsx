import { TransactionsPageContent } from "@/components/pages/transactions-page"
import { DashboardShell } from "@/components/dashboard-shell"

export default function TransactionsPage() {
  return (
    <DashboardShell>
      <TransactionsPageContent />
    </DashboardShell>
  )
}
