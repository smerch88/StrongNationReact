import {
  ImgBox,
  ImgElement,
  ImgTextBox,
  LiElement,
  LinkElement,
  PElement,
  WrapOfLink,
} from './ItemOfPost.styled';

export default function ItemOfPost({ post }) {
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
    </LiElement>
  );
}
