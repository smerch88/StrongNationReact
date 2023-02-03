import { Container, Typography } from '@mui/material';
import { Timer } from 'components/Timer/Timer';

import content1 from '../../images/content1.jpg';
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

const Home = () => {
  return (
    <>
      <MapSection>
        {/* map section */}
        <Container>
          <img
            src={content1}
            alt=""
            width="136px"
            height="84px"
            loading="lazy"
          />
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
              "Сильна Нація" - це благодійна організація, яка була створена під
              час військової агресії зі сторони РФ, для підтримки України.
              Справжні патріоти з усієї країни об'єдналися заради спільної мети
              - надавати гуманітарну допомогу постраждалим громадянам, ресурсно
              та грошово підтримувати ЗСУ, допомагати українським підприємствам
              та прикласти всі зусилля для пришвидчення нашої перемоги, адже ми
              сильна нація.
            </Typography>
            <br />
            <Typography>
              Благодійна організація "Сильна Нація" займається організацією
              збору та доставки харчових продуктів, засобів особистої гігієни,
              важливих медикаментів для всіх потребуючих громадян та
              безпосередньою допомогою й забезпеченням усім необхідним Збройні
              Сили України.
            </Typography>{' '}
            <br />
            <Typography>
              Наша організація відкрита до комунікації та співпраці з будь-якими
              свідомими громадянами з України, та за її межами. Ми будемо вдячні
              за будь яку інформаційну, грошову або фізичку допомогу, поширення
              інформації про організацію та пропозиції по створенню сумісних
              проектів, інвестування та благодійним внескам.
            </Typography>{' '}
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
              нашi досягнення за{' '}
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
