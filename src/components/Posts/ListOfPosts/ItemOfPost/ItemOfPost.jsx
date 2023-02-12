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

export default function ItemOfPost({ post }) {
  const dispatch = useDispatch();
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
      <button
        type="button"
        onClick={() => {
          dispatch(deletePost(post.id));
        }}
      >
        Delete
      </button>
    </LiElement>
  );
}
