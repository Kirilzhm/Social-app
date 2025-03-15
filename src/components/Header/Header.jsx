import { useNavigate } from "react-router-dom";

const Header = ({ whatPage }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between h-[50px] ml-[25px] mr-[25px] mt-[25px]">
      {whatPage === "home" ? (
        <>
          <button className="cursor-pointer" onClick={() => navigate("/settings")}>
            <svg className="size-[20px]">
              <use href="/icons.svg#icon-settings"></use>
            </svg>
          </button>
          <h3 className="font-[700] text-[16px]">Chats</h3>
          <button className="bg-transparent border-none size-[20px] cursor-pointer">
            <svg className="size-[20px]">
              <use href="/icons.svg#icon-search"></use>
            </svg>
          </button>
        </>
      ) : whatPage === "settings" ? (
        <>
          <button className="cursor-pointer" onClick={() => navigate(-1)}> 
            <svg className="size-[20px]">
              <use href="/icons.svg#icon-close-svgrepo-com-1"></use>
            </svg>
          </button>
          <h3 className="font-[700] text-[16px]">Settings</h3>
          <button className="bg-transparent border-none size-[20px] cursor-pointer">
            <svg className="size-[20px]">
              <use href="/icons.svg#icon-add-profile-svgrepo-com-1"></use>
            </svg>
          </button>
        </>
      ) : whatPage === "chat" ? (
        <>
          <button className="cursor-pointer" onClick={() => navigate(-1)}> 
            <svg className="size-[20px]">
              <use href="/icons.svg#icon-Chevron-left"></use>
            </svg>
          </button>
          <h3 className="font-[700] text-[16px]">Jasmine Backer</h3>
          <button className="bg-transparent border-none size-[20px] cursor-pointer">
            <svg className="size-[20px]">
              <use href="/icons.svg#icon-search"></use>
            </svg>
          </button>
        </>
      ) : null}
    </header>
  );
};

export default Header;
