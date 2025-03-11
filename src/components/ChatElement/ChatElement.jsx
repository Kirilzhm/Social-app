
const ChatElement = () => {
    // const isOnline = true;

    return (
        <div className="flex h-[51px] w-full bg-[#1A1B1A] items-center justify-between pl-1 pr-1">
           <div className="flex gap-5 items-center">
            <div className="w-[40px] h-[40px] relative">
                <img src="/e3bbbcd4ff923afc29e3062617a65dd4.jpg" alt="User logo" className="rounded-full w-[40px] h-[40px] overflow-hidden"/>
                
                    <div className="bg-[#410DFF] rounded-full w-[10px] h-[10px] absolute bottom-0 right-0"></div>
            </div>
                <div>
                    <h3 className="text-[12px]">Jasmine Backer</h3>
                    <p className="text-[#BBBBBB]">I’m going to see San Francisko...</p>
                </div>
           </div>
                <p className="text-[#BBBBBB] mr-0">now</p>
        </div>
    )
};

export default ChatElement;