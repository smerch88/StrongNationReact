import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Formik, ErrorMessage, Field } from 'formik';
import { Box, Button, TextField } from '@mui/material';

import ModalEl from 'components/Modal/Modal';
import { addPost } from 'redux/posts/posts-operations';
import NativeSelectRegion from '../SelectInput/SelectInput';
import defaultPhoto from '../../../../images/error/notFound.jpg';
import BasicDatePicker from 'components/Posts/DatePicker/DatePicker';

import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from './FormNewPost.styled';

export default function FormNewPost() {
  // =======================Symbols counter
  const CharacterCountInput = ({ field, form, maxChars, ...props }) => {
    const remainingChars = maxChars - field.value.length;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <input
          {...field}
          {...props}
          style={{
            width: '100%',
            paddingBottom: '5px',
            border: 'none',
            outline: 'transparent',
            borderBottom: '1px solid #000000',
          }}
          rows="1"
          type="textarea"
          name="description"
        />
        <p
          style={{
            margin: '0',
            fontSize: '12px',
            minWidth: '52px',
            marginLeft: '10px',
          }}
        >
          {remainingChars} / {maxChars}
        </p>
      </div>
    );
  };

  // ==========================

  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState('');
  const [date, setDate] = useState(new Date());
  const [photo, setPhoto] = useState(defaultPhoto.files);
  const dispatch = useDispatch();

  const handleChangeRegion = event => {
    setRegion(event.target.value);
  };

  const handleChangeDate = newValue => {
    setDate(newValue);
  };

  const handleGetPhoto = e => {
    setPhoto(e.target.files[0]);
  };

  const schema = Yup.object().shape({
    militaryDonations: Yup.number()
      .typeError('must be any number!')
      .required()
      .integer(),
    civiliansDonations: Yup.number()
      .typeError('must be any number!')
      .required()
      .integer(),

    description: Yup.string().max(150, 'Too Long!').required(),
    link: Yup.string().typeError().required(),
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
    const formData = new FormData();
    formData.append('file', photo);

    const objData = {
      formData: formData,
      region: region,
      description: values.description,
      link: values.link,
      date: date.toISOString(),
      categories: [
        {
          name: 'militaryDonations',
          number: values.militaryDonations,
          units: null,
        },
        {
          name: 'civiliansDonations',
          number: values.civiliansDonations,
          units: null,
        },
      ],
    };

    dispatch(addPost(objData));
    setOpen(false);
    resetForm();
  };

  return (
    <>
      <ModalEl
        nameOfButton={'Створити новий пост'}
        open={open}
        setOpen={setOpen}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <StyledForm>
            <StyledLabel>
              <StyledSpan>На потреби військових</StyledSpan>
              <StyledInput type="text" name="militaryDonations" />
              <StyledError>
                <ErrorMessage name="militaryDonations" />
              </StyledError>
            </StyledLabel>
            <StyledLabel>
              <StyledSpan>На потреби громадян</StyledSpan>
              <StyledInput type="text" name="civiliansDonations" />
              <StyledError>
                <ErrorMessage name="civiliansDonations" />
              </StyledError>
            </StyledLabel>
            <label>
              <span>Область</span>
              <NativeSelectRegion
                handleChangeRegion={handleChangeRegion}
                region={region}
              />
              <StyledError>
                <ErrorMessage name="region" />
              </StyledError>
            </label>
            <StyledLabel style={{ marginTop: '14px' }}>
              <StyledSpan>Короткий опис</StyledSpan>
              <Field
                // ===============Counter

                component={CharacterCountInput}
                maxChars={150}
                style={{
                  paddingBottom: '5px',
                  border: 'none',
                  outline: 'transparent',
                  borderBottom: '1px solid #000000',
                }}
                rows="1"
                as="textarea"
                name="description"
              />
              <StyledError>
                <ErrorMessage name="description" />
              </StyledError>
            </StyledLabel>
            <StyledLabel>
              <span>Посилання на джерело</span>
              <StyledInput type="url" name="link" />
              <StyledError>
                <ErrorMessage name="link" />
              </StyledError>
            </StyledLabel>
            <label>
              <span>Дата публікації</span>
              <BasicDatePicker
                handleChangeDate={handleChangeDate}
                date={date}
              />
            </label>
            <label
              style={{
                border: '1px dashed black',
                borderRadius: '10px',
                textAlign: 'center',
                height: '100px',
                marginTop: '17px',
              }}
            >
              {photo?.name ? (
                <Box
                  component="p"
                  sx={{
                    marginTop: '38px',
                  }}
                >
                  Фото завантажено
                </Box>
              ) : (
                <Box
                  component="p"
                  sx={{
                    marginTop: '38px',
                  }}
                >
                  Завантажте фото
                </Box>
              )}
              <TextField
                type="file"
                name="photo"
                onChange={handleGetPhoto}
                sx={{
                  opacity: 0,
                }}
              />
            </label>
            <Button sx={{ marginTop: '20px' }} type="submit">
              Готово
            </Button>
          </StyledForm>
        </Formik>
      </ModalEl>
    </>
  );
}
