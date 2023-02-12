import { styled } from '@mui/material';

export const LiElement = styled('li')(({ theme }) => ({
  padding: '10px 10px 8px 13px',
  border: '1px solid #455A64',
  borderRadius: '18px',
  [theme.breakpoints.up('tablet')]: {
    width: 'calc((100% - 50px) / 3)',
    height: '236px',
    padding: '0px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('desktop')]: {
    width: 'calc((100% - 72px) / 3)',
    height: '396px',
  },
}));

export const ImgElement = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

export const ImgBox = styled('div')(({ theme }) => ({
  width: '114px',
  height: '85px',
  borderRadius: '10px',
  overflow: 'hidden',
  [theme.breakpoints.up('tablet')]: {
    width: '200px',
    height: '152px',
    borderRadius: '18px 18px 0 0',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '354px',
    height: '269px',
  },
}));

export const PElement = styled('p')(({ theme }) => ({
  margin: '0',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '10px',
    lineHeight: '11px',
    padding: '7px',
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: '12px',
    lineHeight: '14px',
    padding: '10px',
  },
}));

export const WrapOfLink = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '7px',
  [theme.breakpoints.up('tablet')]: {
    padding: '0px 7px 7px 7px',
    margin: '0',
  },
  [theme.breakpoints.up('desktop')]: {
    padding: '0px 10px 10px 10px',
  },
}));

export const LinkElement = styled('a')(({ theme }) => ({
  color: theme.palette.text.header,
  display: 'block',
  width: '150px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '10px',
    lineHeight: '11px',
    width: '120px',
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: '12px',
    lineHeight: '14px',
  },
}));

export const ImgTextBox = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '11px',
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'column',
    gap: '0px',
  },
}));
