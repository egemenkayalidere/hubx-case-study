export class ApiError extends Error {
  status?: number;
  url?: string;
  body?: unknown;

  constructor(message: string, params?: { status?: number; url?: string; body?: unknown }) {
    super(message);
    this.name = 'ApiError';
    this.status = params?.status;
    this.url = params?.url;
    this.body = params?.body;
  }
}

export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  const text = await res.text();
  const body = text ? safeJsonParse(text) : null;

  if (!res.ok) {
    throw new ApiError(`HTTP ${res.status}`, { status: res.status, url, body });
  }

  return body as T;
}

function safeJsonParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
