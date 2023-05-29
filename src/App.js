import { useEffect } from "react";
import { useSelector } from "react-redux";

import UserInput from "./components/UserInput";
import UserDetail from "./components/UserDetails";

const App = () => {
    const showUserDetails = useSelector(
        (state) => state.common.showUserDetails
    );
    console.log(showUserDetails);

    return (
        <>
            {!showUserDetails && <UserInput />}
            {showUserDetails && <UserDetail />}
        </>
    );
};

export default App;
