import { Button, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRegions } from 'redux/regions/regions-operations';
import { getRegions } from 'redux/regions/regions-selectors';
import { Circles } from './Circles';

const RegionsList = styled('ul')(({ theme }) => ({
  display: 'flex',
  overflowX: 'scroll',
  gap: '12px',
  padding: '32px 10px',
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
      <RegionsList>
        {oblList &&
          oblList.map(item => (
            <li key={item.id}>
              <Button variant="regions" onClick={handleOpen} data-id={item.id}>
                {item.name}
              </Button>
            </li>
          ))}
      </RegionsList>
      {props.circles && (
        <Button data-id={1} component={Link} to="/news">
          дивитись бiльше
        </Button>
      )}
    </>
  );
};
