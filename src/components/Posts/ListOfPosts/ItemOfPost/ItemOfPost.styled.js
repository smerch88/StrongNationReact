import { styled, Button } from '@mui/material';

export const LiElement = styled('li')(({ theme }) => ({
  padding: '10px 10px 8px 13px',
  border: '1px solid #455A64',
  borderRadius: '18px',
  [theme.breakpoints.up('tablet')]: {
    width: 'calc((100% - 50px) / 3)',
    padding: '0 0 14px 0',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('desktop')]: {
    width: 'calc((100% - 72px) / 3)',
  },
  '&:hover': {
    color: [theme.palette.colorList.white],
    backgroundColor: [theme.palette.colorList.grey],
  },
  transition: 'all 250ms ease-out',
}));

export const ButtonEl = styled(Button)(({ theme }) => ({
  transition: 'all 0.5s ease',
  'li:hover  &': {
    color: [theme.palette.colorList.white],
    borderColor: [theme.palette.colorList.white],
    stroke: [theme.palette.colorList.white],
  },
}));

export const ImgElement = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

export const ImgTextBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '11px',
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'column',
    gap: '0px',
  },
}));

export const ImgBox = styled('div')(({ theme }) => ({
  minWidth: '114px',
  maxWidth: '114.01px',
  height: '85px',
  borderRadius: '10px',
  overflow: 'hidden',
  [theme.breakpoints.up('tablet')]: {
    minWidth: '200px',
    maxWidth: '200.01px',
    height: '152px',
    borderRadius: '18px 18px 0 0',
  },
  [theme.breakpoints.up('desktop')]: {
    minWidth: '354px',
    maxWidth: '354.01px',
    height: '269px',
  },
}));

export const PElement = styled('p')(({ theme }) => ({
  margin: '0',
  paddingTop: '7px',
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
    padding: '0px 7px',
    margin: '0',
  },
  [theme.breakpoints.up('desktop')]: {
    padding: '0px 10px',
  },
}));

export const LinkElement = styled('a')(({ theme }) => ({
  color: 'inherit',
  display: 'block',
  width: '220px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '10px',
    lineHeight: '11px',
    width: '115px',
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: '12px',
    lineHeight: '14px',
    width: '240px',
  },
}));

export const WrapOfBtn = styled('div')(({ theme }) => ({
  alignContent: 'center',
  justifyContent: 'center',
  display: 'flex',
  gap: '5px',
  marginTop: '17px',

  [theme.breakpoints.up('tablet')]: {
    marginTop: '14px',
    padding: '0px 7px',
  },

  [theme.breakpoints.up('desktop')]: {
    marginTop: '17px',
    padding: '0px 10px',
  },
}));
