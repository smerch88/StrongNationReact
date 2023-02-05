import { Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  border: '2px solid #000',
  boxShadow: '0px 0px 24px #000',
  padding: '16px',
};

export const ModalContent = ({ currentId }) => {
  return (
    <Box style={style}>
      <Typography id="modal-title" variant="h6" component="h2">
        Text in a modal {currentId}
      </Typography>
      <Typography id="modal-description" style={{ marginTop: '8px' }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  );
};
