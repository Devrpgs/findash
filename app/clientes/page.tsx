import { ClientsPageContent } from "@/components/pages/clients-page"
import { DashboardShell } from "@/components/dashboard-shell"

export default function ClientsPage() {
  return (
    <DashboardShell>
      <ClientsPageContent />
    </DashboardShell>
  )
}
