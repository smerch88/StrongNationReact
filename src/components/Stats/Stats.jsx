import { Container, Typography } from '@mui/material';
import { Timer } from 'components/Timer/Timer';
import { Li, StatsSection, StatsTitle, StyledBox, Ul } from './Stats.Styled';

export const Stats = () => {
  return (
    <StatsSection>
      <Container>
        {/* stats section */}
        <StyledBox>
          <StatsTitle variant="h3" component="h2">
            нашi досягнення за &nbsp;
          </StatsTitle>
          <Timer />
        </StyledBox>
        <Ul>
          <Li>
            <Typography variant="h4" component="span">
              150 340
            </Typography>
            <Typography variant="h5" component="p">
              грн на підтримку військових
            </Typography>
          </Li>
          <Li>
            <Typography variant="h4" component="span">
              280 310
            </Typography>
            <Typography variant="h5" component="p">
              грн на підтримку громадян
            </Typography>
          </Li>
        </Ul>
      </Container>
    </StatsSection>
  );
};
