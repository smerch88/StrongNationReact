
import React from 'react';

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
import { EnvelopIcon, MapPointIcon, PhoneIcon } from './Icons';

const Contact = () => {
  return (
    <StyledContainer>
      <ContactsTitle variant='h2' component='h1'>КОНТАКТИ</ContactsTitle>
      <BigStyledBox>
        <MiddleStyledBox>
          <SmallStyledBox>
              <ContactsText variant='h5'>
                Ви можете з нами зв’язатися за номером:
              </ContactsText>
              <IconBox>
              <PhoneIcon />
              <StyledLink href="tel:+380504711203">+380 50 471 1203</StyledLink>
            </IconBox>
          </SmallStyledBox>
          <SmallStyledBox>
            <ContactsText>Та відправити повідомлення:</ContactsText>
            <IconBox>
              <EnvelopIcon />
              <StyledLink href="mailto:Braveukraine22@gmail.com">
                Braveukraine22@gmail.com
              </StyledLink>
            </IconBox>
          </SmallStyledBox>
          <SmallStyledBox>
            <ContactsText>Наша адреса:</ContactsText>
            <IconBox>
              <MapPointIcon />
              <ContactsValueText>
                Провулок Хомова Ярослава, буд. 14А Киев, Украина 03035
              </ContactsValueText>
            </IconBox>
          </SmallStyledBox>
        </MiddleStyledBox>
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=123 Main St, City, State 12345&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="324px"
          height="200px"
          style={{ borderRadius: '15px' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        />
      </BigStyledBox>
    </StyledContainer>
  );
};

export default Contact;
