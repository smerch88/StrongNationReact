import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import { addPost } from 'redux/posts/posts-operations';
import { getPhotoForPost } from 'components/services/api-posts';

import ModalEl from 'components/Modal/Modal';
import NativeSelectRegion from '../SelectInput/SelectInput';

import defaultPhoto from '../../../../images/error/notFound.jpg';

import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from './FormNewPost.styled';

import BasicDatePicker from 'components/Posts/DatePicker/DatePicker';

export default function FormNewPost() {
  const [region, setRegion] = useState('');
  const [date, setDate] = useState(new Date());

  const [photo, setPhoto] = useState(defaultPhoto.files);
  console.log('photo', photo);

  const dispatch = useDispatch();
  const idOfPost = useSelector(state => state.posts.idOfPost);
  console.log(idOfPost);
  const handleChangeRegion = event => {
    setRegion(event.target.value);
  };

  const handleChangeDate = newValue => {
    setDate(newValue);
  };

  const handleGetPhoto = e => {
    console.log(e.target.files[0]);
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
      date: date,
      categories: [
        {
          name: 'militaryDonations',
          number: values.militaryDonations,
          units: null,
        },
        {
          name: 'civiliansDonations',
          number: values.civiliansDonations,
          units: 'kg',
        },
      ],
    };

    dispatch(addPost(objData));
    getPhotoForPost(66);
    resetForm();
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
            <label>
              <Field type="file" name="photo" onChange={handleGetPhoto} />
            </label>
            <button style={{ marginTop: '20px' }} type="submit">
              Готово
            </button>
          </StyledForm>
        </Formik>
      </ModalEl>
    </>
  );
}
