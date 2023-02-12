import { Box, styled, Typography } from '@mui/material';

const Circle = styled('li')(({ theme }) => ({
  borderRadius: '50%',
  width: '122px',
  height: '122px',

  background: ' rgba(69, 90, 100, 0.7);',
  border: '1px solid #FFFFFF',

  textAlign: 'center',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const CirclesUl = styled('ul')(({ theme }) => ({
  display: 'flex',
  overflowX: 'scroll',
  gap: '12px',
  padding: '32px 10px',
}));

export const Circles = ({ oblList, currentId }) => {
  console.log(oblList, 'oblList Circles');
  console.log(currentId, 'oblList currentId');
  return (
    <>
      <Box>
        <CirclesUl>
          {oblList &&
            oblList
              .filter(item => Number(item.id) === Number(currentId))
              .map(item => (
                <div
                  style={{ display: 'flex', flexWrap: 'wrap' }}
                  key={item.id}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Typography>витрачено на потреби вiйськових</Typography>
                    <Circle>{item?.categories[0]?.number ?? 0}</Circle>
                  </div>
                  <div>
                    <Circle>{item?.categories[1]?.number ?? 0}</Circle>
                    <Typography>витрачено на потреби громадян</Typography>
                  </div>
                </div>
              ))}
        </CirclesUl>
      </Box>
    </>
  );
};
