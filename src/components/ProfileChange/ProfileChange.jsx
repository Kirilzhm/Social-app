import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ProfileChange.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  surName: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!'),
});

const profileValue = {
  name: '',
  surName: '',
  telephone: '',
  email: '',
  date: '',
};

export const ProfileChange = () => {
  const nameFieldId = useId();
  const surNameFieldId = useId();
  const telephoneFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const handleSubmit = values => {
    alert(values);
  };

  return (
    <div className={css.wrapper}>
      <Formik
        className="flex flex-col"
        initialValues={profileValue}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form
        className='flex flex-col'>
          <label htmlFor={nameFieldId} className="sr-only ">
            Name or Nickname
          </label>
          <Field
            className="w-[100%] h-[42px] text-[#090202]"
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name or Nickname"
          ></Field>
          <label htmlFor={surNameFieldId} className="sr-only">
            SurName
          </label>
          <Field
            className="w-[100%] h-[42px]"
            type="text"
            name="surName"
            id={surNameFieldId}
            placeholder="Surname"
          ></Field>
          <label
            htmlFor={telephoneFieldId}
            className="text-[10px] font-normal text-[#090202]"
          >
            Telephone
          </label>
          <Field
            className="max-w-[150px] h-[15px]"
            type="text"
            name="telephone"
            id={telephoneFieldId}
            placeholder="Telephone"
          ></Field>
          <label
            htmlFor={emailFieldId}
            className="text-[10px] font-normal text-[#090202]"
          >
            Email
          </label>
          <Field
            className="max-w-[150px] h-[15px]"
            type="text"
            name="email"
            id={emailFieldId}
            placeholder="Email"
          ></Field>
          <label
            htmlFor={dateFieldId}
            className="text-[10px] font-normal text-[#090202]"
          >
            Date of birth
          </label>
          <Field
            className="max-w-[150px] h-[15px]"
            type="text"
            name="date"
            id={dateFieldId}
            placeholder="Date of birth"
          ></Field>
        </Form>
      </Formik>
    </div>
  );
};
