import { ApiError, fetchJson } from '@/api/http';

describe('fetchJson', () => {
  it('throws ApiError when response is not ok', async () => {
    const prevFetch = global.fetch;
    global.fetch = jest.fn(async () => ({
      ok: false,
      status: 500,
      text: async () => JSON.stringify({ error: 'fail' }),
    })) as unknown as typeof fetch;

    await expect(fetchJson('https://example.com')).rejects.toBeInstanceOf(ApiError);

    global.fetch = prevFetch;
  });
});
