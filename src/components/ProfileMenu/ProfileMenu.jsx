import React from 'react';
import clsx from 'clsx';
import { profileStyleBtn, profileStyleSvg } from '../../js/settingStyle';

export const ProfileMenu = ({ isOpenMore }) => {
  return (
    <div>
      <ul
        className={clsx(
          'font-bold text-[32px] text-[#090202] flex flex-col w-full bg-[#D9D9D9] rounded-[15px] overflow-hidden',
          { 'gap-[13px]': !isOpenMore, 'gap-[0px]': isOpenMore }
        )}
      >
        <li>
          <div className="flex flex-row justify-between hover:bg-[#fff5f5] cursor-pointer pt-[15px] px-[10px] pb-[11px]">
            <p className="font-normal text-[10px] text-[#090202]">
              Change a photo
            </p>
            <button>
              <svg className="w-[25px] h-[25px]">
                <use href="./icons.svg#icon-img-box-svgrepo-com-1"></use>
              </svg>
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#BBBBBB] bg-opacity-50"></div>
        </li>
        <li>
          <div className="flex flex-row justify-between hover:bg-[#fff5f5] cursor-pointer pb-[15px] px-[10px] pt-[10px]">
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
