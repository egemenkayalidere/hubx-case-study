import { API_ENDPOINTS } from '@/api/endpoints';

describe('API_ENDPOINTS', () => {
  it('has stable endpoint urls', () => {
    expect(API_ENDPOINTS.categories).toBe(
      'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories',
    );
    expect(API_ENDPOINTS.questions).toBe('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
  });
});
