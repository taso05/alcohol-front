import { NextPage } from 'next';
import React from 'react';
import { useGetRecipeList } from '@/hooks/api/recipes/useGetRecipeList';

const RecipesPage: NextPage = () => {
  const { data } = useGetRecipeList();

  if (data === undefined) {
    return <p>データがありません</p>;
  }
  return (
    <div>
      {data.map((recipe, index) => {
        return (
          <div key={recipe.id}>
            <p>-------------{index + 1}回目のループ---------------------</p>
            <p>タイトル: {recipe.title}</p>
            <p>説明: {recipe.content}</p>
            <p>お酒の甘さ:{recipe.sweetness}</p>
            <p>お酒の度数:{recipe.percentage}</p>
            <p>画像:{recipe.image}</p>
            <p>ID :{recipe.id}</p>
            <p>ユーザーID:{recipe.user_id}</p>
            <p>---------------------------------------------------</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecipesPage;
