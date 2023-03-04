import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { Map } from 'components/Map/Map';
import { Stats } from 'components/Stats/Stats';
import { AutoPlay } from 'components/Slider/Slider';
import FreshNews from 'components/FreshNews/FreshNews';
import { ReadMore } from 'components/ReadMore/ReadMore';
import { getSlides } from 'redux/slider/slider-selectors';
import sprite from '../../images/map/sprite-of-regions2.svg';
import { isLoggedInSelector } from 'redux/admin/admin-selectors';
import { fetchAllSliderId } from 'redux/slider/slider-operations';
import { SliderImages } from 'components/SliderImages/SliderImages';
import { TranslateRegionName } from '../../components/ReadMore/TranslateRegionName';

import {
  AboutSection,
  AboutTextWrapper,
  AutoPlayBox,
  MapSection,
} from './Home.styled';

const Home = () => {
  const [circles, setCircles] = useState(false);
  const [isActiveRegion, setIsActiveRegion] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSliderId());
  }, [dispatch]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const isLoggedIn = useSelector(isLoggedInSelector);

  const slideIDs = useSelector(getSlides);

  return (
    <>
      <MapSection>
        <Container>
          {isMobile && isActiveRegion && (
            <div style={{ position: 'relative' }}>
              <svg
                width="211"
                height="224"
                style={{ margin: '0 auto', display: 'block' }}
              >
                <use href={`${sprite}#${isActiveRegion}`}></use>
              </svg>
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {<TranslateRegionName name={isActiveRegion} />}
              </span>
            </div>
          )}
          {(!circles || !isMobile) && (
            <Map
              setIsActiveRegion={setIsActiveRegion}
              isActiveRegion={isActiveRegion}
            />
          )}
        </Container>
        <ReadMore
          circles={circles}
          setCircles={setCircles}
          setIsActiveRegion={setIsActiveRegion}
        />
      </MapSection>
      <AutoPlayBox>
        <div>
          <AutoPlay images={slideIDs} rtl={true} />
          <AutoPlay images={slideIDs} rtl={false} />
        </div>
        <Box textAlign="center">
          {isLoggedIn && <SliderImages center slideIDs={slideIDs} />}
        </Box>
      </AutoPlayBox>
      <FreshNews />
      <Stats />
      <AboutSection>
        {/* who we are section */}
        <Container>
          <AboutTextWrapper>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              color={[theme.palette.text.header]}
              sx={{
                marginBottom: {
                  desktop: '50px',
                  tablet: '33px',
                  phone: '22px',
                },
              }}
            >
              ПРО НАС
            </Typography>
            <Typography>
              Засновником фонду “Хоробра Україна” є Міміношвілі Вахтангі
              Омарійович, який має багаторічний досвід допомоги людям. Після
              початку повномасштабної війни Росії проти України, Вахтангі
              Омарійович просто не зміг залишатись осторонь та створив фонд
              допомоги громадянам України.
            </Typography>
            <br />
            <Typography>
              Фонд створено для захисту, допомоги та підтримки людей, які
              лишились своїх домівок, роботи й коштів на існування.
            </Typography>
            <br />
            <Typography>
              Ціль фонду – допомога та соціальна підтримка незаможних верств
              населення, пенсіонерів, дітей, багатодітних родин та наших мужніх
              воїнів Збройних Сил України.
            </Typography>
            <br />
            <Typography>
              Міміношвілі Вахтангі Омарійович також є засновником адвокатського
              бюро, керуючим партнером, адвокатом та членом Ради адвокатів
              Київської області. Тому, фонд “Хоробра Україна” надає як фізичну
              допомогу постраждалим та переселенцам, так і професійну юридичну
              допомогу, маючи багаторічний досвід у будь яких юридичних
              питаннях.
            </Typography>
          </AboutTextWrapper>
        </Container>
      </AboutSection>
    </>
  );
};

export default Home;
