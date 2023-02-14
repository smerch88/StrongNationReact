import {
  ImgBox,
  ImgElement,
  ImgTextBox,
  LiElement,
  LinkElement,
  PElement,
  WrapOfLink,
} from './ItemOfPost.styled';
import { useDispatch } from 'react-redux';
import { deletePost } from 'redux/posts/posts-operations';
import FormUpdatePost from '../FormUpdatePost/FormUpdatePost';
import { useEffect, useState } from 'react';
import { getPostById } from 'components/services/api-posts';
import { Button } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function ItemOfPost({ post }) {
  const [infoOfPost, setInfoOfPost] = useState({});
  const dispatch = useDispatch();
  console.log('infoOfPost', infoOfPost);
  useEffect(() => {
    getPostById(post.id).then(data => setInfoOfPost(data));
  }, [post]);

  if (!infoOfPost.id) return;

  return (
    <LiElement>
      <ImgTextBox>
        <ImgBox>
          <ImgElement
            src={`http://strong-nation.online/post-photo/v1/download/${post.id}`}
            alt="smth"
          />
        </ImgBox>
        <PElement>{post.description}</PElement>
      </ImgTextBox>
      <WrapOfLink>
        <LinkElement href={post.link} target="blank">
          {post.link}
        </LinkElement>
        <PElement>{new Date(post.date).toLocaleDateString()}</PElement>
      </WrapOfLink>
      <div style={{ display: 'flex' }}>
        <Button
          variant="edit"
          type="button"
          onClick={() => {
            dispatch(deletePost(post.id));
          }}
        >
          Видалити <ClearOutlinedIcon fontSize="small" />
        </Button>
        <FormUpdatePost infoOfPost={infoOfPost} post={post} />
      </div>
    </LiElement>
  );
}
