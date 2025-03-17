import { useNavigate } from 'react-router-dom';
// import {useSelector} from 'react-redux';
import {
  backStyleBtn,
  profileStyleBtn,
  profileStyleSvg,
} from '../../js/settingStyle';
import { useState } from 'react';
import clsx from 'clsx';
import { ProfileMenu } from '../../components/ProfileMenu/ProfileMenu';

const ProfilePage = () => {
  // const loading = useSelector();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnCLick = () => {
    if (isOpen === false) {
      return setIsOpen(true);
    }
    if (isOpen === true) {
      return setIsOpen(false);
    }
  };

  const loading = false;
  return (
    <div className="pt-[15px] pb-[30px] px-[25px] bg-[url('./profileImg.jpg')] bg-no-repeat bg-center">
      {loading ? (
        <p className="flex flex-col items-center">Loading...</p>
      ) : (
        <>
          <div className="h-12.5 w-full flex justify-between items-center bg-[transparent] mx-auto">
            <button onClick={() => navigate(-1)}>
              <svg className={backStyleBtn()}>
                <use href="./icons.svg#icon-chevron-left"></use>
              </svg>
            </button>
            <h2 className="text-[#FAFAFA] font-bold text-base flex-1 text-center pr-[25px]">
              Settings
            </h2>
          </div>
          <div className="max-w-[390px] h-[280px] py-[10px] px-[5px] rounded-xl bg-[rgba(217,217,217,0.5)] mx-[auto] mt-[calc(100vh-375px)]">
            <div
              className={clsx('flex', {
                'flex-row gap-[10px]': isOpen,
                'flex-col': !isOpen,
              })}
            >
              <ul className="font-bold text-[32px] text-[#090202]">
                <li>Frank</li>
                <li>Gilbart</li>
              </ul>
              <ul
                className={clsx(
                  'font-bold text-[32px] text-[#090202] flex flex-col w-full',
                  { 'gap-[13px]': !isOpen, 'gap-[5px]': isOpen }
                )}
              >
                <li>
                  <div className="flex flex-row justify-between">
                    <p className="font-normal text-[10px] text-[#090202]">
                      Telephone
                    </p>
                    <p className="font-bold text-xs text-[#090202]">
                      +380 95 789 63 49
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-[#030104] bg-opacity-50 mt-[13px]"></div>
                </li>
                <li>
                  <div className="flex flex-row justify-between">
                    <p className="font-normal text-[10px] text-[#090202]">
                      Email
                    </p>
                    <p className="font-bold text-xs text-[#090202]">
                      exapmle@email.com{' '}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-[#030104] bg-opacity-50 mt-[13px]"></div>
                </li>
                <li>
                  <div className="flex flex-row justify-between">
                    <p className="font-normal text-[10px] text-[#090202]">
                      Date of birth
                    </p>
                    <p className="font-bold text-xs text-[#090202]">30 June </p>
                  </div>
                </li>
              </ul>
            </div>
            {isOpen && <ProfileMenu isOpen={isOpen} />}
            <div className="flex flex-row justify-between mt-[15px]">
              <button className={profileStyleBtn()}>
                <svg className={profileStyleSvg()}>
                  <use href="./icons.svg#icon-Frame-6-2"></use>
                </svg>
              </button>
              <button className={profileStyleBtn()}>
                <svg className={profileStyleSvg()}>
                  <use href="./icons.svg#icon-Frame-8-1"></use>
                </svg>
              </button>
              <button className={profileStyleBtn()}>
                <svg className={profileStyleSvg()}>
                  <use href="./icons.svg#icon-Frame-9-1"></use>
                </svg>
              </button>
              <button
                className={profileStyleBtn()}
                onClick={() => handleOnCLick()}
              >
                <svg className={profileStyleSvg()}>
                  <use href="./icons.svg#icon-Frame-7-2"></use>
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
