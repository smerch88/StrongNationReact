import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllPostsByCountry } from 'redux/posts/posts-operations';

import { Container } from '@mui/material';

import ListOfPosts from 'components/Posts/ListOfPosts/ListOfPosts';

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPostsByCountry());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <ListOfPosts />
      </Container>
    </section>
  );
};

export default News;
