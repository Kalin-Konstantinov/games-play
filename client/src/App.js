import Header from "./components/HeaderComponent";
import Home from "./components/HomePage";
import { Route, useHistory } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Register from "./components/RegisterPage";
import Edit from "./components/EditPage";
import Details from "./components/DetailsPage/Details";
import Create from "./components/CreatePage/Create";
import Catalog from "./components/CatalogPage";
import { deleteUserData, getUserData } from "./helpers/authControl";
import { useEffect, useState } from "react";
import { logout } from "./services/authServise";
import { deleteGame } from "./services/gameService";

function App() {
    let [userValue, setUserValue] = useState(false);
    let history = useHistory();

    useEffect(() => {
        setUserValue(Boolean(getUserData(userValue)));
    }, [userValue]);

    const onLogin = () => {
        setUserValue(true);
    }

    const onLogout = () => {
        const user = getUserData();
        logout(user)
            .then(() => {
                setUserValue(false);
                deleteUserData();
                history.push('/');
            })
        return null;
    }

    const onDelete = ({
        match
    }) => {
        deleteGame(match.params.gameId)
            .then(res => {
                if (res.code !== 200) {
                    history.push('/');
                    throw res;
                }
            })
            .catch(err => {
                console.log(err);
                history.push('/');
            });
        return null;
    }

    return (

        <div id="box">
            <Header userValue={userValue} />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={(props) => Login({ ...props, onLogin })} />
            <Route path="/register" component={(props) => Register({ ...props, onLogin })} />
            <Route path="/edit/:gameId" component={Edit} />
            <Route path="/details/:gameId" component={Details} />
            <Route path="/delete/:gameId" component={onDelete} />
            <Route path="/create" component={Create} />
            <Route path="/all-games" component={Catalog} />
            <Route path="/logout" component={() => onLogout()} />
        </div>
    );
}

export default App;
