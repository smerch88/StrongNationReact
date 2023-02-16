import { Container, Typography, useTheme } from '@mui/material';
import { AutoPlay } from 'components/Slider/Slider';

import content1 from '../../images/sliderImages/1.jpg';
import content2 from '../../images/sliderImages/2.jpg';
import content3 from '../../images/sliderImages/3.jpg';
import content4 from '../../images/sliderImages/4.jpg';
import content5 from '../../images/sliderImages/5.jpg';
import content6 from '../../images/sliderImages/6.jpg';
import content7 from '../../images/sliderImages/7.jpg';
import content8 from '../../images/sliderImages/8.jpg';
import content9 from '../../images/sliderImages/9.jpg';
import content10 from '../../images/sliderImages/10.jpg';
import content11 from '../../images/sliderImages/11.jpg';

import { AboutSection, AboutTextWrapper, MapSection } from './Home.styled';
import { ReadMore } from 'components/ReadMore/ReadMore';
import { Stats } from 'components/Stats/Stats';
import { Map } from 'components/Map/Map';
import FreshNews from 'components/FreshNews/FreshNews';
import { useState } from 'react';

const Home = () => {
  const [circles, setCircles] = useState(false);

  const images1 = [content1, content2, content3, content4, content5, content6];
  const images2 = [
    content7,
    content8,
    content9,
    content10,
    content11,
    content1,
    content1,
  ];
  const theme = useTheme();
  return (
    <>
      <MapSection>
        <Container>
          {!circles && <Map />}
          <ReadMore circles={circles} setCircles={setCircles} />
        </Container>
        {/* Якщо не помістити слайдер в секцію то буде вилазити за межі, видно на 480 і менше я не знаю як пофіксити */}
      </MapSection>
      <AutoPlay images={images1} rtl={true} />
      <AutoPlay images={images2} rtl={false} />
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
