import { NavLink, useNavigate } from 'react-router-dom';
// import {useSelector} from 'react-redux';
import { settingStyleBtn, settingStyleList } from '../../js/settingStyle';

const SettingsPage = () => {
  // const loading = useSelector();
  const navigate = useNavigate();
  const loading = false;
  return (
    <div className="pt-[15px] pb-[30px] mx-[25px]">
      {loading ? (
        <p className='flex flex-col items-center'>Loading...</p>
      ) : (
        <>
          <div className="h-12.5 w-full flex justify-between items-center bg-[#1A1B1A] mx-auto">
            <button className={settingStyleList()} onClick={()=>navigate(-1)}>
              <svg className={settingStyleBtn()}>
                <use href="./icons.svg#icon-close-svgrepo-com-1"></use>
              </svg>
            </button>
            <h2 className="text-[#FAFAFA] font-bold text-base">Settings</h2>
            <NavLink className={settingStyleList()} to="/">
              <svg className={settingStyleBtn()}>
                <use href="./icons.svg#icon-add-profile"></use>
              </svg>
            </NavLink>
          </div>
          <div className="mt-10">
            <ul className="flex pt-[30px] pb-[30px] text-center font-normal text-sm text-[#fafafa] gap-[105px] flex-col">
              <li>
                <NavLink className={settingStyleList()} to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink className={settingStyleList()} to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <button className={settingStyleList()} type="button">
                  Theme
                </button>
              </li>
              <li>
                <button className={settingStyleList()} type="button">
                  Language
                </button>
              </li>
              <li>
                <NavLink className={settingStyleList()} to="#">
                  Support
                </NavLink>
              </li>
              <li>
                <NavLink className={settingStyleList()} to="/contacts">
                  Contacts
                </NavLink>
              </li>
              <li>
                <button className={settingStyleList()} type="button">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsPage;
