export const TranslateRegionName = ({ name }) => {
  return (
    <>
      {(() => {
        switch (name) {
          case 'Cherkasy':
            return 'Черкаси';
          case 'Chernihiv':
            return 'Чернігів';
          case 'Chernivtsi':
            return 'Чернівці';
          case 'Dnipro':
            return 'Дніпро';
          case 'Donetsk':
            return 'Донецьк';
          case 'Mykolaiv':
            return 'Миколаїв';
          case 'Ivano-Frankivsk':
            return 'Івано-Франківськ';
          case 'Kharkiv':
            return 'Харків';
          case 'Kherson':
            return 'Херсон';
          case 'Khmelnytskyi':
            return 'Хмельницький';
          case 'Kyiv':
            return 'Київ';
          case 'Kropyvnytskyi':
            return 'Кропивницький';
          case 'Luhansk':
            return 'Луганськ';
          case 'Lviv':
            return 'Львів';
          case 'Odesa':
            return 'Одеса';
          case 'Poltava':
            return 'Полтава';
          case 'Rivne':
            return 'Рівне';
          case 'Sumy':
            return 'Суми';
          case 'Ternopil':
            return 'Тернопіль';
          case 'Vinnytsia':
            return 'Вінниця';
          case 'Lutsk':
            return 'Луцьк';
          case 'Uzhhorod':
            return 'Ужгород';
          case 'Zaporizhzhia':
            return 'Запоріжжя';
          case 'Zhytomyr':
            return 'Житомир';
          case 'Crimea':
            return 'Крим';
          default:
            return null;
        }
      })()}
    </>
  );
};
