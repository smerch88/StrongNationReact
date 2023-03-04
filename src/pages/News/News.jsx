import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Typography, useTheme } from '@mui/material';

import { isLoggedInSelector } from 'redux/admin/admin-selectors';
import ListOfPosts from 'components/Posts/ListOfPosts/ListOfPosts';
import { fetchAllPostsByCountry } from 'redux/posts/posts-operations';
import FormNewPost from 'components/Posts/ListOfPosts/FormNewPost/FormNewPost';
import ListOfRegions from 'components/Posts/ListOfPosts/ListOfRegions/ListOfRegions';

import { Box, SectionNews, WrapOfBtn } from './News.styled';

const News = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isLoggedIn = useSelector(isLoggedInSelector);

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
            {isLoggedIn && <FormNewPost />}
            <ListOfRegions />
          </WrapOfBtn>
        </Box>
        <ListOfPosts />
      </Container>
    </SectionNews>
  );
};

export default News;
