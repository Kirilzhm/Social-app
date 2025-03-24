import {
    profileStyleBtn,
    profileStyleSvg,
    } from '../../js/personpageStyle';
    import {
        inputStyles,
    }  from '../../js/loginpageStyles';

const ResetPass = ({setActiveComponent}) => {

    return(
        <div className="flex pt-4 pb-[10px] items-center flex-col bg-[#F6F6F6] w-[390px] h-[142px] rounded-[10px]">
            <ul className="w-95 h-20 mb-4">
                <li className='flex justify-between pb-4 border-b border-b-[#BBBBBB]'>
                    <p className='text-[10px]/[135%] text-[#090202]'>Password</p>
                    <input 
                        placeholder='**********************' 
                        type="password" 
                        className={inputStyles()}/>
                </li>
                <li className='pt-[15px] h-4 flex justify-between'>
                    <p className='text-[10px]/[135%] text-[#090202]'>Repeat password</p>
                    <input 
                        placeholder='**********************' 
                        type="password" 
                        className={inputStyles()}/>
                </li>
            </ul>
            <button className={profileStyleBtn()} onClick={() => setActiveComponent("Third")}>
                <svg className={profileStyleSvg()}>
                    <use href="/public/icons.svg#icon-Frame-6-3"></use>
                </svg>
            </button>
        </div>
    )
};

export default ResetPass;