import { useCallback } from 'react';
import { useAxios } from '../network/useAxios';

export const usePostTodo = () => {
  const { axios } = useAxios();

  const postTodo = useCallback(
    async (text: string) => {
      await axios.post('/todo', { text: text });
    },
    [axios]
  );
  return { postTodo };
};
