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

  useEffect(() => {
    getPostById(post.id).then(data => setInfoOfPost(data));
  }, [post]);

  if (!infoOfPost.id) return;

  return (
    <LiElement>
      <ImgTextBox>
        <ImgBox>
          <ImgElement
            src={`http://strong-nation.online/api/v2/post-photo/download/${post.id}`}
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
      <WrapOfBtn>
        <Button
          variant="edit"
          type="button"
          onClick={() => {
            dispatch(deletePost(post.id));
          }}
        >
          Видалити <ClearOutlinedIcon fontSize="small" sx={{ ml: '7px' }} />
        </Button>
        <FormUpdatePost infoOfPost={infoOfPost} post={post} />
      </WrapOfBtn>
    </LiElement>
  );
}
