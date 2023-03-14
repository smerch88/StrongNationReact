import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

import { AutoPlayContainer, StyledImg } from './Slider.styled';

export const AutoPlay = React.memo(({ images, rtl }) => {
  const settings = React.useMemo(
    () => ({
      slidesToShow: 5,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 0,
      cssEase: 'linear',
      arrows: false,
      rtl: rtl,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    }),
    [rtl]
  );

  return (
    <AutoPlayContainer>
      <Slider {...settings}>
        {images.map(img => (
          <Box key={img}>
            <StyledImg
              src={`https://strong-nation.online/api/v2/slider-photo/download/${img}`}
              alt="зображення демонструє роботу волонтерів"
              loading="lazy"
            />
          </Box>
        ))}
      </Slider>
    </AutoPlayContainer>
  );
});
