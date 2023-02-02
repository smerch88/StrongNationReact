import { Container, Link, styled, Typography } from '@mui/material';
import { ReactComponent as ReactLogo } from './pictures/footer_logo.svg';

const StyledLogo = styled(ReactLogo)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    width: '152px',
    height: '67px',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '8px',
  lineHeight: '10px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '10px',
    lineHeight: '12px',
  },
}));

const TextWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
  },
}));
const StyledFooter = styled('footer')(({ theme }) => ({
  paddingTop: '17px',
  paddingBottom: '11px',

  padding: '30px',
  bottom: 0,
  position: 'fixed',
  width: '100%',
  [theme.breakpoints.up('desktop')]: {
    paddingTop: '29px',
    paddingBottom: '25px',
    boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
  },
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledLogo width="107px" height="47px" />
        <TextWrapper>
          <StyledTypography>Сайт розроблений </StyledTypography>
          <StyledTypography component={Link} href="/">
            Team Name
          </StyledTypography>
        </TextWrapper>
      </StyledContainer>
    </StyledFooter>
  );
};
