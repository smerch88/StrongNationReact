import { Box, Button, Typography } from '@mui/material';
import { Circle, CirclesUl } from './Circles.styled';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export const Circles = ({ oblList, currentId }) => {
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
                        fontSize: {
                          tablet: '30px',
                          desktop: '30px',
                        },
                        textAlign: { phone: 'right', tablet: 'left' },
                      }}
                    >
                      витрачено на потреби громадян
                    </Typography>
                  </Box>
                </Box>
              ))}
        </CirclesUl>
        <Box
          textAlign="center"
          sx={{
            marginBottom: { phone: '22px', tablet: '42px' },
            display: { desktop: 'none' },
          }}
        >
          <Button data-id={1} component={Link} to="/news">
            дивитись бiльше <HiArrowLongRight />
          </Button>
        </Box>
      </Box>
    </>
  );
};
