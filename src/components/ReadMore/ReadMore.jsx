import { Box, Button, Typography, Modal, styled } from '@mui/material';
// import { RegionsSlider } from 'components/Slider/RegionsSlider';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegions } from 'redux/regions/regions-operations';
import { getRegions } from 'redux/regions/regions-selectors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RegionsList = styled('ul')(({ theme }) => ({
  display: 'flex',
  overflowX: 'scroll',
  gap: '12px',
  padding: '32px 10px',
}));

const CirclesUl = styled('ul')(({ theme }) => ({
  display: 'flex',
  overflowX: 'scroll',
  gap: '12px',
  padding: '32px 10px',
}));

const Circle = styled('li')(({ theme }) => ({
  borderRadius: '50%',
  width: '150px',
  height: '150px',

  background: 'rgba(132, 148, 100, 0.6)',
  border: '1px solid #FFFFFF',

  textAlign: 'center',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ReadMore = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [circles, setCircles] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const oblList = useSelector(getRegions);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  const handleOpen = e => {
    const id = e.currentTarget.dataset.id;
    setCurrentId(id);
    setCircles(true);
  };

  const handleOpenReadMore = e => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  console.log(oblList, 'oblList 1');
  return (
    <>
      <RegionsList>
        {oblList &&
          oblList.map(item => (
            <li key={item.id}>
              <Button variant="regions" onClick={handleOpen} data-id={item.id}>
                {item.region}
              </Button>
            </li>
          ))}
      </RegionsList>
      {currentId && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Redion id: {currentId}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              {oblList
                .filter(item => item.id === currentId)
                .map(item => (
                  <div>
                    <li>{item.region}</li>
                    <li>{item.feat1}</li>
                    <li>{item.feat2}</li>
                    <li>{item.feat3}</li>
                  </div>
                ))}
            </Typography>
          </Box>
        </Modal>
      )}
      {circles && (
        <Box>
          <CirclesUl>
            {oblList
              .filter(item => item.id === currentId)
              .map(item => (
                <div style={{ display: 'flex' }}>
                  <Circle>{item.region}</Circle>
                  <Circle>{item.feat1}</Circle>
                  <Circle>{item.feat2}</Circle>
                  <Circle>{item.feat3}</Circle>
                </div>
              ))}
          </CirclesUl>
        </Box>
      )}
      <Typography
        variant="h1"
        component="p"
        onClick={handleOpenReadMore}
        data-id={1}
      >
        Read More{'>>>'}
      </Typography>
    </>
  );
};
