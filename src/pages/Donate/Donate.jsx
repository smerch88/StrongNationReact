import { Container, Typography } from '@mui/material';

import code1 from '../../images/codes/qr1.jpg';

const Donate = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h1"
        textTransform="uppercase"
        align="center"
      >
        Пiдтримати благодiйний фонд <br /> «сильна нацiя»
      </Typography>
      <ul>
        <li>
          <Typography>IBAN: UA22344669000002600930090386</Typography>
          <Typography>ЄДРПОУ: 3939338</Typography>
          <Typography>
            Отримувач: Благодійна Організація «Міжнародний
          </Typography>
          <Typography> благодійний фонд «Сильна Нація»</Typography>
          <Typography> Призначення платежу: Благодійна допомога.</Typography>
          <img src={code1} alt="qr code" />
        </li>
        <li>
          <Typography>Рахунок Bitcoin Номер:</Typography>
          <Typography>bc1qkd5az2ml7dk5j5h672yhxmhmxe9tuf97j39fm6</Typography>
          <img src={code1} alt="qr code" />
        </li>
        <li>
          <Typography>Ethereum Wallet (eth, usdt, usdc)</Typography>
          <Typography> 0xa1b1bbB8070Df2450810b8eB2425D543cfCeF79b</Typography>
          <img src={code1} alt="qr code" />
        </li>
        <li>
          <Typography>Wallet (tether)</Typography>
          <Typography>TX9aNri16bSxVYi6oMnKDj5RMKAMBXWzon</Typography>
          <img src={code1} alt="qr code" />
        </li>
        <li>
          <Typography>Solana Wallet (SOL)</Typography>
          <Typography>8icxpGYCoR8SRKqLYsSarcAjBjBPuXAuHkeJjJx5ju7a</Typography>
          <img src={code1} alt="qr code" />
        </li>
        <li>
          <Typography>Перекази з-за кордону: </Typography>
          <Typography>SWIFT</Typography>
          <Typography>Назва підприємства/company Name</Typography>
          <Typography>МБФ ПОВЕРНИСЬ ЖИВИМ БО</Typography>
          <Typography>CO "INTERNATIONAL CHARITABLE FOUNDATION</Typography>
          <Typography>"COME BACK ALIVE"</Typography>
          <img src={code1} alt="qr code" />
        </li>
        <li>
          {' '}
          <Typography>IBAN Code (евро) </Typography>
          <Typography> UA0930529900000260402502978 </Typography>
          <Typography>IBAN Code (Долар США)</Typography>
          <Typography>UA1730529900000260035028620</Typography>
          <img src={code1} alt="qr code" />
        </li>
      </ul>
    </Container>
  );
};

export default Donate;
