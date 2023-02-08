import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListOfPosts from 'components/ListOfPosts/ListOfPosts';
import { fetchAllPostsByCountry } from 'redux/posts/posts-operations';

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPostsByCountry());
  }, [dispatch]);

  return <ListOfPosts />;
};

export default News;
