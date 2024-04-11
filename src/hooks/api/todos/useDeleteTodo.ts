import { useCallback } from 'react';
import { useAxios } from '../network/useAxios';

export const useDeleteTodo = () => {
  const { axios } = useAxios();

  const deleteTodo = useCallback(
    async (todoId: string) => {
      await axios.delete(`/todo/${todoId}`);
    },
    [axios]
  );

  return { deleteTodo };
};
