import React from 'react';
import {
  ImgBox,
  ImgElement,
  ImgTextBox,
  LiElement,
  LinkElement,
  PElement,
  WrapOfLink,
} from './ItemOfPost.styled';
import imgOfPost from '../../../../images/sliderImages/1.jpg';

export default function ItemOfPost({ post }) {
  return (
    <LiElement>
      <ImgTextBox>
      <ImgBox>
        <ImgElement src={imgOfPost} alt="smth" />
        </ImgBox>
        <PElement>{post.description}</PElement>
      </ImgTextBox>
      <WrapOfLink>
        <LinkElement href={post.link} target="blank">
          {post.link}
        </LinkElement>
        <PElement>{new Date(post.date).toLocaleDateString()}</PElement>
      </WrapOfLink>
    </LiElement>
  );
}
