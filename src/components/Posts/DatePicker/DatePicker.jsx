// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

// export default function DatePicker({ handleChangeDate, date }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ border: 'none' }}>
//       <Stack spacing={3}>
//         <MobileDatePicker
//           inputFormat="MM/DD/YYYY"
//           value={date}
//           onChange={handleChangeDate}
//           renderInput={params => {
//             console.log('params', params);
//             return (
//               <TextField
//                 {...params}
//                 sx={{
//                   margin: '0',
//                   padding: '0',
//                   border: 'none',
//                   borderBottom: '1px solid black',
//                   outline: 'transparent',
//                 }}
//               />
//             );
//           }}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }
