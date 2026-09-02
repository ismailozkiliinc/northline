import { notFound } from "next/navigation";
import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { LeadDetailForm } from "@/components/admin/lead-detail-form";

export default async function AdminLeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const store = getCmsStore();
  const lead = await store.leads.get(id);
  if (!lead) notFound();

  return (
    <div>
      <AdminPageHeader title={lead.name} description={lead.email} />
      <LeadDetailForm lead={lead} />
    </div>
  );
}
