import { useCallback } from 'react';
import { useAxios } from '../network/useAxios';

export const usePutTodo = () => {
  const { axios } = useAxios();

  const putTodo = useCallback(
    async (todoId: string, text: string) => {
      await axios.put(`/todo/${todoId}`, { text: text });
    },
    [axios]
  );

  return { putTodo };
};
