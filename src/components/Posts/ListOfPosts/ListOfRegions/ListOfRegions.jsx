import React, { useState } from 'react';
import ModalEl from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/posts/posts-slice';
import { Btn, LineTop, WrapOfRegions } from './ListOfRegions.styled';

export default function ListOfRegions() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(getFilter(e.target.name));
    setOpen(false);
  };

  return (
    <>
      <ModalEl nameOfButton={'Всі області'} open={open} setOpen={setOpen}>
        <LineTop></LineTop>
        <WrapOfRegions>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name=""
              onClick={handleClick}
            >
              всi областi
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Vinnytsia"
              onClick={handleClick}
            >
              Вiнниця
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Dnipro"
              onClick={handleClick}
            >
              Днiпро
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Donetsk"
              onClick={handleClick}
            >
              Донецьк
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Zhytomyr"
              onClick={handleClick}
            >
              Житомир
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Zaporizhzhia"
              onClick={handleClick}
            >
              Запорiжжя
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Ivano-Frankivsk"
              onClick={handleClick}
            >
              Івано-Франкiвськ
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kyiv"
              onClick={handleClick}
            >
              Київ
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kropyvnytskyi"
              onClick={handleClick}
            >
              Кропивницький
            </Btn>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Crimea"
              onClick={handleClick}
            >
              Крим
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Luhansk"
              onClick={handleClick}
            >
              Луганськ
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Lviv"
              onClick={handleClick}
            >
              Львiв
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Lutsk"
              onClick={handleClick}
            >
              Луцьк
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Mykolaiv"
              onClick={handleClick}
            >
              Миколаїв
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Odesa"
              onClick={handleClick}
            >
              Одеса
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Poltava"
              onClick={handleClick}
            >
              Полтава
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Rivne"
              onClick={handleClick}
            >
              Рiвне
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Sumy"
              onClick={handleClick}
            >
              Суми
            </Btn>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Ternopil"
              onClick={handleClick}
            >
              Тернопiль
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Uzhhorod"
              onClick={handleClick}
            >
              Ужгород
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kharkiv"
              onClick={handleClick}
            >
              Харкiв
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kherson"
              onClick={handleClick}
            >
              Херсон
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Khmelnytskyi"
              onClick={handleClick}
            >
              Хмельницький
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Cherkasy"
              onClick={handleClick}
            >
              Черкаси
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Chernivtsi"
              onClick={handleClick}
            >
              Чернiвцi
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Chernihiv"
              onClick={handleClick}
            >
              Чернiгiв
            </Btn>
          </div>
        </WrapOfRegions>
      </ModalEl>
    </>
  );
}
