import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import { addPost, updatePost } from 'redux/posts/posts-operations';

import ModalEl from 'components/Modal/Modal';
import NativeSelectRegion from '../SelectInput/SelectInput';

import defaultPhoto from '../../../../images/error/notFound.jpg';

import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from '../FormNewPost/FormNewPost.styled';

import BasicDatePicker from 'components/Posts/DatePicker/DatePicker';

export default function FormUpdatePost({ infoOfPost, post }) {
  const [region, setRegion] = useState(post.region);
  const [date, setDate] = useState(infoOfPost.date);
  const [photo, setPhoto] = useState(defaultPhoto.files);
  console.log('postееее', infoOfPost);
  const dispatch = useDispatch();
  const idOfPost = useSelector(state => state.posts.idOfPost);

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
    militaryDonations: infoOfPost.categories.filter(
      item => item.name === 'militaryDonations'
    )[0].number,
    civiliansDonations: infoOfPost.categories.filter(
      item => item.name === 'civiliansDonations'
    )[0].number,
    region: '',
    description: post.description,
    link: infoOfPost.link,
    date: '',
  };

  const handleSubmit = (values, action) => {
    const formData = new FormData();
    formData.append('file', photo);

    const objData = {
      //   formData: formData,
      id: infoOfPost.id,
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

    dispatch(updatePost(objData));
    action.resetForm();
  };

  return (
    <>
      <ModalEl nameOfButton={'Оновити'}>
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
              Оновити
            </button>
          </StyledForm>
        </Formik>
      </ModalEl>
    </>
  );
}
