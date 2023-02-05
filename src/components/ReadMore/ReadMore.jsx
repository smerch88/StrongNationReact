import { Box, Button, Typography, Modal, styled } from '@mui/material';
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
  flexWrap: 'wrap',
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
  console.log(oblList);
  return (
    <>
      <RegionsList>
        {oblList &&
          oblList.map(
            item => (
              <li key={item.id}>
                <Button
                  variant="regions"
                  onClick={handleOpen}
                  data-id={item.id}
                >
                  {item.region}
                </Button>
              </li>
            )
            // console.log(item)
          )}
      </RegionsList>
      <Button onClick={handleOpenReadMore} data-id={1}>
        Read More
      </Button>
      {currentId && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal {currentId}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      )}
      {circles && <Box>Circle {currentId}</Box>}
    </>
  );
};
