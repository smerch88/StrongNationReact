import {
  ImgBox,
  ImgElement,
  ImgTextBox,
  LiElement,
  LinkElement,
  PElement,
  WrapOfLink,
} from './ItemOfPost.styled';
import { getPhotoForPost } from 'components/services/api-posts';
import { useEffect, useState } from 'react';

export default function ItemOfPost({ post }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const binaryCode = await getPhotoForPost(post.id);
      if (binaryCode.name === 'AxiosError') {
        console.log(`Post ${post.id} was not found`);
        return;
      }
      console.log(`Binary code for post ${post.id}:`, binaryCode);
      setImage(binaryCode);
    }
    fetchData();
  }, [post.id]);

  let imageSrc = '';
  if (image) {
    const base64Image = btoa(
      new Uint8Array(image).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    imageSrc = `data:image/jpeg;base64,${base64Image}`;
  }

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
