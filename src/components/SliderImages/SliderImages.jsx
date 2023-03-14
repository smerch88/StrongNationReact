import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Button, Modal } from '@mui/material';

import {
  removeSliderImage,
  uploadSImage,
} from 'redux/slider/slider-operations';

import { StyledImg } from 'components/Slider/Slider.styled';

import { Ul, style } from './SliderImages.Styled';

export const SliderImages = ({ slideIDs }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // new state variable
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    // make the handleSubmit function asynchronous
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.target.elements.file.files[0]);
    setIsSubmitting(true);
    dispatch(uploadSImage(formData));
    setIsSubmitting(false);
    setOpen(false); // close the modal after successful submission
  };

  const handleClick = event => {
    dispatch(removeSliderImage(event.target.dataset.id));
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>редагувати фото</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Ul>
            {slideIDs &&
              slideIDs.map(img => (
                <Box
                  component="li"
                  key={img}
                  sx={{
                    width: {
                      desktop: '190px',
                      tablet: '139px',
                      mobile: '50px',
                    },
                    border: '1px solid #455A64',
                  }}
                >
                  <Box
                    sx={{
                      height: '85px',
                    }}
                  >
                    <StyledImg
                      src={`https://strong-nation.online/api/v2/slider-photo/download/${img}`}
                      alt="зображення демонструє роботу волонтерів"
                      loading="lazy"
                    />
                  </Box>
                  <Button
                    variant="edit"
                    sx={{ width: '100%', border: '0' }}
                    type="button"
                    onClick={event => handleClick(event)}
                    data-id={img}
                  >
                    Видалити
                  </Button>
                </Box>
              ))}
          </Ul>

          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <label>
                <input type="file" name="file" />
              </label>
              <br />
              <Button type="submit" disabled={isSubmitting}>
                Готово
              </Button>
              {/* disable the button during submission */}
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};
