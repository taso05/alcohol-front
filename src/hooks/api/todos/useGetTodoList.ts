import useSWR from 'swr';

export type Todo = {
  id: string;
  text: string;
};

export const useGetTodoList = () => {
  const { data, mutate } = useSWR<Todo[]>('/todos');
  return { data, mutate };
};
