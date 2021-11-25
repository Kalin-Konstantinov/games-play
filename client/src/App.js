import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Create from "./components/Create";
import Catalog from "./components/catalog/Catalog";

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
