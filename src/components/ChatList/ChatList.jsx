// import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import ChatElement from "../ChatElement/ChatElement";

const ChatList = () => {
    // const loading = useSelector();
    const loading = false;

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className='mt-10 mr-6 ml-6 mb-5'>
                    <li>
                        <Link to="/chat">
                            <ChatElement/>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default ChatList;
