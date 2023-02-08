import React from 'react';

import { EnvelopIcon, MapPointIcon, PhoneIcon } from './Icons';
import {
  BigStyledBox,
  ContactsText,
  ContactsTitle,
  ContactsValueText,
  IconBox,
  MiddleStyledBox,
  SmallStyledBox,
  StyledContainer,
  StyledLink,
} from './Contacts.styled';
import { CardMedia } from '@mui/material';

const Contacts = () => {
  return (
    <StyledContainer>
      <ContactsTitle variant="h2" component="h1">
        КОНТАКТИ
      </ContactsTitle>
      <BigStyledBox>
        <MiddleStyledBox>
          <SmallStyledBox>
            <ContactsText variant="h5">
              Ви можете з нами зв’язатися за номером:
            </ContactsText>
            <IconBox>
              <PhoneIcon />
              <StyledLink variant="h5" href="tel:+380504711203">
                +380 50 471 1203
              </StyledLink>
            </IconBox>
          </SmallStyledBox>
          <SmallStyledBox>
            <ContactsText variant="h5">Та відправити повідомлення:</ContactsText>
            <IconBox>
              <EnvelopIcon />
              <StyledLink variant="h5" href="mailto:Braveukraine22@gmail.com">
                Braveukraine22@gmail.com
              </StyledLink>
            </IconBox>
          </SmallStyledBox>
          <SmallStyledBox>
            <ContactsText>Наша адреса:</ContactsText>
            <IconBox>
              <MapPointIcon/>
              <ContactsValueText>
                Провулок Хомова Ярослава, буд. 14А, Київ, Україна 03035
              </ContactsValueText>
            </IconBox>
          </SmallStyledBox>
        </MiddleStyledBox>
        <CardMedia
          sx={{borderRadius: '15px', border: '1px solid #455A64'}}
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.4730239517309!2d30.478612906477675!3d50.434706520640674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce9528100001%3A0x5c7e707ee7f02735!2z0L_QtdGALiDQndC40LrQvtC70LDRjyDQntGB0YLRgNC-0LLRgdC60L7Qs9C-LCAxNNCwLCDQmtC40LXQsiwgMDMwMzU!5e0!3m2!1sru!2sua!4v1675888242126!5m2!1sru!2sua"
          width="100%"
          height="200px"
          loading="lazy"
        />
      </BigStyledBox>
    </StyledContainer>
  );
};

export default Contacts;
