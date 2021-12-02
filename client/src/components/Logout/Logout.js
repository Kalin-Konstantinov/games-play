import { deleteUserData, getUserData } from "../../helpers/authControl";
import { logout } from "../../services/authServise";
import { Redirect } from "react-router-dom"


const Logout = ({
    onLogout,
}) => {
    const user = getUserData();
    logout(user)
        .then(() => {
            deleteUserData();
            onLogout();
        })
    return <Redirect to='/' />;
}

export default Logout