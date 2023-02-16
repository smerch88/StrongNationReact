import React from 'react';
import { useSelector } from 'react-redux';

import { getAllPosts, getFilterPosts } from 'redux/posts/posts-selectors';
import ItemOfPost from './ItemOfPost/ItemOfPost';

import { UlElement } from './ListOfPosts.styled';

export default function ListOfPosts() {
  const allPosts = useSelector(getAllPosts);
  const filterPost = useSelector(getFilterPosts);

  if (allPosts.length === 0) {
    return;
  }

  const filteredPosts = allPosts.filter(item =>
    item.region.includes(filterPost)
  );

  return (
    <UlElement>
      {filteredPosts.map(item => (
        <ItemOfPost key={item.id} post={item} />
      ))}
    </UlElement>
  );
}
