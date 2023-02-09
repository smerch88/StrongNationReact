import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Timer } from 'components/Timer/Timer';
import { fetchCountry } from 'redux/country/country-operations';
import { getCountry } from 'redux/country/country-selectors';

import { Container, Typography } from '@mui/material';
import { Li, StatsSection, StatsTitle, StyledBox, Ul } from './Stats.Styled';

export const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const { categories } = useSelector(getCountry);

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
              {categories &&
                new Intl.NumberFormat().format(
                  categories.filter(
                    category => category.name === 'militaryDonations'
                  )[0].number
                )}
            </Typography>
            <Typography variant="h5" component="p">
              грн на підтримку військових
            </Typography>
          </Li>
          <Li>
            <Typography variant="h4" component="span">
              {categories &&
                new Intl.NumberFormat().format(
                  categories.filter(
                    category => category.name === 'civiliansDonations'
                  )[0].number
                )}
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
