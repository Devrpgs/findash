import { InvestmentsPageContent } from "@/components/pages/investments-page"
import { DashboardShell } from "@/components/dashboard-shell"

export default function InvestmentsPage() {
  return (
    <DashboardShell>
      <InvestmentsPageContent />
    </DashboardShell>
  )
}
