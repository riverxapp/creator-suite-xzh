import { randomUUID } from "crypto";

export type Customer = {
  id: string;
  name: string;
  company: string;
  email: string;
  status: "active" | "prospect" | "at-risk";
  lastContactAt: string;
};

export type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  source: string;
  stage: "new" | "qualified" | "proposal" | "won" | "lost";
  value: number;
  createdAt: string;
  updatedAt: string;
};

export type SessionRecord = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
};

type StorageState = {
  customers: Customer[];
  leads: Lead[];
  sessions: SessionRecord[];
};

type StorageSeed = Partial<StorageState>;

const defaultState: StorageState = {
  customers: [
    {
      id: "cust_1",
      name: "Avery Chen",
      company: "Northwind",
      email: "avery@northwind.com",
      status: "active",
      lastContactAt: "2026-04-21T10:00:00.000Z"
    },
    {
      id: "cust_2",
      name: "Mina Patel",
      company: "Acme Corp",
      email: "mina@acme.com",
      status: "prospect",
      lastContactAt: "2026-04-20T14:30:00.000Z"
    },
    {
      id: "cust_3",
      name: "Jordan Lee",
      company: "Globex",
      email: "jordan@globex.com",
      status: "at-risk",
      lastContactAt: "2026-04-18T09:15:00.000Z"
    }
  ],
  leads: [
    {
      id: "lead_1",
      name: "Tess Morgan",
      company: "Bluebird Labs",
      email: "tess@bluebirdlabs.com",
      source: "Website",
      stage: "qualified",
      value: 24000,
      createdAt: "2026-04-19T08:00:00.000Z",
      updatedAt: "2026-04-22T12:00:00.000Z"
    },
    {
      id: "lead_2",
      name: "Noah Brooks",
      company: "Summit Retail",
      email: "noah@summitretail.com",
      source: "Referral",
      stage: "proposal",
      value: 36000,
      createdAt: "2026-04-17T11:00:00.000Z",
      updatedAt: "2026-04-21T16:45:00.000Z"
    }
  ],
  sessions: []
};

declare global {
  // eslint-disable-next-line no-var
  var __crmStorage: StorageState | undefined;
}

function createState(seed?: StorageSeed): StorageState {
  return {
    customers: seed?.customers ?? structuredClone(defaultState.customers),
    leads: seed?.leads ?? structuredClone(defaultState.leads),
    sessions: seed?.sessions ?? []
  };
}

function getState(): StorageState {
  if (!globalThis.__crmStorage) {
    globalThis.__crmStorage = createState();
  }
  return globalThis.__crmStorage;
}

function setState(nextState: StorageState) {
  globalThis.__crmStorage = nextState;
}

export function listCustomers(): Customer[] {
  return structuredClone(getState().customers);
}

export function listLeads(): Lead[] {
  return structuredClone(getState().leads);
}

export function getLeadById(id: string): Lead | undefined {
  return structuredClone(getState().leads.find((lead) => lead.id === id));
}

export function upsertLead(input: Omit<Lead, "id" | "createdAt" | "updatedAt"> & Partial<Pick<Lead, "id">>) {
  const state = getState();
  const now = new Date().toISOString();

  if (input.id) {
    const index = state.leads.findIndex((lead) => lead.id === input.id);
    if (index !== -1) {
      const updated: Lead = {
        ...state.leads[index],
        ...input,
        id: input.id,
        updatedAt: now
      };
      state.leads[index] = updated;
      setState({ ...state, leads: [...state.leads] });
      return structuredClone(updated);
    }
  }

  const created: Lead = {
    id: input.id ?? `lead_${randomUUID()}`,
    name: input.name,
    company: input.company,
    email: input.email,
    source: input.source,
    stage: input.stage,
    value: input.value,
    createdAt: now,
    updatedAt: now
  };

  setState({ ...state, leads: [created, ...state.leads] });
  return structuredClone(created);
}

export function deleteLead(id: string): boolean {
  const state = getState();
  const nextLeads = state.leads.filter((lead) => lead.id !== id);

  if (nextLeads.length === state.leads.length) {
    return false;
  }

  setState({ ...state, leads: nextLeads });
  return true;
}

export function createSession(email: string, name: string) {
  const session: SessionRecord = {
    id: `sess_${randomUUID()}`,
    email,
    name,
    createdAt: new Date().toISOString()
  };

  const state = getState();
  setState({ ...state, sessions: [session, ...state.sessions] });
  return structuredClone(session);
}

export function getLatestSession(): SessionRecord | undefined {
  return structuredClone(getState().sessions[0]);
}

export function clearStorage(seed?: StorageSeed) {
  setState(createState(seed));
}