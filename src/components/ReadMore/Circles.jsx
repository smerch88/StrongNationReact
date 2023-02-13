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
        <CirclesUl sx={{ padding: 0 }}>
          {oblList &&
            oblList
              .filter(item => Number(item.id) === Number(currentId))
              .map(item => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }} key={item.id}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      marginBottom: { phone: '22px', tablet: '30px' },
                      width: { tablet: '50%' },
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        width: '50%',
                        textAlign: 'right',
                        fontSize: {
                          tablet: '30px',
                          desktop: '30px',
                          textAlign: 'left',
                        },
                      }}
                    >
                      витрачено на потреби вiйськових
                    </Typography>
                    <Circle>
                      <Typography variant="h3" component="p">
                        {Math.round(item?.categories[0]?.number ?? 0)}{' '}
                        <Typography
                          variant="h3"
                          component="span"
                          sx={{ fontSize: { tablet: '25px', desktop: '25px' } }}
                        >
                          грн
                        </Typography>
                      </Typography>
                    </Circle>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      marginBottom: '22px',
                      width: { tablet: '50%' },
                      flexDirection: { tablet: 'row-reverse' },
                    }}
                  >
                    <Circle>
                      <Typography variant="h3" component="p">
                        {Math.round(item?.categories[1]?.number ?? 0)}{' '}
                        <Typography
                          variant="h3"
                          component="span"
                          sx={{ fontSize: { tablet: '25px', desktop: '25px' } }}
                        >
                          грн
                        </Typography>
                      </Typography>
                    </Circle>
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        width: '50%',
                        textAlign: 'right',
                        fontSize: {
                          tablet: '30px',
                          desktop: '30px',
                          textAlign: 'left',
                        },
                      }}
                    >
                      витрачено на потреби громадян
                    </Typography>
                  </Box>
                </Box>
              ))}
        </CirclesUl>
      </Box>
    </>
  );
};