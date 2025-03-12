import { NavLink } from 'react-router-dom';
import { settingStyleBtn, settingStyleList } from '../../js/settingStyle';

const SettingsPage = () => {
  return (
    <div className="pt-[15px] pb-[30px]">
      <div className="h-12.5 max-w-97.5 flex justify-between items-center bg-[#1A1B1A] mx-auto">
        <button type="button">
          <svg className={settingStyleBtn()}>
            <use href="./public/icons.svg#icon-close-svgrepo-com-1"></use>
          </svg>
        </button>
        <h2 className="text-[#FAFAFA] font-bold text-base">Settings</h2>
        <svg className={settingStyleBtn()}>
          <use href="./public/icons.svg#icon-add-profile-svgrepo-com-1"></use>
        </svg>
      </div>
      <div>
        <ul className="pt-[30px] pb-[30px] px-[10px] text-center font-normal text-sm text-[#fafafa]">
          <li>
            <NavLink className={settingStyleList()} to="/profile">
              Profile
            </NavLink>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsPage;
