import { Box } from '@mui/material';
import { nanoid } from 'nanoid';
import Slider from 'react-slick';
import { AutoPlayContainer, StyledImg } from './Slider.styled';

export const AutoPlay = ({ ...props }) => {
  const settings = {
    slidesToShow: 5,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    arrows: false,
    rtl: props.rtl,
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
          slidesToShow: 5,
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
  };

  return (
    <AutoPlayContainer>
      <Slider {...settings}>
        {props.images.map(img => (
          <Box key={nanoid()}>
            <StyledImg src={img} alt="" loading="lazy" />
          </Box>
        ))}
      </Slider>
    </AutoPlayContainer>
  );
};
