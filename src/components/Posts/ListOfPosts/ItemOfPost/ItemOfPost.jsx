import React from 'react';
import {
  ImgElement,
  LiElement,
  LinkElement,
  PElement,
  WrapOfLink,
} from './ItemOfPost.styled';
import imgOfPost from '../../../../images/sliderImages/1.jpg';

export default function ItemOfPost({ post }) {
  return (
    <LiElement>
      <div style={{ display: 'flex', gap: '11px' }}>
        <ImgElement src={imgOfPost} alt="smth" />
        <PElement>{post.description}</PElement>
      </div>
      <WrapOfLink>
        <LinkElement href={post.link} target="blank">
          {post.link}
        </LinkElement>
        <PElement>{new Date(post.date).toLocaleDateString()}</PElement>
      </WrapOfLink>
    </LiElement>
  );
}
