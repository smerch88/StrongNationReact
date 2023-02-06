import { Box, styled } from '@mui/material';

const Circle = styled('li')(({ theme }) => ({
  borderRadius: '50%',
  width: '150px',
  height: '150px',

  background: 'rgba(132, 148, 100, 0.6)',
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
  return (
    <>
      <Box>
        <CirclesUl>
          {oblList
            .filter(item => item.id === currentId)
            .map(item => (
              <div style={{ display: 'flex' }}>
                <Circle>{item.region}</Circle>
                <Circle>{item.feat1}</Circle>
                <Circle>{item.feat2}</Circle>
                <Circle>{item.feat3}</Circle>
              </div>
            ))}
        </CirclesUl>
      </Box>
    </>
  );
};
