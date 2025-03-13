import { Link } from "react-router-dom"

import Header from "../../components/Header-SmallPages/Header-SmallPages";

const AboutUs = () => {

    const text = 'About Us';
    const textStyle = "text-[12px]/[135%]";


    return (
       <div>
            <Header name={text}/>
            <div className="mt-10 mr-[25px] ml-[25px]">
                <p className={`${textStyle}`}>Welcome to <span className="text-[12px]/[135%] font-bold ">FriendsMe</span> – the messaging app that brings people closer. We created FriendsMe to make communication fast, secure, and enjoyable, whether you're chatting one-on-one or connecting with a group of friends.</p>
                <div className="mt-5">
                    <h3 className={`${textStyle} font-bold`}>Why FriendsMe?</h3>
                </div>
                <ul className="mb-5 list-disc mt-[10px] ml-[16px]">
                    <li className={`${textStyle}`} >Fast & Lightweight – Instant messaging with minimal data usage.</li>
                    <li className={`${textStyle}`}>Secure & Private – End-to-end encryption ensures your conversations stay safe.</li>
                    <li className={`${textStyle}`}>User-Friendly – A clean and intuitive interface for a seamless experience.</li>
                    <li className={`${textStyle}`}>Feature-Packed – Voice messages, media sharing, group chats, and more!</li>
                </ul>
                <div className="mb-[70px]">
                <p className={`${textStyle}`}>At <span className={`${textStyle} font-bold`}>FriendsMe</span>, we believe that staying connected should be simple and fun. Join us and experience effortless communication today!</p>
                </div>
                <div className="w-fit mr-auto ml-auto">
                    <Link to="/">
                        <h2 className="text-[32px] font-bold underline">Find friends now</h2>
                    </Link>
                </div>
            </div>
       </div>
    )
};

export default AboutUs;