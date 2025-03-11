import {useSelector} from 'react-redux';
import ChatListElement from "../ChatElement/ChatElement.jsx"

const ChatList = () => {
    const isLoading = useSelector();
    const chatsData = useSelector();

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                Array.isArray && chatsData.length > 0 ? (
                    <ul>
                        {chatsData.map((item) => (
                            <li key={item._id}>
                                <ChatListElement item={item}/>
                            </li>
                        ))}
                    </ul>
                ) : null
            )}
        </div>
    )
}

export default ChatList