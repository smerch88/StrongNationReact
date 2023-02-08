import { Container, Link, styled, Typography } from '@mui/material';
import { ReactComponent as ReactLogo } from './pictures/footer_logo.svg';

const StyledLogo = styled(ReactLogo)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    width: '152px',
    height: '67px',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
  boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
  paddingTop: '20px',
  paddingBottom: '20px',

  [theme.breakpoints.up('tablet')]: {
    paddingTop: '36px',
    paddingBottom: '36px',
  },
  [theme.breakpoints.up('desktop')]: {
    paddingTop: '60px',
    paddingBottom: '60px',
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
