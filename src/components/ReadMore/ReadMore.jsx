import { Box, Button, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRegions } from 'redux/regions/regions-operations';
import { getRegions } from 'redux/regions/regions-selectors';
import { Circles } from './Circles';
import { HiArrowLongRight } from 'react-icons/hi2';
import { TranslateRegionName } from './TranslateRegionName';

const RegionsList = styled('ul')(({ theme }) => ({
  display: 'flex',
  overflowX: 'scroll',
  gap: '12px',
  paddingBottom: '20px',
  [theme.breakpoints.up('tablet')]: {
    paddingBottom: '40px',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'none',
  },
}));

export const ReadMore = props => {
  const dispatch = useDispatch();

  // const [circles, setCircles] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const oblList = useSelector(getRegions);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  const handleOpen = e => {
    const id = e.currentTarget.dataset.id;
    setCurrentId(id);
    props.setCircles(true);
  };

  return (
    <>
      {props.circles && <Circles oblList={oblList} currentId={currentId} />}
      {props.circles && (
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
      )}
      <RegionsList>
        {oblList &&
          oblList.map(item => (
            <li key={item.id}>
              <Button variant="regions" onClick={handleOpen} data-id={item.id}>
                <TranslateRegionName name={item.name} />
              </Button>
            </li>
          ))}
      </RegionsList>
    </>
  );
};
