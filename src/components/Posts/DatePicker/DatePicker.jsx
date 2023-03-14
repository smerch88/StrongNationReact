import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const DateTextField = styled(TextField)(theme => ({
  color: '#E0E0E0',
  width: '100%',
  borderBottom: '1px solid black',
  margin: '0',

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      width: '100%',
      color: '#E0E0E0',
      borderRadius: 0,
      border: 0,
      borderBottom: '1px solid #E0E0E0',
    },

    '& .MuiInputBase-input': {
      width: '100%',
      padding: '0',
    },
    '&:hover fieldset': {
      borderColor: '#000000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000000',
    },
  },
}));

export default function BasicDatePicker({ handleChangeDate, date }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        required
        inputFormat="DD.MM.YY"
        value={date}
        onChange={newValue => {
          handleChangeDate(newValue);
        }}
        renderInput={params => <DateTextField {...params} />}
      />
    </LocalizationProvider>
  );
}
