import { deleteUserData, getUserData } from "../../helpers/authControl";
import { logout } from "../../services/authServise";
import { Redirect} from "react-router-dom"


const Logout = (props) => {
    const user = getUserData();
    console.log(props);
    logout(user)
        .then(() => {
            deleteUserData();
            props.onLogout();
            // props.history.push('/');
        })
    return <Redirect to='/' />;
}

export default Logout