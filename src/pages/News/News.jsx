import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllPostsByCountry } from 'redux/posts/posts-operations';

import { Container, Typography, useTheme } from '@mui/material';

import ListOfPosts from 'components/Posts/ListOfPosts/ListOfPosts';
import FormNewPost from 'components/Posts/ListOfPosts/FormNewPost/FormNewPost';
import ListOfRegions from 'components/Posts/ListOfPosts/ListOfRegions/ListOfRegions';
import { Box, SectionNews, WrapOfBtn } from './News.styled';

const News = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchAllPostsByCountry());
  }, [dispatch]);

  return (
    <SectionNews>
      <Container>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            color={[theme.palette.text.header]}
          >
            Новини
          </Typography>
          <WrapOfBtn>
            <FormNewPost />
            <ListOfRegions />
          </WrapOfBtn>
        </Box>
        <ListOfPosts />
      </Container>
    </SectionNews>
  );
};

export default News;
