import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from 'redux/posts/posts-selectors';

export default function ListOfPosts() {
  const allPosts = useSelector(getAllPosts);
  console.log('allPosts', allPosts);
  if (allPosts.length === 0) {
    return;
  }
  return (
    <ul>
      {allPosts.map(item => (
        <li key={item.id}>
          <p>{item.description}</p>
          <a href={item.link} target="blank">
            {item.link}
          </a>
        </li>
      ))}
    </ul>
  );
}
