import Header from "./components/HeaderComponent";
import Home from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Register from "./components/RegisterPage";
import Edit from "./components/EditPage";
import Details from "./components/DetailsPage/Details";
import Create from "./components/CreatePage/Create";
import Catalog from "./components/CatalogPage";

function App() {
    return (
        <div id="box">
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/edit" component={Edit} />
                <Route path="/details/:gameId" component={Details} />
                <Route path="/create" component={Create} />
                <Route path="/all-games" component={Catalog} />
            </Router>
        </div>
    );
}

export default App;
