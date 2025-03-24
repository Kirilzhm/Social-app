import NormalLoginMenu from '../../components/NormalLoginMenu/NormalLoginMenu.jsx';
import ResetPassEmail from '../../components/ResetPassEmail/ResetPassEmail.jsx';
import ResetPass from '../../components/ResetPass/ResetPass.jsx';
import { useState } from 'react';

const LoginPage = () => {
    const loading = false;
    const [activeComponent, setActiveComponent] = useState("First");
    
    return (
        <div className="flex relative h-screen pt-[15px] pb-[30px] px-[25px] bg-[url('./e3bbbcd4ff923afc29e3062617a65dd4.jpg')] bg-no-repeat bg-center bg-cover">
            {loading ? (
                <p className="flex flex-col items-center">Loading...</p>
            ) : (
                <div className="max-w-[390px] max-h-[161px] mx-[auto] mt-auto">
                    {activeComponent === "First" && <NormalLoginMenu setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Second" && <ResetPassEmail setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Third" && <ResetPass />}
                </div>
            )}
        </div>
    );
};

export default LoginPage;