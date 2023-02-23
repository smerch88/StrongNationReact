import React from 'react';
import PropTypes from 'prop-types';
import {
  ImgBox,
  ImgElement,
  ImgTextBox,
  LiElement,
  LinkElement,
  PElement,
  WrapOfBtn,
  WrapOfLink,
} from './ItemOfPost.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from 'redux/posts/posts-operations';
import FormUpdatePost from '../FormUpdatePost/FormUpdatePost';
import { useEffect, useState } from 'react';
import { getPostById } from 'services/api-posts';
import { Button } from '@mui/material';
import { isLoggedInSelector } from 'redux/admin/admin-selectors';
import { CristDeleteIcon, StarButtonIcon } from 'components/MockupIcons/MockupIcons';

export default function ItemOfPost({ post }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [infoOfPost, setInfoOfPost] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getPostById(post.id).then(data => setInfoOfPost(data));
  }, [post]);
  if (!infoOfPost.id) return null;

  return (
    <LiElement>
      <ImgTextBox>
        <ImgBox>
          <ImgElement
            src={`https://strong-nation.online/api/v2/post-photo/download/${post.id}`}
            alt="зображення до поста"
          />
        </ImgBox>
        <PElement>{post.description}</PElement>
      </ImgTextBox>
      <WrapOfLink>
        <LinkElement href={post.link} target="_blank" rel="noopener noreferrer">
          {post.link}
        </LinkElement>
        <PElement sx={{ paddingTop: '0' }}>
          {new Date(post.date).toLocaleDateString()}
        </PElement>
      </WrapOfLink>
      {isLoggedIn && (
        <WrapOfBtn>
          <Button variant="favorite" type="button" size="small">
            <StarButtonIcon/>
          </Button>
          <Button
            variant="edit"
            type="button"
            onClick={() => {
              dispatch(deletePost(post.id));
            }}
          >
            Видалити 
            <CristDeleteIcon/>
          </Button>
          <FormUpdatePost infoOfPost={infoOfPost} post={post} />
        </WrapOfBtn>
      )}
    </LiElement>
  );
}

ItemOfPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
