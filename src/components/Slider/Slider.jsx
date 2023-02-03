import { useMediaQuery, useTheme } from '@mui/material';
import { nanoid } from 'nanoid';
import Slider from 'react-slick';

export const AutoPlay = ({ ...props }) => {
  const isBigScreen = useMediaQuery(theme => theme.breakpoints.up('desktop'));
  const slidesNumber = { number: isBigScreen ? 4 : 3 };
  const imgSizes = {
    width: isBigScreen ? '272px' : '136px',
    height: isBigScreen ? '167px' : '84px',
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesNumber.number,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    arrows: false,
    rtl: props.rtl,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.images.map(img => (
          <div key={nanoid()}>
            <img src={img} alt="" {...imgSizes} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
