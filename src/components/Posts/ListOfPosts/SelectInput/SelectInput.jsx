import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export default function NativeSelectRegion({ handleChangeRegion, region }) {
  const ITEM_HEIGHT = 50;
  const ITEM_PADDING_TOP = 4;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 182,
        backgroundColor: 'white',
        boxSshadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: 25,
      },
    },
  };
  return (
    <FormControl variant="standard" sx={{ width: '100%', background: 'white' }}>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={region}
        onChange={handleChangeRegion}
        MenuProps={MenuProps}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Vinnytsia">Вiнниця</MenuItem>
        <MenuItem value="Dnipro">Днiпро</MenuItem>
        <MenuItem value="Donetsk">Донецьк</MenuItem>
        <MenuItem value="Zhytomyr">Житомир</MenuItem>
        <MenuItem value="Zaporizhzhia">Запорiжжя</MenuItem>
        <MenuItem value="Ivano-Frankivsk">Івано-Франкiвськ</MenuItem>
        <MenuItem value="Kyiv">Київ</MenuItem>
        <MenuItem value="Kropyvnytskyi">Кропивницький</MenuItem>
        <MenuItem value="Crimea">Крим</MenuItem>
        <MenuItem value="Luhansk">Луганськ</MenuItem>
        <MenuItem value="Lviv">Львiв</MenuItem>
        <MenuItem value="Lutsk">Луцьк</MenuItem>{' '}
        <MenuItem value="Mykolaiv">Миколаїв</MenuItem>
        <MenuItem value="Odesa">Одеса</MenuItem>
        <MenuItem value="Poltava">Полтава</MenuItem>
        <MenuItem value="Rivne">Рiвне</MenuItem>
        <MenuItem value="Sumy">Суми</MenuItem>
        <MenuItem value="Ternopil">Тернопiль</MenuItem>
        <MenuItem value="Uzhhorod">Ужгород</MenuItem>
        <MenuItem value="Kharkiv">Харкiв</MenuItem>
        <MenuItem value="Kherson">Херсон</MenuItem>
        <MenuItem value="Khmelnytskyi">Хмельницький</MenuItem>
        <MenuItem value="Cherkasy">Черкаси</MenuItem>
        <MenuItem value="Chernivtsi">Чернiвцi</MenuItem>
        <MenuItem value="Chernihiv">Чернiгiв</MenuItem>
      </Select>
    </FormControl>
  );
}
