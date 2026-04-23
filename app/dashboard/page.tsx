import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const customers = [
  {
    name: "Acme Corp",
    owner: "Maya Chen",
    status: "Active",
    value: "$42,000",
    lastTouch: "2 hours ago"
  },
  {
    name: "Northwind",
    owner: "Jordan Lee",
    status: "At risk",
    value: "$18,500",
    lastTouch: "Yesterday"
  },
  {
    name: "Orbit Labs",
    owner: "Sam Patel",
    status: "Onboarding",
    value: "$9,200",
    lastTouch: "Today"
  }
];

const leads = [
  {
    name: "Riley Morgan",
    company: "Vertex Studio",
    stage: "Qualified",
    source: "Inbound demo request"
  },
  {
    name: "Taylor Brooks",
    company: "BrightScale",
    stage: "Proposal",
    source: "Partner referral"
  },
  {
    name: "Casey Nguyen",
    company: "Summit Retail",
    stage: "Discovery",
    source: "Website form"
  }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <Badge variant="secondary">CRM dashboard</Badge>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Centralize customer accounts, active leads, and pipeline progress in one internal workspace.
              </h1>
              <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                Use the dashboard to review account health, monitor lead movement, and keep sales follow-up aligned across the team.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/">Landing page</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth">Authentication</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Customers</p>
            <p className="mt-3 text-3xl font-semibold">{customers.length}</p>
            <p className="mt-2 text-sm text-muted-foreground">Tracked accounts with active ownership and pipeline status.</p>
          </article>
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Open leads</p>
            <p className="mt-3 text-3xl font-semibold">{leads.length}</p>
            <p className="mt-2 text-sm text-muted-foreground">New opportunities ready for qualification and follow-up.</p>
          </article>
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Pipeline health</p>
            <p className="mt-3 text-3xl font-semibold">92%</p>
            <p className="mt-2 text-sm text-muted-foreground">A quick signal for account coverage and deal momentum.</p>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">Customers</h2>
                <p className="mt-1 text-sm text-muted-foreground">Key accounts and ownership overview.</p>
              </div>
              <Button variant="ghost" asChild>
                <Link href="/dashboard/leads">View leads</Link>
              </Button>
            </div>
            <Separator className="my-5" />
            <div className="space-y-4">
              {customers.map((customer) => (
                <div
                  key={customer.name}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">{customer.owner}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <Badge variant="outline">{customer.status}</Badge>
                    <span className="text-muted-foreground">{customer.value}</span>
                    <span className="text-muted-foreground">{customer.lastTouch}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Leads</h2>
            <p className="mt-1 text-sm text-muted-foreground">Recent opportunities and current stages.</p>
            <Separator className="my-5" />
            <div className="space-y-4">
              {leads.map((lead) => (
                <div key={lead.name} className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-sm text-muted-foreground">{lead.company}</p>
                    </div>
                    <Badge>{lead.stage}</Badge>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{lead.source}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}