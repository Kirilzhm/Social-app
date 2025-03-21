import { btnStyles, elementStyles, firstElementStyle } from "../../js/personpageStyle";

const PersonProfileMenu = () => {
    return (
        <ul className="absolute top-0 left-0 w-full h-[130px] bg-[#D9D9D9] rounded-[15px]  z-20">
            <li className={firstElementStyle()}>
                <button className={btnStyles()}>
                    Clear chat
                    <svg className="size-6 mr-[15px]">
                        <use href="/public/icons.svg#icon-broom-svgrepo-com-1"></use>
                    </svg>
                </button>
            </li>
            <li className={elementStyles()}>
                <button className={btnStyles()}>
                    Delete contact
                    <svg className="size-6 mr-[15px]">
                        <use href="/public/icons.svg#icon-delete-alt-svgrepo-com-1"></use>
                    </svg>
                </button>
            </li>
        </ul>
    );
};

export default PersonProfileMenu;
