import { Container, styled } from '@mui/material';

import { ReactComponent as ReactLogo } from './pictures/footer_logo.svg';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledFooter = styled('footer')(({ theme }) => ({
  boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
  padding: '21px 0',
  [theme.breakpoints.up('tablet')]: {
    paddingTop: '35px',
    paddingBottom: '25px',
  },
  [theme.breakpoints.up('desktop')]: {
    padding: '46px 0',
  },
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <ReactLogo width="159px" height="58px" />
      </StyledContainer>
    </StyledFooter>
  );
};
