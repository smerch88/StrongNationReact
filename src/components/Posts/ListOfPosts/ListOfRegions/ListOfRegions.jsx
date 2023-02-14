import React, { useState } from 'react';
import ModalEl from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/posts/posts-slice';

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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name=""
              onClick={handleClick}
            >
              всi областi
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Vinnytsia"
              onClick={handleClick}
            >
              Вiнниця
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Dnipro"
              onClick={handleClick}
            >
              Днiпро
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Donetsk"
              onClick={handleClick}
            >
              Донецьк
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Zhytomyr"
              onClick={handleClick}
            >
              Житомир
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Zaporizhzhia"
              onClick={handleClick}
            >
              Запорiжжя
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Ivano-Frankivsk"
              onClick={handleClick}
            >
              Івано-Франкiвськ
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Kyiv"
              onClick={handleClick}
            >
              Київ
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Kropyvnytskyi"
              onClick={handleClick}
            >
              Кропивницький
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Crimea"
              onClick={handleClick}
            >
              Крим
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Luhansk"
              onClick={handleClick}
            >
              Луганськ
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Lviv"
              onClick={handleClick}
            >
              Львiв
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Lutsk"
              onClick={handleClick}
            >
              Луцьк
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Mykolaiv"
              onClick={handleClick}
            >
              Миколаїв
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Odesa"
              onClick={handleClick}
            >
              Одеса
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Poltava"
              onClick={handleClick}
            >
              Полтава
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Rivne"
              onClick={handleClick}
            >
              Рiвне
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Sumy"
              onClick={handleClick}
            >
              Суми
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Ternopil"
              onClick={handleClick}
            >
              Тернопiль
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Uzhhorod"
              onClick={handleClick}
            >
              Ужгород
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Kharkiv"
              onClick={handleClick}
            >
              Харкiв
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Kherson"
              onClick={handleClick}
            >
              Херсон
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Khmelnytskyi"
              onClick={handleClick}
            >
              Хмельницький
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Cherkasy"
              onClick={handleClick}
            >
              Черкаси
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Chernivtsi"
              onClick={handleClick}
            >
              Чернiвцi
            </button>
            <button
              style={{ textAlign: 'left' }}
              type="button"
              name="Chernihiv"
              onClick={handleClick}
            >
              Чернiгiв
            </button>
          </div>
        </div>
      </ModalEl>
    </>
  );
}
