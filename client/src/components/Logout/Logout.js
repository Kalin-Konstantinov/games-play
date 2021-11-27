import { Redirect } from "react-router-dom";
import { deleteUserData } from "../../helpers/authControl";


const Logout = ({
    onLogout,
}) => {
    deleteUserData();
    onLogout();
    return (
        <Redirect to="/" />
    );
}

export default Logout