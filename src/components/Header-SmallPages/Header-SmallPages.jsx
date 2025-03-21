import { useNavigate } from "react-router-dom";

const Header = ({name}) => {

    const navigate = useNavigate();

    return (
        <header className="flex relative items-center justify-center h-[50px] mr-[25px]">
            <button className="cursor-pointer absolute left-0" onClick={() => navigate("/settings")}>
                <svg className="size-[20px]">
                    <use href="/public/icons.svg#icon-Chevron-left"></use>
                </svg>
          </button>
            <h3 className="text-[16px] font-bold">{name}</h3>
        </header>
    )
};

export default Header;

