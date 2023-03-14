import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalEl from 'components/Modal/Modal';
import { getFilter } from 'redux/posts/posts-slice';
import { getFilterPosts } from '../../../../redux/posts/posts-selectors';
import { TranslateRegionName } from 'components/ReadMore/TranslateRegionName';

import { Btn, LineTop, SpanEl, WrapOfRegions } from './ListOfRegions.styled';

export default function ListOfRegions() {
  const [open, setOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState('');

  const chosenRegionOnMap = useSelector(getFilterPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chosenRegionOnMap) {
      setActiveRegion(<TranslateRegionName name={chosenRegionOnMap} />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = e => {
    dispatch(getFilter(e.target.name));
    setOpen(false);
    setActiveRegion(
      <TranslateRegionName name={e.target.name || e.target.dataset.name} />
    );
  };
  return (
    <>
      <ModalEl
        nameOfButton={activeRegion || 'Всі області'}
        open={open}
        setOpen={setOpen}
      >
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
              data-name="Всі області"
              onClick={handleClick}
            >
              {activeRegion.props?.name === 'Всі області' && <SpanEl />}
              всi областi
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Vinnytsia"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Vinnytsia' ||
                chosenRegionOnMap === 'Vinnytsia') && <SpanEl />}
              Вiнниця
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Dnipro"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Dnipro' ||
                chosenRegionOnMap === 'Dnipro') && <SpanEl />}
              Днiпро
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Donetsk"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Donetsk' ||
                chosenRegionOnMap === 'Donetsk') && <SpanEl />}
              Донецьк
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Zhytomyr"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Zhytomyr' ||
                chosenRegionOnMap === 'Zhytomyr') && <SpanEl />}
              Житомир
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Zaporizhzhia"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Zaporizhzhia' ||
                chosenRegionOnMap === 'Zaporizhzhia') && <SpanEl />}
              Запорiжжя
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Ivano-Frankivsk"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Ivano-Frankivsk' ||
                chosenRegionOnMap === 'Ivano-Frankivsk') && <SpanEl />}
              Івано-Франкiвськ
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kyiv"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Kyiv' ||
                chosenRegionOnMap === 'Kyiv') && <SpanEl />}
              Київ
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kropyvnytskyi"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Kropyvnytskyi' ||
                chosenRegionOnMap === 'Kropyvnytskyi') && <SpanEl />}
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
              {(activeRegion.props?.name === 'Crimea' ||
                chosenRegionOnMap === 'Crimea') && <SpanEl />}
              Крим
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Luhansk"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Luhansk' ||
                chosenRegionOnMap === 'Luhansk') && <SpanEl />}
              Луганськ
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Lviv"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Lviv' ||
                chosenRegionOnMap === 'Lviv') && <SpanEl />}
              Львiв
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Lutsk"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Lutsk' ||
                chosenRegionOnMap === 'Lutsk') && <SpanEl />}
              Луцьк
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Mykolaiv"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Mykolaiv' ||
                chosenRegionOnMap === 'Mykolaiv') && <SpanEl />}
              Миколаїв
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Odesa"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Odesa' ||
                chosenRegionOnMap === 'Odesa') && <SpanEl />}
              Одеса
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Poltava"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Poltava' ||
                chosenRegionOnMap === 'Poltava') && <SpanEl />}
              Полтава
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Rivne"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Rivne' ||
                chosenRegionOnMap === 'Rivne') && <SpanEl />}
              Рiвне
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Sumy"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Sumy' ||
                chosenRegionOnMap === 'Sumy') && <SpanEl />}
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
              {(activeRegion.props?.name === 'Ternopil' ||
                chosenRegionOnMap === 'Ternopil') && <SpanEl />}
              Тернопiль
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Uzhhorod"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Uzhhorod' ||
                chosenRegionOnMap === 'Uzhhorod') && <SpanEl />}
              Ужгород
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kharkiv"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Kharkiv' ||
                chosenRegionOnMap === 'Kharkiv') && <SpanEl />}
              Харкiв
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Kherson"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Kherson' ||
                chosenRegionOnMap === 'Kherson') && <SpanEl />}
              Херсон
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Khmelnytskyi"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Khmelnytskyi' ||
                chosenRegionOnMap === 'Khmelnytskyi') && <SpanEl />}
              Хмельницький
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Cherkasy"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Cherkasy' ||
                chosenRegionOnMap === 'Cherkasy') && <SpanEl />}
              Черкаси
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Chernivtsi"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Chernivtsi' ||
                chosenRegionOnMap === 'Chernivtsi') && <SpanEl />}
              Чернiвцi
            </Btn>
            <Btn
              style={{ textAlign: 'left' }}
              type="button"
              name="Chernihiv"
              onClick={handleClick}
            >
              {(activeRegion.props?.name === 'Chernihiv' ||
                chosenRegionOnMap === 'Chernihiv') && <SpanEl />}
              Чернiгiв
            </Btn>
          </div>
        </WrapOfRegions>
      </ModalEl>
    </>
  );
}
