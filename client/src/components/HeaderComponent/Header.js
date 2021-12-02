import { Link } from 'react-router-dom';

const Header = ({
    userValue
}) => {
    
    const loggedUser = (
        <div id="user">
            <Link to="/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );
    const guest = (
        <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );

    return (
        <header >
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/all-games">All games</Link>
                {userValue ? loggedUser : guest}
            </nav>
        </header>
    );
}

export default Header;