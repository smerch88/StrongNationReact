import { Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegions } from 'redux/regions/regions-operations';
import { getIsLoading, getRegions } from 'redux/regions/regions-selectors';
import { Circles } from './Circles';
import { TranslateRegionName } from './TranslateRegionName';
import { RegionsList } from './ReadMore.styled';
import { setOblId } from 'redux/oblID/oblId-slice';
import { getFilter } from 'redux/posts/posts-slice';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const ReadMore = props => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);
  const oblList = useSelector(getRegions);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      Loading.pulse({
        svgColor: '#455A64',
      });
      Loading.dots('Loading...');
    } else {
      Loading.remove();
    }
  }, [isLoading]);

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
      <Container>
        {props.circles && <Circles oblList={oblList} currentId={currentId} />}
      </Container>
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
