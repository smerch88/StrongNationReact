import React from 'react';

import Modal from '@mui/material/Modal';
import { Box, Button } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: { tablet: '650px', desktop: '687px' },
  bgcolor: 'white',
  borderRadius: '24px',
  boxShadow: 24,
  p: '23px 20px',
};

export default function ModalEl({ children, nameOfButton }) {
  const [open, setOpen] = React.useState(false);
  console.log('children', children);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="edit" onClick={handleOpen}>
        {nameOfButton} <EditOutlinedIcon fontSize="small" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          background: 'rgba(31, 31, 31, 0.68)',
          backdropFilter: 'blur(7.5px)',
        }}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
