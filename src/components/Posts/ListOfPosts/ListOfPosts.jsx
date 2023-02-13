import React from 'react';
import { useSelector } from 'react-redux';

import { getAllPosts } from 'redux/posts/posts-selectors';
import ItemOfPost from './ItemOfPost/ItemOfPost';

import { UlElement } from './ListOfPosts.styled';

export default function ListOfPosts() {
  const allPosts = useSelector(getAllPosts);
  console.log('allPosts', allPosts);
  if (allPosts.length === 0) {
    return;
  }

  return (
    <UlElement>
      {allPosts.map(item => (
        <ItemOfPost key={item.id} post={item} />
      ))}
    </UlElement>
  );
}
