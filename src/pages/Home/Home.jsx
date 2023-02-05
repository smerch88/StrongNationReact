import { Container, Typography } from '@mui/material';
import { AutoPlay } from 'components/Slider/Slider';
import { Timer } from 'components/Timer/Timer';

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

import {
  AboutSection,
  AboutTextWrapper,
  Li,
  MapSection,
  StatsSection,
  StatsTitle,
  StyledBox,
  Ul,
} from './Home.styled';
import { ReadMore } from 'components/ReadMore/ReadMore';

const Home = () => {
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
  return (
    <>
      <MapSection>
        {/* map section */}
        <Container>
          <ReadMore />
          <AutoPlay images={images1} rtl={true} />
          <AutoPlay images={images2} rtl={false} />
        </Container>
      </MapSection>
      <AboutSection>
        {/* who we are section */}
        <Container>
          <AboutTextWrapper>
            <Typography variant="h2" align="center" mb="10px">
              Хто ми?
            </Typography>
            <Typography>
              &nbsp;"Сильна Нація" - це благодійна організація, яка була
              створена під час військової агресії зі сторони РФ, для підтримки
              України. Справжні патріоти з усієї країни об'єдналися заради
              спільної мети - надавати гуманітарну допомогу постраждалим
              громадянам, ресурсно та грошово підтримувати ЗСУ, допомагати
              українським підприємствам та прикласти всі зусилля для
              пришвидчення нашої перемоги, адже ми сильна нація.
            </Typography>
            <br />
            <Typography>
              &nbsp;Благодійна організація "Сильна Нація" займається
              організацією збору та доставки харчових продуктів, засобів
              особистої гігієни, важливих медикаментів для всіх потребуючих
              громадян та безпосередньою допомогою й забезпеченням усім
              необхідним Збройні Сили України.
            </Typography>
            <br />
            <Typography>
              &nbsp; Наша організація відкрита до комунікації та співпраці з
              будь-якими свідомими громадянами з України, та за її межами. Ми
              будемо вдячні за будь яку інформаційну, грошову або фізичку
              допомогу, поширення інформації про організацію та пропозиції по
              створенню сумісних проектів, інвестування та благодійним внескам.
            </Typography>
            <br />
            <Typography> Разом ми переможемо!</Typography>
          </AboutTextWrapper>
        </Container>
      </AboutSection>
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
                1240
              </Typography>
              <Typography variant="h5" component="p">
                одиниць Збройної техніки
              </Typography>
            </Li>
            <Li>
              <Typography variant="h4" component="span">
                150 340
              </Typography>
              <Typography variant="h5" component="p">
                грн на підтримку зсу
              </Typography>
            </Li>
            <Li>
              <Typography variant="h4" component="span">
                5430
              </Typography>
              <Typography variant="h5" component="p">
                кілограм продуктів
              </Typography>
            </Li>
            <Li>
              <Typography variant="h4" component="span">
                350
              </Typography>
              <Typography variant="h5" component="p">
                вантажівок з ліками
              </Typography>
            </Li>
          </Ul>
        </Container>
      </StatsSection>
    </>
  );
};

export default Home;
