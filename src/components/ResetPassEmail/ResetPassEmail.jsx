import {
    profileStyleBtn,
    profileStyleSvg,
    } from '../../js/personpageStyle';
    import {
        inputStyles,
    }  from '../../js/loginpageStyles';

const ResetPassEmail = ({setActiveComponent}) => {

    return (
        <div className="flex pt-[15px] pb-[10px] px-1 items-center flex-col bg-[#F6F6F6] w-[390px] h-[141px] rounded-[10px]">
            <h3 className='font-bold text-[15px] text-[#000000] h-4'>Enter your email to reset your password.</h3>
            <div className='flex justify-between py-[15px] mb-[15px] w-[380px] border-b border-b-[#BBBBBB]'>
                <p className='text-[10px]/[135%] text-[#090202]'>Email</p>
                <input 
                    placeholder='exapmle@email.com' 
                    type="email" 
                    className={inputStyles()}/>
            </div>
            <button className={profileStyleBtn()} onClick={() => setActiveComponent("Third")}>
                <svg className={profileStyleSvg()}>
                    <use href="/public/icons.svg#icon-Frame-6-3"></use>
                </svg>
            </button>
        </div>
    )
};

export default ResetPassEmail;