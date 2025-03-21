import Header from "../../components/Header-SmallPages/Header-SmallPages";
import PersonProfileMenu from "../../components/PersonProfileMenu/PersonProfileMenu";
import {
    profileStyleBtn,
    profileStyleSvg,
    } from '../../js/personpageStyle';
import { useState } from 'react';

const PersonProfile = () => {
    const loading = false;
    const [isOpen, setIsOpen] = useState(false);
    const [areMessages, setAreMessages] = useState(true);

    const handleOpenOnClick = () => {
        setIsOpen(!isOpen)
    };

    const handleOffClick = () => {
        setAreMessages(!areMessages)
    };

    return (
        <div className="relative h-screen pt-[15px] pb-[30px] px-[25px] bg-[linear-gradient(rgba(27,26,24,0.5),rgba(27,26,24,0.5)),url('./personprofile.jpg')] bg-no-repeat bg-center bg-cover">
            <Header/>
            {loading ? (
                <p className="flex flex-col items-center">Loading...</p>
            ) : (
            <div className="max-w-[390px] max-h-[284px] mx-[auto] mt-[calc(100vh-375px)]">
                <ul className="font-bold text-[32px]">
                    <li>Jasmine</li>
                    <li>Backer</li>
                </ul>
                <div className="relative">
                <ul className="max-w-[390px] h-[130px] bg-[#D9D9D9] rounded-[15px] mt-[15px]">
                    <li className="pt-[15px] pb-[10px] pl-[10px] border-b border-b-[#BBBBBB] flex flex-col gap-[10px]">
                        <p className="text-[#090202]">Telephone</p>
                        <p className="font-bold text-[12px]/[135%] text-[#090202]">+380 95 789 63 49</p>
                    </li>
                    <li className="pt-[10px] pb-[10px] pl-[10px] flex flex-col gap-[10px]">
                        <p className="text-[#090202]">Date of birth</p>
                        <p className="font-bold text-[12px]/[135%] text-[#090202]">30 June</p>
                    </li>
                </ul>
                {isOpen && <PersonProfileMenu/>}
                </div>
                <ul className="flex gap-[76px] mt-[15px]">
                    <li>
                        <button className={profileStyleBtn()} onClick={handleOffClick}>
                            {areMessages ? (
                                <svg className={profileStyleSvg()}>
                                    <use href="/public/icons.svg#icon-bell"></use>
                                </svg>
                            ) : (
                                <svg className={profileStyleSvg()}>
                                    <use href="/public/icons.svg#icon-bell1"></use>
                                </svg>
                            )}
                        </button>
                    </li>
                    <li>
                        <button className={profileStyleBtn()}>
                            <svg className={profileStyleSvg()}>
                                <use href="/public/icons.svg#icon-Frame-8-1"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className={profileStyleBtn()}>
                            <svg className={profileStyleSvg()}>
                                <use href="/public/icons.svg#icon-Frame-9-1"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className={profileStyleBtn()} onClick={handleOpenOnClick}>
                            <svg className={profileStyleSvg()}>
                                <use href="/public/icons.svg#icon-Frame-7-2"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            )}
        </div>
    )
}


export default PersonProfile
