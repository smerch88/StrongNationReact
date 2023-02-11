import React, { useState } from 'react';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ModalEl from 'components/Modal/Modal';
import NativeSelectRegion from '../SelectInput/SelectInput';

import { DatePicker } from '@mui/x-date-pickers-pro/DatePicker';

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from './FormNewPost.styled';

// import DatePicker from 'components/Posts/DatePicker/DatePicker';

export default function FormNewPost() {
  const [region, setRegion] = useState('');
  const [date, setDate] = useState(new Date());
  console.log('date', date);

  const handleChangeRegion = event => {
    setRegion(event.target.value);
  };

  const handleChangeDate = newValue => {
    setDate(newValue);
  };

  const schema = Yup.object().shape({
    militaryDonations: Yup.number('must be only number').required().integer(),
    civiliansDonations: Yup.number('must be only number').required().integer(),
    description: Yup.string().max(150, 'Too Long!'),
    link: Yup.string().required(),
    date: Yup.date().default(() => new Date()),
  });

  const initialValues = {
    militaryDonations: '',
    civiliansDonations: '',
    region: '',
    description: '',
    link: '',
    date: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <>
      <ModalEl>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <StyledForm>
            <StyledLabel>
              <StyledSpan>На потреби військових</StyledSpan>
              <StyledInput type="text" name="militaryDonations" />
              <ErrorMessage name="militaryDonations">
                {msg => <div>{msg}</div>}
              </ErrorMessage>
            </StyledLabel>
            <StyledLabel>
              <StyledSpan>На потреби громадян</StyledSpan>
              <StyledInput type="text" name="civiliansDonations" />
              <ErrorMessage name="civiliansDonations">
                {msg => <div>{msg}</div>}
              </ErrorMessage>
            </StyledLabel>
            <label>
              <span>Область</span>
              <NativeSelectRegion
                handleChangeRegion={handleChangeRegion}
                region={region}
              />
            </label>
            <label>
              <span>Короткий опис</span>
              <Field as="textarea" name="description" />
              <ErrorMessage name="description" />
            </label>
            <label>
              <span>Посилання на джерело</span>
              <Field type="url" name="link" />
              <ErrorMessage name="link" />
            </label>
            <label>
              <span>Дата публікації</span>
              <DatePicker />
              {/* <DatePicker handleChangeDate={handleChangeDate} date={date} /> */}
              <ErrorMessage name="date" />
            </label>
            <button type="submit">Готово</button>
          </StyledForm>
        </Formik>
      </ModalEl>
    </>
  );
}

// import React, { useState } from 'react';

// const CharacterCounter = () => {
//   const [inputValue, setInputValue] = useState('');

//   return (
//     <div>
//       <label htmlFor="text-input">Enter text:</label>
//       <input type="text" id="text-input" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
//       <span id="character-count">{inputValue.length}</span> characters
//     </div>
//   );
// };

// export default CharacterCounter;
