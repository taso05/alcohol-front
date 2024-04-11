import { apiClient } from '@/libs/apiClient';

export const useAxios = () => {
  const axios = apiClient;
  return { axios };
};
