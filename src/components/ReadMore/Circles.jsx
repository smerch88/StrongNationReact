import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { MoreArrowIcon } from 'components/MockupIcons/MockupIcons';

import { Circle, CirclesUl } from './Circles.styled';

export const Circles = ({ oblList, currentId }) => {
  return (
    <>
      <Box>
        <CirclesUl sx={{ padding: 0 }}>
          {oblList &&
            oblList
              .filter(item => Number(item.id) === Number(currentId))
              .map(item => (
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                  key={item.id}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      marginBottom: { phone: '22px', tablet: '30px' },
                      width: { tablet: '50%', desktop: '330px' },
                      flexDirection: { tablet: 'row', desktop: 'row' },

                      position: { desktop: 'absolute' },
                      left: 'calc(50% - 550px)',
                      top: '650px',
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
                          desktop: '40px',
                          textAlign: 'left',
                          fontSize: { desktop: '40px' },
                        },
                        lineHeight: {
                          desktop: 'calc(48/40)',
                          tablet: 'calc(36/30)',
                        },
                      }}
                    >
                      витрачено на потреби вiйськових
                    </Typography>
                    <Circle>
                      <Typography
                        variant="h3"
                        component="p"
                        sx={{
                          fontSize: { desktop: '40px' },
                        }}
                      >
                        {Math.round(item?.categories[0]?.number ?? 0) === 0 ? (
                          <Typography
                            variant="h5"
                            component="span"
                            sx={{
                              fontSize: { phone: '20px', desktop: '25px' },
                              lineHeight: 'calc(23/20)',
                              textTransform: 'none',
                            }}
                          >
                            Працюємо над цим...
                          </Typography>
                        ) : (
                          <>
                            {Math.round(item?.categories[0]?.number)}{' '}
                            <Typography
                              variant="h3"
                              component="span"
                              sx={{
                                fontSize: { tablet: '25px', desktop: '25px' },
                              }}
                            >
                              грн
                            </Typography>
                          </>
                        )}
                      </Typography>
                    </Circle>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      marginBottom: '22px',
                      width: { tablet: '50%', desktop: '330px' },
                      flexDirection: { tablet: 'row-reverse' },

                      position: { desktop: 'absolute' },
                      right: 'calc(50% - 600px)',
                      top: '140px',
                      fontSize: { desktop: '40px' },
                    }}
                  >
                    <Circle>
                      <Typography
                        variant="h3"
                        component="p"
                        sx={{
                          fontSize: { desktop: '40px' },
                          lineHeight: { desktop: '1' },
                        }}
                      >
                        {Math.round(item?.categories[1]?.number ?? 0) === 0 ? (
                          <Typography
                            variant="h5"
                            component="span"
                            sx={{
                              fontSize: { phone: '20px', desktop: '25px' },
                              lineHeight: 'calc(23/20)',
                              textTransform: 'none',
                            }}
                          >
                            Працюємо над цим...
                          </Typography>
                        ) : (
                          <>
                            {Math.round(item?.categories[1]?.number)}{' '}
                            <Typography
                              variant="h3"
                              component="span"
                              sx={{
                                fontSize: { tablet: '25px', desktop: '25px' },
                              }}
                            >
                              грн
                            </Typography>
                          </>
                        )}
                      </Typography>
                    </Circle>
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        width: '50%',
                        fontSize: {
                          tablet: '30px',
                          desktop: '40px',
                        },
                        textAlign: { phone: 'right', tablet: 'left' },
                        lineHeight: {
                          desktop: 'calc(48/40)',
                          tablet: 'calc(36/30)',
                        },
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
            position: { desktop: 'absolute' },
            left: 'calc(50% - 550px)',
            top: '855px',
          }}
        >
          <Button
            data-id={1}
            component={Link}
            to="/news"
            sx={{
              border: '1px solid #FFFFFF',
              paddingLeft: {
                tablet: '20px',
                desktop: '29px',
              },
            }}
          >
            дивитись бiльше <MoreArrowIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};
