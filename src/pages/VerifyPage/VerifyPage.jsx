import React, { useState } from 'react';
import css from './VerifyPage.module.css';
import CharacterInput from '../../components/VerifyInput/VerifyInput';
import { NavLink } from 'react-router-dom';


const VerifyPage = () => {
  const loading = false;
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  };
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
            className="text-[#090202] h-12.5 w-full flex justify-center items-center bg-[transparent] mx-auto cursor-pointer font-bold relative"
            onClick={handleIsOpen}
          >
            Register
          </div>
          {isOpen && (
            <NavLink
              to="/login"
              className="text-[#090202] h-12.5 w-full flex justify-center items-center bg-[transparent] mx-auto cursor-pointer hover:bg-[rgba(217,217,217,0.5)] border-y border-[#030104] border-opacity-50 absolute left-1/2 transform -translate-x-1/2"
              onClick={handleIsOpen}
            >
              Login
            </NavLink>
          )}
          <div className={css.wrapper}>
            <h2 className="items-center text-center pt-[15px] pb-[10px]">
              Enter the code from the email to verify your identity.
            </h2>
            <CharacterInput />
          </div>
        </>
      )}
    </div>
  );
};
export default VerifyPage;
