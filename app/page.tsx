import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import Link from "next/link";
import { ArrowRight, BarChart3, Briefcase, CheckCircle2, Clock3, ShieldCheck, Users } from "lucide-react";

const metrics = [
{ label: "Pipeline coverage", value: "$1.8M", detail: "Qualified opportunities across active reps" },
{ label: "Win rate", value: "28%", detail: "Improved close performance this quarter" },
{ label: "Team SLA", value: "< 2 hrs", detail: "Average first-response time for inbound leads" }];


const featureCards = [
{
  title: "Revenue pipeline",
  description: "Track deal stages, forecast confidence, and keep leadership aligned on upcoming revenue.",
  icon: BarChart3
},
{
  title: "Account operations",
  description: "Centralize account ownership, relationship history, and follow-up motion for every customer.",
  icon: Briefcase
},
{
  title: "Team coordination",
  description: "Give sales teams a clearer operating rhythm with tasks, priorities, and shared visibility.",
  icon: Users
}];


const highlights = [
"Structured dashboards for customers, leads, and pipeline status",
"Lightweight auth flow for controlled internal workspace access",
"Persistent-ready architecture that can evolve into production workflows"];


const activityFeed = [
{
  title: "Acme Corp moved into proposal review",
  detail: "Owner updated pricing notes and scheduled procurement follow-up.",
  time: "10 min ago"
},
{
  title: "Three high-priority tasks need attention today",
  detail: "Open follow-ups are concentrated across active mid-market opportunities.",
  time: "1 hour ago"
},
{
  title: "Northwind account record received new stakeholder notes",
  detail: "Recent call summary captured next steps for onboarding and renewal planning.",
  time: "Today"
}];


export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-gradient-to-b from-primary/5 via-background to-background" />
      <Navbar />
      <main className="flex flex-1 flex-col gap-10 px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <section className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Executive CRM workspace


              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Premium UX

              </span>
            </div>

            <div className="mt-6 max-w-3xl space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">A more refined CRM experience for pipeline visibility, team execution, and account growth.

              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Upgrade the existing CRM shell into a cleaner, more executive-ready interface with stronger hierarchy, clearer data presentation, and faster navigation into the core workspace.


              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                
                Open dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/auth"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium transition hover:bg-accent">
                
                View authentication
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {metrics.map((metric) =>
              <div key={metric.label} className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
                </div>
              )}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Workspace snapshot
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">Qualified leads</span>
                    <span className="text-sm font-semibold">34</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-muted">
                    <div className="h-2 w-[72%] rounded-full bg-primary" />
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">Active accounts</span>
                    <span className="text-sm font-semibold">128</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Stable portfolio health with strong owner coverage across key customers.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">Tasks due today</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                      <Clock3 className="h-3.5 w-3.5" />
                      12 due
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Focus the team on follow-ups, proposal reviews, and next-step coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold">What this upgrade emphasizes</h2>
              <ul className="mt-5 space-y-4">
                {highlights.map((item) =>
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </section>

        <section className="mx-auto w-full max-w-7xl">
          <HeroSection />
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-3">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm">
                <div className="inline-flex rounded-2xl border border-border bg-background p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="mt-5 text-xl font-semibold">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
              </article>);

          })}
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Operating model
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Navigation built for day-to-day CRM execution</h2>
              </div>
              <Link href="/dashboard/leads" className="text-sm font-medium text-primary transition hover:opacity-80">
                Review lead workspace
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Customers", "Leads", "Pipeline", "Tasks", "Reports", "Settings"].map((item) =>
              <div key={item} className="rounded-2xl border border-border bg-background px-4 py-4">
                  <p className="font-medium">{item}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Focused surface for internal CRM workflows and team decision-making.
                  </p>
                </div>
              )}
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Recent activity</p>
            <div className="mt-6 space-y-4">
              {activityFeed.map((item) =>
              <div key={item.title} className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-semibold leading-6">{item.title}</h3>
                    <span className="whitespace-nowrap text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                </div>
              )}
            </div>
          </article>
        </section>
      </main>
    </div>);

}