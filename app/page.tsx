import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-7xl rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Internal CRM workspace
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Plan and launch an end-to-end internal CRM app with persistent storage, authentication, and dashboard workflows for customers and leads.

              </h1>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Track leads, manage accounts, and keep your sales pipeline moving with a clean internal app designed for fast decisions.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[28rem] lg:max-w-[32rem]">
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-sm text-muted-foreground">Active accounts</p>
                <p className="mt-2 text-3xl font-semibold">128</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-sm text-muted-foreground">Open deals</p>
                <p className="mt-2 text-3xl font-semibold">34</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-sm text-muted-foreground">Tasks due</p>
                <p className="mt-2 text-3xl font-semibold">12</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Pipeline overview</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Monitor qualified leads, stage movement, and forecast confidence across the pipeline.
            </p>
          </article>
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Account activity</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Review recent notes, calls, and follow-ups for each customer relationship.
            </p>
          </article>
          <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Team performance</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              See rep workload, response times, and weekly progress at a glance.
            </p>
          </article>
        </section>
        <section className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.25fr_0.75fr]">
  <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
    <h2 className="text-lg font-semibold">CRM navigation</h2>
    <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
      <li>Customers</li>
      <li>Deals</li>
      <li>Tasks</li>
      <li>Reports</li>
      <li>Pipeline</li>
      <li>Settings</li>
    </ul>
  </article>
  <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
    <h2 className="text-lg font-semibold">Recent activity</h2>
    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
      <li>Acme Corp moved to proposal review after today&apos;s sales call.</li>
      <li>3 follow-up tasks are due before end of day for open opportunities.</li>
      <li>Northwind account owner added new notes and next-step reminders.</li>
    </ul>
  </article>
</section>
        
      </main>
    </div>);}