import React from 'react';
import clsx from 'clsx';
import { profileStyleBtn, profileStyleSvg } from '../../js/settingStyle';

export const ProfileMenu = ({ isOpen }) => {
  return (
    <div>
      <ul
        className={clsx(
          'font-bold text-[32px] text-[#090202] flex flex-col w-full bg-[#D9D9D9] py-[15px] px-[10px] rounded-[15px]',
          { 'gap-[13px]': !isOpen, 'gap-[10px]': isOpen }
        )}
      >
        <li>
          <div className="flex flex-row justify-between">
            <p className="font-normal text-[10px] text-[#090202]">
              Change a photo
            </p>
            <button>
              <svg className="w-[25px] h-[25px]">
                <use href="./icons.svg#icon-img-box-svgrepo-com-1"></use>
              </svg>
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#BBBBBB] bg-opacity-50 mt-[11px]"></div>
        </li>
        <li>
          <div className="flex flex-row justify-between">
            <p className="font-normal text-[10px] text-[#090202]">
              Change a password
            </p>
            <button>
              <svg className="w-[25px] h-[25px]">
                <use href="./icons.svg#icon-password-account-security-reset-safety-svgrepo-com-1"></use>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
