import Header from "./components/HeaderComponent";
import Home from "./components/HomePage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Register from "./components/RegisterPage";
import Edit from "./components/EditPage";
import Details from "./components/DetailsPage/Details";
import Create from "./components/CreatePage/Create";
import Catalog from "./components/CatalogPage";
import { deleteUserData, getUserData } from "./helpers/authControl";
import { useEffect, useState } from "react";

function App() {
    let [userValue, setUserValue] = useState(false);

    useEffect(() => {
        setUserValue(Boolean(getUserData(userValue)));
    }, [userValue])

    const onLogin = () => {
        setUserValue(true);
    }
   
    const onLogout = () => {
        setUserValue(false);
        deleteUserData();
        return <Redirect to="/" />;
    }

    return (

        <div id="box">
            <Router>
                <Header userValue={userValue} />
                <Route path="/" exact component={Home} />
                <Route path="/login" component={(props) => Login({ ...props, onLogin })} />
                <Route path="/register" component={(props) => Register({ ...props, onLogin })} />
                <Route path="/edit" component={Edit} />
                <Route path="/details/:gameId" component={Details} />
                <Route path="/create" component={Create} />
                <Route path="/all-games" component={Catalog} />
                <Route path="/logout" component= {()=> onLogout()} />
            </Router>
        </div>
    );
}

export default App;
