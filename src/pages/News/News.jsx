import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllPostsByCountry } from 'redux/posts/posts-operations';

import { Container } from '@mui/material';

import ListOfPosts from 'components/Posts/ListOfPosts/ListOfPosts';
import FormNewPost from 'components/Posts/ListOfPosts/FormNewPost/FormNewPost';
import ListOfRegions from 'components/Posts/ListOfPosts/ListOfRegions/ListOfRegions';

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPostsByCountry());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h1>Новини</h1>
          <div style={{ display: 'flex', gap: '18px' }}>
            <FormNewPost />
            <ListOfRegions />
          </div>
        </div>
        <ListOfPosts />
      </Container>
    </section>
  );
};

export default News;
