import { editGame, getOne } from "../../services/gameService";
import { useEffect, useState } from 'react'



const Edit = ({
    match,
    history,
}) => {
    let [game, setGame] = useState({})

    const gameId = match.params.gameId

    useEffect(() => {
        getOne(gameId)
            .then(game => {
                setGame(game)
            })
    }, [match.params.gameId]);

    const onSubmit = (e) => {
        e.preventDefault();
        const gameData = new FormData(e.currentTarget);
        const title = gameData.get('title');
        const category = gameData.get('category');
        const maxLevel = gameData.get('maxLevel');
        const imageUrl = gameData.get('imageUrl');
        const summary = gameData.get('summary');
        const isNotValid = title === '' || category === '' || imageUrl === '' || summary === '' || maxLevel === '';
        if (isNotValid) {
            return alert('Fields cannot be empty')
        }
        editGame({ title, category, maxLevel, imageUrl, summary }, gameId)
            .then(() => history.push('/'))
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}

export default Edit;