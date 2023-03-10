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
              ?????? ??????
            </Typography>
            <Typography>
              ?????????????????????? ?????????? ????????????????? ????????????????? ?? ?????????????????????? ????????????????
              ????????????????????, ???????? ?????? ???????????????????????? ???????????? ???????????????? ??????????. ??????????
              ?????????????? ?????????????????????????????? ?????????? ?????????? ?????????? ??????????????, ????????????????
              ???????????????????? ???????????? ???? ???????? ???????????????????? ???????????????? ???? ?????????????? ????????
              ???????????????? ???????????????????? ??????????????.
            </Typography>
            <br />
            <Typography>
              ???????? ???????????????? ?????? ??????????????, ???????????????? ???? ?????????????????? ??????????, ??????
              ???????????????? ?????????? ??????????????, ???????????? ?? ???????????? ???? ??????????????????.
            </Typography>
            <br />
            <Typography>
              ???????? ?????????? ??? ???????????????? ???? ?????????????????? ?????????????????? ???????????????????? ????????????
              ??????????????????, ??????????????????????, ??????????, ???????????????????????? ?????????? ???? ?????????? ????????????
              ???????????? ???????????????? ?????? ??????????????.
            </Typography>
            <br />
            <Typography>
              ?????????????????????? ???????????????? ???????????????????? ?????????? ?? ?????????????????????? ??????????????????????????
              ????????, ???????????????? ??????????????????, ?????????????????? ???? ???????????? ???????? ??????????????????
              ?????????????????? ??????????????. ????????, ???????? ????????????????? ????????????????? ?????????? ???? ??????????????
              ???????????????? ???????????????????????? ???? ????????????????????????, ?????? ?? ???????????????????? ????????????????
              ????????????????, ?????????? ???????????????????????? ???????????? ?? ???????? ???????? ??????????????????
              ????????????????.
            </Typography>
          </AboutTextWrapper>
        </Container>
      </AboutSection>
    </>
  );
};

export default Home;
