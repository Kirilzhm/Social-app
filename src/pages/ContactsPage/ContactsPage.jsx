import Header from "../../components/Header-SmallPages/Header-SmallPages";

const Contacts = () => {

    const text = 'Contacts';
    const textStyle = "text-[12px]/[135%]";
    const textBiggerStyle = "text-[14px]/[135%] font-bold mt-[10px] mb-5";


    return (
       <div>
            <Header name={text}/>
            <div className="flex justify-center">
            <div className="mt-10 mr-[25px] ml-[25px]">
               <ul className="flex flex-col gap-5">
                    <li className="flex flex-col gap-[10px]">
                        <h3 className={`${textBiggerStyle}`}>For support, please contact:</h3>
                        <p className={`${textStyle}`}>support@friendsme.com.</p>
                    </li>
                    <li className="flex flex-col gap-[10px]">
                        <h3 className={`${textBiggerStyle}`}>For business partnerships and collaborations:</h3>
                        <p className={`${textStyle}`}>business@friendsme.com</p>
                    </li>
                    <li className="flex flex-col gap-[10px]">
                        <h3 className={`${textBiggerStyle}`}>Feedback & Suggestions</h3>
                        <p className={`${textStyle}`}>Your opinion matters! Share your thoughts and help us improve FriendsMe. Send us your feedback at:</p>
                        <p className={`${textStyle}`}>feedback@friendsme.com</p>
                    </li>
                    <li className="flex flex-col gap-[10px]">
                        <h3 className={`${textBiggerStyle}`}>Follow Us</h3>
                        <p className={`${textStyle}`}>Stay updated with the latest news and updates!</p>
                        <ul className="list-disc ml-[14px]">
                            <li>Social X: <span className="underline">@FriendsMeApp</span></li>
                            <li>Instagram: <span className="underline">@FriendsMe</span></li>
                            <li>Facebook: <span className="underline">FriendsMeOfficial</span></li>
                            <li>GitHub: <a href="https://github.com/Kirilzhm/Social-app" target="_blank" rel="noopener noreferrer" className="underline">linkToGitHub</a></li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-[10px]">
                        <h3 className={`${textBiggerStyle}`}>Our Office</h3>
                        <p className={`${textStyle} font-bold underline`}>FriendsMe</p>
                        <p className={`${textStyle}`}>15 Khreshchatyk Street</p>
                        <p className={`${textStyle}`}>Kyiv, Ukraine</p>
                    </li>
                    <li><p className="textStyle">We’re always happy to connect. Drop us a message anytime!</p></li>
               </ul>
            </div>
            </div>
       </div>
    )
};

export default Contacts;