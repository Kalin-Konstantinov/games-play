import { Redirect } from "react-router-dom";
import { deleteUserData } from "../../helpers/authControl";
import { logout } from "../../services/authServise";


const Logout = ({
    onLogout,
    history,
}) => {
    logout()
        .then(() => {
            deleteUserData();
            onLogout();
            history.push('/');
        })
   
}

export default Logout