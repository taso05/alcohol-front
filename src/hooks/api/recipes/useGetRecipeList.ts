import useSWR from 'swr';

export type Recipe = {
  user_id: number;
  title: string;
  content: string;
  percentage: number;
  sweetness: number;
  image: string;
  id: number;
};

export const useGetRecipeList = () => {
  const { data } = useSWR<Recipe[]>('/recipes');
  return { data };
};
