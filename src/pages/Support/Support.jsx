import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { CopySupportIcon } from 'components/MockupIcons/MockupIcons';

import {
  StyledContainer,
  SupportCopyButton,
  SupportStyledBox,
  SupportText,
  SupportTextPhrase,
  SupportTitle,
} from './Support.styled';

const Support = () => {
  const copyToClipboard = e => {
    navigator.clipboard.writeText(e.target.value);
    Notify.success('Номер скопійовано в буфер обміну!', {
      width: '280px',
      position: 'center-top',
      borderRadius: '15px',
      fontSize: '14px',
      success: { background: '#455A64' },
    });
  };

  return (
    <section>
      <StyledContainer>
        <SupportTitle variant="h3" component="h1">
          благодiйний фонд "Хоробра Україна"
        </SupportTitle>
        <SupportStyledBox>
          <SupportCopyButton
            onClick={copyToClipboard}
            type="button"
            value="4874242500193480"
          >
            Картка
            <CopySupportIcon />
          </SupportCopyButton>
          <SupportText variant="h5" component="p">
            4874242500193480
          </SupportText>
        </SupportStyledBox>
        <SupportStyledBox>
          <SupportCopyButton
            onClick={copyToClipboard}
            type="button"
            value="Value 2, some card number"
          >
            IBAN (UAH)
            <CopySupportIcon />
          </SupportCopyButton>
          <SupportText variant="h5" component="p">
            UA343348510000000026007176726
          </SupportText>
        </SupportStyledBox>
        <SupportStyledBox>
          <SupportCopyButton
            onClick={copyToClipboard}
            type="button"
            value="Value 3, some card number"
          >
            IBAN (USD)
            <CopySupportIcon />
          </SupportCopyButton>
          <SupportText variant="h5" component="p">
            UA343348510000000026007176726
          </SupportText>
        </SupportStyledBox>
        <SupportTextPhrase variant="h5">
          Всі фінансові звіти будуть опубліковані. Разом до перемоги!
        </SupportTextPhrase>
      </StyledContainer>
    </section>
  );
};

export default Support;
