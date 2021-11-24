import CardGame from "./CardGame";
import * as gameService from "../services/gameService";

import { useState, useEffect } from 'react';

const Catalog = () => {
    let [games, setGames] = useState([])
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(game => <CardGame game={game} key={game._id} />)
                : <h3 className="no-articles">No games yet</h3>
            }
        </section>
    );
}

export default Catalog;