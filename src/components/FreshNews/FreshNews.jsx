import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ItemOfPost from 'components/Posts/ListOfPosts/ItemOfPost/ItemOfPost';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllPostsByCountry } from 'redux/posts/posts-operations';
import { getAllPosts } from 'redux/posts/posts-selectors';
import { NewsList, TitleBox } from './FreshNews.styled';
import { HiArrowLongRight } from 'react-icons/hi2';

export default function FreshNews() {
  const allPosts = useSelector(getAllPosts);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme =>
    theme.breakpoints.down('tablet')
  );

  useEffect(() => {
    dispatch(fetchAllPostsByCountry());
  }, [dispatch]);

  if (allPosts.length === 0) return;
  return (
    <section>
      <Container style={{marginTop: '-73px'}}>
        <TitleBox>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            color={[theme.palette.text.header]}
          >
            останнi новини
          </Typography>
          {!isSmallScreen && (
            <Button
              component={Link}
              to="/news"
              sx={{
                gap: '7px',
                width: {
                  desktop: '190px',
                  tablet: '136px',
                },
                height: {
                  desktop: '54px',
                  tablet: '38px',
                },
              }}
            >
              дивитись бiльше <HiArrowLongRight />
            </Button>
          )}
        </TitleBox>
        <NewsList>
          {allPosts.slice(0, 3).map(post => (
            <ItemOfPost key={post.id} post={post} />
          ))}
        </NewsList>

        {isSmallScreen && (
          <TitleBox    sx={{
            mb: '25px',
            mt: '25px',
          }}>
            <Button
              component={Link}
              to="/news"
              sx={{
                lineHeight: '24px',
                height: '54px',
                gap: '7px',
                width: '190px',
                borderRadius: '10px',
                fontSize: '20px',
                mb: '0',
                mt: '0',
              }}
            >
              дивитись бiльше
              <HiArrowLongRight />
            </Button>
          </TitleBox>
        )}
      </Container>
    </section>
  );
}
