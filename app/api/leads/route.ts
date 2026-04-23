import { NextResponse } from "next/server";

type Lead = {
  id: string;
  name: string;
  company?: string;
  status: "new" | "qualified" | "proposal" | "won" | "lost";
  source?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

type LeadInput = Partial<Omit<Lead, "id" | "createdAt" | "updatedAt">>;

declare global {
  // eslint-disable-next-line no-var
  var __crmLeadsStore: Lead[] | undefined;
}

function getStore() {
  globalThis.__crmLeadsStore ??= [
    {
      id: "lead_1",
      name: "Acme Corp",
      company: "Acme Corp",
      status: "qualified",
      source: "Website",
      notes: "Demo scheduled for Friday.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "lead_2",
      name: "Northwind Traders",
      company: "Northwind",
      status: "proposal",
      source: "Referral",
      notes: "Sent pricing and security overview.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  return globalThis.__crmLeadsStore;
}

function json(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, init);
}

function isLeadStatus(value: unknown): value is Lead["status"] {
  return (
    value === "new" ||
    value === "qualified" ||
    value === "proposal" ||
    value === "won" ||
    value === "lost"
  );
}

function normalizeLeadInput(input: unknown): LeadInput | null {
  if (!input || typeof input !== "object") return null;

  const candidate = input as Record<string, unknown>;
  const name = typeof candidate.name === "string" ? candidate.name.trim() : "";
  if (!name) return null;

  const status = isLeadStatus(candidate.status) ? candidate.status : "new";

  return {
    name,
    company: typeof candidate.company === "string" ? candidate.company.trim() : undefined,
    status,
    source: typeof candidate.source === "string" ? candidate.source.trim() : undefined,
    notes: typeof candidate.notes === "string" ? candidate.notes.trim() : undefined
  };
}

export async function GET() {
  return json({ leads: getStore() });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const normalized = normalizeLeadInput(payload);

  if (!normalized) {
    return json({ error: "Invalid lead payload." }, { status: 400 });
  }

  const now = new Date().toISOString();
  const lead: Lead = {
    id: `lead_${crypto.randomUUID()}`,
    name: normalized.name,
    company: normalized.company,
    status: normalized.status ?? "new",
    source: normalized.source,
    notes: normalized.notes,
    createdAt: now,
    updatedAt: now
  };

  const store = getStore();
  store.unshift(lead);

  return json({ lead }, { status: 201 });
}

export async function PATCH(request: Request) {
  const payload = await request.json().catch(() => null);
  const candidate = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : null;

  const id = typeof candidate?.id === "string" ? candidate.id.trim() : "";
  if (!id) {
    return json({ error: "Lead id is required." }, { status: 400 });
  }

  const store = getStore();
  const index = store.findIndex((lead) => lead.id === id);
  if (index === -1) {
    return json({ error: "Lead not found." }, { status: 404 });
  }

  const updates = normalizeLeadInput(candidate);
  const existing = store[index];
  const now = new Date().toISOString();

  const nextLead: Lead = {
    ...existing,
    ...updates,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: now
  };

  store[index] = nextLead;

  return json({ lead: nextLead });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id")?.trim();

  if (!id) {
    return json({ error: "Lead id is required." }, { status: 400 });
  }

  const store = getStore();
  const index = store.findIndex((lead) => lead.id === id);

  if (index === -1) {
    return json({ error: "Lead not found." }, { status: 404 });
  }

  const [deletedLead] = store.splice(index, 1);

  return json({ lead: deletedLead });
}