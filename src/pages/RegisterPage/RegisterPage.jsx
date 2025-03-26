import { NavLink } from 'react-router-dom';
import css from './RegisterPage.module.css';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import {
  profileStyleBtn,
  profileStyleSvg,
  unactiveSvg,
} from '../../js/settingStyle';
import { DatePicker } from 'antd';
import clsx from 'clsx';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name too Short!').max(25, 'Name too Long!'),
  surName: Yup.string()
    .min(3, 'Surname too Short!')
    .max(25, 'Surname too Long!'),
  telephone: Yup.string()
    .min(3, 'Number too Short!')
    .max(25, 'Number too Long!')
    .matches(/^\+?\d{10,14}$/, 'Please enter a valid phone number!'),
  email: Yup.string().email('Invalid email format!'),
  date: Yup.date().max(new Date(), 'Date cannot be in the future!'),
});

const profileValue = {
  name: '',
  surName: '',
  telephone: '',
  email: '',
  date: '',
};

const RegisterPage = () => {
  const loading = false;
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  };
  const nameFieldId = useId();
  const surNameFieldId = useId();
  const telephoneFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = values => {
    const isAnyFieldFilled = Object.values(values).some(value => value !== '');

    if (!isAnyFieldFilled) {
      return;
    }

    alert(JSON.stringify(values, null, 2));
    handleOnCLickChange();
  };
  return (
    <div className="pt-[15px] pb-[30px] px-[25px] bg-[url('./e3bbbcd4ff923afc29e3062617a65dd4.jpg')] bg-no-repeat bg-center">
      {loading ? (
        <p className="flex flex-col items-center">Loading...</p>
      ) : (
        <>
          <div
            className="text-[#090202] h-12.5 w-full flex justify-center items-center bg-[transparent] mx-auto cursor-pointer font-bold"
            onClick={handleIsOpen}
          >
            Register
          </div>
          {isOpen && (
            <NavLink
              to="/login"
              className="text-[#090202] h-12.5 w-full flex justify-center items-center bg-[transparent] mx-auto cursor-pointer hover:bg-[rgba(217,217,217,0.5)] border-y border-[#030104] border-opacity-50"
              onClick={handleIsOpen}
            >
              Login
            </NavLink>
          )}
          <div className={css.wrapper}>
            <Formik
              className="flex flex-col"
              initialValues={profileValue}
              validationSchema={FeedbackSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values }) => {
                useEffect(() => {
                  const isAnyFieldFilled = Object.values(values).some(
                    value => value !== ''
                  );
                  setIsButtonDisabled(!isAnyFieldFilled);
                }, [values]);

                return (
                  <Form className="flex flex-col relative">
                    <label htmlFor={nameFieldId} className="sr-only ">
                      Name or Nickname
                    </label>
                    <Field
                      className="w-[100%] h-[42px] text-[#090202] text-left"
                      type="text"
                      name="name"
                      id={nameFieldId}
                      placeholder="Name or Nickname"
                    ></Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-xs absolute left-[0%] top-[-3%]"
                    />
                    <label htmlFor={surNameFieldId} className="sr-only">
                      SurName
                    </label>
                    <Field
                      className="w-[100%] h-[42px] text-left"
                      type="text"
                      name="surName"
                      id={surNameFieldId}
                      placeholder="Surname"
                    ></Field>
                    <ErrorMessage
                      name="surName"
                      component="div"
                      className="text-red-600 text-xs absolute left-[0%] top-[15%]"
                    />
                    <div className={css.inputWrapper}>
                      <label
                        htmlFor={telephoneFieldId}
                        className="text-[10px] font-normal text-[#090202]"
                      >
                        Telephone
                      </label>
                      <Field
                        className="w-[200px] h-[15px]"
                        type="text"
                        name="telephone"
                        id={telephoneFieldId}
                        placeholder="0966658063"
                      ></Field>
                      <ErrorMessage
                        name="telephone"
                        component="div"
                        className="text-red-600 text-xs absolute left-[0%] top-[40%]"
                      />
                    </div>

                    <div className={css.inputWrapper}>
                      <label
                        htmlFor={emailFieldId}
                        className="text-[10px] font-normal text-[#090202]"
                      >
                        Email
                      </label>
                      <Field
                        className="w-[200px] h-[15px]"
                        type="text"
                        name="email"
                        id={emailFieldId}
                        autoCorrect="off"
                        placeholder="example@gmail.com"
                      ></Field>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600 text-xs absolute left-[0%] top-[56%]"
                      />
                    </div>
                    <div className={css.inputWrapper}>
                      <label
                        htmlFor={dateFieldId}
                        className="text-[10px] font-normal text-[#090202]"
                      >
                        Date of birth
                      </label>

                      <DatePicker
                        name="date"
                        id={dateFieldId}
                        format="YYYY MMMM DD"
                        placeholder="Select a date"
                        className={css.datePicker}
                        suffixIcon={null}
                        onChange={date => {
                          setFieldValue(
                            'date',
                            date ? date.format('YYYY MMMM DD') : ''
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-row justify-evenly">
                      <button
                        type="submit"
                        className={clsx(profileStyleBtn(), {
                          'fill-[#c7afaf]': isButtonDisabled,
                        })}
                        disabled={isButtonDisabled}
                      >
                        <svg className={profileStyleSvg()}>
                          <use href="./icons.svg#icon-checkmark"></use>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className={profileStyleBtn()}
                        onClick={() => handleOnCLickChange()}
                      >
                        <svg className={profileStyleSvg()}>
                          <use href="./icons.svg#icon-decline-svgrepo-com-1"></use>
                        </svg>
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
