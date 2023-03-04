import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addPostToImportant,
  deletePost,
  deletePostFromImportant,
} from 'redux/posts/posts-operations';

import {
  CristDeleteIcon,
  StarButtonIcon,
} from 'components/MockupIcons/MockupIcons';

import { getPostById } from 'services/api-posts';
import FormUpdatePost from '../FormUpdatePost/FormUpdatePost';
import { isLoggedInSelector } from 'redux/admin/admin-selectors';

import {
  ButtonEl,
  ImgBox,
  ImgElement,
  ImgTextBox,
  LiElement,
  LinkElement,
  PElement,
  WrapOfBtn,
  WrapOfLink,
} from './ItemOfPost.styled';

export default function ItemOfPost({ post }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [infoOfPost, setInfoOfPost] = useState({});
  const [isImportant, setIsImportant] = useState(post.important);
  const dispatch = useDispatch();

  const switchImportant = () => {
    if (isImportant === false) {
      dispatch(addPostToImportant(post.id));
      setIsImportant(true);
    }
    if (isImportant === true) {
      dispatch(deletePostFromImportant(post.id));
      setIsImportant(false);
    }
  };

  useEffect(() => {}, [isImportant]);

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
          <ButtonEl
            style={{ backgroundColor: isImportant ? '#FFD749' : 'inherit' }}
            variant="favorite"
            type="button"
            size="small"
            onClick={switchImportant}
          >
            <StarButtonIcon />
          </ButtonEl>
          <ButtonEl
            variant="edit"
            type="button"
            onClick={() => {
              dispatch(deletePost(post.id));
            }}
          >
            Видалити
            <CristDeleteIcon />
          </ButtonEl>
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
