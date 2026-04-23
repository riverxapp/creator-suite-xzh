import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leads | Internal CRM",
  description: "Manage and review CRM leads with persistent storage-backed workflow."
};

const leads = [
  {
    name: "Acme Corp",
    stage: "Proposal review",
    owner: "Maya Chen",
    lastTouch: "Today",
    priority: "High"
  },
  {
    name: "Northwind Traders",
    stage: "Discovery",
    owner: "Jordan Lee",
    lastTouch: "Yesterday",
    priority: "Medium"
  },
  {
    name: "Globex",
    stage: "Negotiation",
    owner: "Priya Patel",
    lastTouch: "2 days ago",
    priority: "High"
  }
];

export default function LeadsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Leads workspace
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Track prospect activity, prioritize follow-ups, and keep the pipeline moving.
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            This surface is designed to connect to persistent lead storage so teams can review
            status, ownership, and next actions from one place.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Lead queue</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Sample records intended to be replaced by storage-backed data.
              </p>
            </div>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              3 leads
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border/60">
            <div className="grid grid-cols-5 gap-4 border-b border-border/60 bg-muted/40 px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <span className="col-span-2">Company</span>
              <span>Stage</span>
              <span>Owner</span>
              <span>Priority</span>
            </div>
            {leads.map((lead) => (
              <div
                key={lead.name}
                className="grid grid-cols-5 gap-4 border-b border-border/60 px-4 py-4 text-sm last:border-b-0"
              >
                <div className="col-span-2">
                  <p className="font-medium">{lead.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Last touch: {lead.lastTouch}</p>
                </div>
                <div className="text-muted-foreground">{lead.stage}</div>
                <div className="text-muted-foreground">{lead.owner}</div>
                <div>{lead.priority}</div>
              </div>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Persistent storage plan</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>Store leads in a dedicated persistence layer.</li>
              <li>Support create, update, and review flows from the dashboard.</li>
              <li>Keep records available across refreshes and sessions.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Next steps</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>Connect this page to the shared storage module.</li>
              <li>Wire lead actions to route handlers or server actions.</li>
              <li>Add validation and empty-state handling for live data.</li>
            </ul>
          </article>
        </aside>
      </section>
    </main>
  );
}