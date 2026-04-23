"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, LockKeyhole, ShieldCheck, Sparkles, UserCircle2 } from "lucide-react";

type AuthMode = "sign-in" | "sign-up";

const storageKey = "crm_session";

function getStoredSession() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(storageKey);
}

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [name, setName] = useState("Jordan Lee");
  const [email, setEmail] = useState("jordan@northwind.com");
  const [password, setPassword] = useState("crm-demo-pass");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const headline = useMemo(
    () =>
      mode === "sign-in"
        ? "Sign in to your internal CRM"
        : "Create your internal CRM access",
    [mode]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const session = {
        name,
        email,
        authenticatedAt: new Date().toISOString()
      };

      window.localStorage.setItem(storageKey, JSON.stringify(session));
      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Unable to create a local session right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <ShieldCheck className="h-4 w-4" />
            Secure internal access
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Authentication
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{headline}</h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Use the demo sign-in flow to enter the workspace, keep session state local, and
              continue into the dashboard experience for customers and leads.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-border bg-background p-4">
              <LockKeyhole className="h-5 w-5 text-muted-foreground" />
              <h2 className="mt-3 text-sm font-semibold">Session ready</h2>
              <p className="mt-1 text-sm text-muted-foreground">Stores a lightweight local session.</p>
            </article>
            <article className="rounded-2xl border border-border bg-background p-4">
              <UserCircle2 className="h-5 w-5 text-muted-foreground" />
              <h2 className="mt-3 text-sm font-semibold">Team access</h2>
              <p className="mt-1 text-sm text-muted-foreground">Built for internal CRM operators.</p>
            </article>
            <article className="rounded-2xl border border-border bg-background p-4">
              <Sparkles className="h-5 w-5 text-muted-foreground" />
              <h2 className="mt-3 text-sm font-semibold">Fast handoff</h2>
              <p className="mt-1 text-sm text-muted-foreground">Moves directly into the dashboard.</p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setMode("sign-in")}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                mode === "sign-in"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-accent"
              }`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setMode("sign-up")}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                mode === "sign-up"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-accent"
              }`}
            >
              Sign up
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Access form
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{mode === "sign-in" ? "Welcome back" : "Get started"}</h2>
            </div>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Local demo session
            </span>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {mode === "sign-up" && (
              <label className="block space-y-2">
                <span className="text-sm font-medium">Full name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Enter your name"
                />
              </label>
            )}

            <label className="block space-y-2">
              <span className="text-sm font-medium">Work email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                placeholder="name@company.com"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                placeholder="Enter your password"
              />
            </label>

            {error ? <p className="text-sm text-red-500">{error}</p> : null}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Continuing..." : mode === "sign-in" ? "Enter dashboard" : "Create account"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Session state is stored locally for this demo CRM. You can return to the{" "}
            <Link href="/" className="font-medium text-foreground underline underline-offset-4">
              landing page
            </Link>{" "}
            or continue into the{" "}
            <Link href="/dashboard" className="font-medium text-foreground underline underline-offset-4">
              dashboard
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}