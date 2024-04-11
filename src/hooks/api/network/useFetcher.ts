import { apiClient } from '@/libs/apiClient';

export const useFetcher = () => {
  const fetcher = async (url: string) => {
    const { data } = await apiClient.get(url);
    return data;
  };
  return { fetcher };
};
