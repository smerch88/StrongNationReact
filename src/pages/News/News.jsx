import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllPostsByCountry } from 'redux/posts/posts-operations';

import { Container } from '@mui/material';

import ListOfPosts from 'components/Posts/ListOfPosts/ListOfPosts';
import FormNewPost from 'components/Posts/ListOfPosts/FormNewPost/FormNewPost';

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPostsByCountry());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <div>
          <h1>Новини</h1>
          <div>
            <FormNewPost />
          </div>
        </div>
        <ListOfPosts />
      </Container>
    </section>
  );
};

export default News;
