import { Button, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchRegions } from 'redux/regions/regions-operations';
import { getRegions } from 'redux/regions/regions-selectors';

export const RegionsSlider = ({ handleOpen }) => {
  const dispatch = useDispatch();

  const oblList = useSelector(getRegions);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  const isBigScreen = useMediaQuery(theme => theme.breakpoints.up('desktop'));

  const settings = {
    className: 'center',
    // centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {oblList &&
          oblList.map(item => (
            <li key={item.id}>
              <Button variant="regions" onClick={handleOpen} data-id={item.id}>
                {item.region}
              </Button>
            </li>
          ))}
      </Slider>
    </div>
  );
};
