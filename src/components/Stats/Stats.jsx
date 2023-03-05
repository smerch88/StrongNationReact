import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Typography } from '@mui/material';

import { Timer } from 'components/Timer/Timer';
import { getCountry } from 'redux/country/country-selectors';
import { fetchCountry } from 'redux/country/country-operations';

import { Li, StatsSection, StyledBox, Ul } from './Stats.Styled';

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
          <Timer />
        </StyledBox>
        <Ul>
          <Li>
            <Typography variant="h4" component="span">
              {categories &&
                new Intl.NumberFormat().format(
                  Math.round(
                    categories.filter(
                      category => category.name === 'militaryDonations'
                    )[0]?.number ?? '0'
                  )
                )}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                marginTop: {
                  tablet: '15px',
                },
              }}
            >
              грн на підтримку військових
            </Typography>
          </Li>
          <Li>
            <Typography variant="h4" component="span">
              {categories &&
                new Intl.NumberFormat().format(
                  Math.round(
                    categories.filter(
                      category => category.name === 'civiliansDonations'
                    )[0]?.number ?? '0'
                  )
                )}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                marginTop: {
                  tablet: '15px',
                },
              }}
            >
              грн на підтримку громадян
            </Typography>
          </Li>
        </Ul>
      </Container>
    </StatsSection>
  );
};
