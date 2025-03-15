import ChatList from "../../components/ChatList/ChatList";
// import Header from "../../components/Header-HomePage/Header-HomePage";
import Header from "../../components/Header/Header";

const HomePage = () => {

    return (
        <section>
            <Header whatPage={'home'}/>
            <ChatList/>
        </section>
    );
};

export default HomePage;