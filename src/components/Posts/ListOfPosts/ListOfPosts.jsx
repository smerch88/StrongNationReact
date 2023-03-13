import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import ItemOfPost from './ItemOfPost/ItemOfPost';
import { getAllPosts, getFilterPosts } from 'redux/posts/posts-selectors';

import { UlElement } from './ListOfPosts.styled';

export default function ListOfPosts() {
  const allPosts = useSelector(getAllPosts);
  const filterPost = useSelector(getFilterPosts);

  if (allPosts.length === 0) {
    return;
  }

  const compare = (a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  };

  const filteredPosts = allPosts.filter(item =>
    item.region.includes(filterPost)
  );

  if (filteredPosts.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <Typography sx={{ fontSize: '20px', margin: 'auto' }}>
          Ми ще працюємо над допомогою для цієї області
        </Typography>
      </Box>
    );
  }

  return (
    <UlElement>
      {filteredPosts.sort(compare).map(item => (
        <ItemOfPost key={item.id} post={item} />
      ))}
    </UlElement>
  );
}
