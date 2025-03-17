import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="flex items-center justify-between h-[50px] ml-[25px] mr-[25px] mt-[25px]">
            <Link to="settings">
                <svg className="size-[20px]">
                    <use href="/icons.svg#icon-settings"></use>
                </svg>
            </Link>
            <h3 className="font-[700] text-[16px]">Chats</h3>
            <button className="bg-transparent border-none size-[20px]">
                <svg className="size-[20px]">
                    <use href="/icons.svg#icon-search"></use>
                </svg>
            </button>
        </header>
    )
}

export default Header;