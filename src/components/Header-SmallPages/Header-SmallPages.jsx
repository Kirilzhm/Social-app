import { Link } from "react-router-dom";

const Header = ({name}) => {

    return (
        <header className="flex relative items-center justify-center h-[50px] ml-[25px] mr-[25px]">
            <Link to="settings" className="absolute left-0">
                <svg className="size-[20px]">
                    <use href="/public/icons.svg#icon-Chevron-left"></use>
                </svg>
            </Link>
            <h3 className="text-[16px] font-bold">{name}</h3>
        </header>
    )
};

export default Header;