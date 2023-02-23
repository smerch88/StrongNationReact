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
import { EditIconsBox } from 'components/MockupIcons/MockupIcons.styled';
import { getIsLoadingPosts } from 'redux/posts/posts-selectors';
import { Loading } from 'notiflix';

export default function ItemOfPost({ post }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [infoOfPost, setInfoOfPost] = useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingPosts);

  useEffect(() => {
    if (isLoading) {
      Loading.pulse({
        svgColor: '#455A64',
      });
      Loading.dots('Loading...');
    } else {
      Loading.remove();
    }
  }, [isLoading]);

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
        <LinkElement href={post.link} target="_blank">
          {post.link}
        </LinkElement>
        <PElement sx={{ paddingTop: '0' }}>
          {new Date(post.date).toLocaleDateString()}
        </PElement>
      </WrapOfLink>
      {isLoggedIn && (
        <WrapOfBtn>
          <Button variant="favorite" type="button" size="small">
            <div
              style={{
                width: '14px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                stroke: 'inherit',
                '&:hover': { stroke: 'white' },
              }}
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7682 1.98608L13.6502 5.43712C14.0278 6.1294 14.6965 6.61529 15.4716 6.76043L19.3354 7.48397C20.0162 7.61149 20.286 8.44187 19.8102 8.94517L17.1096 11.8015C16.5678 12.3745 16.3125 13.1607 16.414 13.9426L16.9197 17.8409C17.0088 18.5278 16.3025 19.0409 15.6767 18.7439L12.1256 17.0583C11.4133 16.7201 10.5866 16.7201 9.8744 17.0583L6.32321 18.7439C5.69751 19.0409 4.99114 18.5278 5.08027 17.8409L5.58609 13.9426C5.68756 13.1607 5.43211 12.3745 4.89038 11.8015L2.18985 8.94517C1.71402 8.44187 1.98384 7.61149 2.66462 7.48397L6.52834 6.76043C7.30342 6.61529 7.97215 6.1294 8.3498 5.43712L10.2317 1.98608C10.5634 1.37801 11.4366 1.37801 11.7682 1.98608Z"
                  stroke="inherit"
                  stroke-width="2"
                />
              </svg>
            </div>
          </Button>
          <Button
            variant="edit"
            type="button"
            onClick={() => {
              dispatch(deletePost(post.id));
            }}
          >
            Видалити{' '}
            <EditIconsBox style={{ width: '10px' }}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.95294 1L15.9765 15M15.9765 1L1.95294 15"
                  stroke="inherit"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </EditIconsBox>
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
