import { useQuery } from '@tanstack/react-query';

import { API_ENDPOINTS } from '@/api/endpoints';
import { fetchJson } from '@/api/http';
import type { GetCategoriesResponse, QuestionDto } from '@/api/types';

export function useCategoriesQuery() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchJson<GetCategoriesResponse>(API_ENDPOINTS.categories),
    select: (res) => [...res.data].sort((a, b) => a.rank - b.rank),
  });
}

export function useQuestionsQuery() {
  return useQuery({
    queryKey: ['questions'],
    queryFn: () => fetchJson<QuestionDto[]>(API_ENDPOINTS.questions),
    select: (res) => [...res].sort((a, b) => a.order - b.order),
  });
}
