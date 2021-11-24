import CardGame from "./CardGame";

import { useState, useEffect } from 'react';

const Catalog = () => {
    let [games, setGames] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
                .then(res => res.json())
                .then(result => {
                    setGames(result)
                })
        }, 1000)
    }, []);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(game => {
                console.log(game);
                return games.length > 0 ? <CardGame game={game} /> : <h3 className="no-articles">No articles yet</h3>;
            })}
        </section>
    );
}

export default Catalog;