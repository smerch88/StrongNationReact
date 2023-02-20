import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRegions } from 'redux/regions/regions-operations';
import { getRegions } from 'redux/regions/regions-selectors';
import { Circles } from './Circles';
import { HiArrowLongRight } from 'react-icons/hi2';
import { TranslateRegionName } from './TranslateRegionName';
import { RegionsList } from './ReadMore.styled';
import { setOblId } from 'redux/oblID/oblId-slice';
import { getFilter } from 'redux/posts/posts-slice';

export const ReadMore = props => {
  const dispatch = useDispatch();

  // const [circles, setCircles] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const oblList = useSelector(getRegions);
  console.log(oblList);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  const handleOpen = e => {
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    setCurrentId(id);
    props.setCircles(true);

    dispatch(getFilter(name));
    dispatch(setOblId({ id: Number(id), name: name }));
    props.setIsActiveRegion(name);
  };

  // First half of oblList
  const firstHalf = oblList.slice(0, Math.ceil(oblList.length / 2));

  // Second half of oblList
  const secondHalf = oblList.slice(Math.ceil(oblList.length / 2));

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
        {firstHalf &&
          firstHalf.map(item => (
            <li key={item.id}>
              <Button
                variant="regions"
                onClick={handleOpen}
                data-id={item.id}
                data-name={item.name}
              >
                <TranslateRegionName name={item.name} />
              </Button>
            </li>
          ))}
      </RegionsList>
      <RegionsList>
        {secondHalf &&
          secondHalf.map(item => (
            <li key={item.id}>
              <Button
                variant="regions"
                onClick={handleOpen}
                data-id={item.id}
                data-name={item.name}
              >
                <TranslateRegionName name={item.name} />
              </Button>
            </li>
          ))}
      </RegionsList>
    </>
  );
};
