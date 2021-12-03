import * as gameService from "../../services/gameService";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from "../../helpers/authControl";
import Comments from "./Comments";
import AddComment from "./AddComent";
import { getAllComments } from "../../services/comentsService";

const Details = ({
    match
}) => {
    let gameId = match.params.gameId;

    let [game, setGame] = useState({});
    let [comments, setComments] = useState([]);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setGame(result);
            })
    }, [gameId])

    useEffect(() => {
        getAllComments(gameId)
            .then(allComments => {
                setComments(allComments);
            })
    }, [gameId, comments])

    const handleAddComment = () => {
        getAllComments(gameId)
            .then(allComments => {
                return setComments({...allComments});
            })
    }

    const userId = getUserData()?._id;
    const isCreator = game._ownerId === userId;



    const ownerButtons = (
        <div className="buttons">
            <Link to={`/edit/${gameId}`} className="button">Edit</Link>
            <Link to={`/delete/${gameId}`} className="button">Delete</Link>
        </div>
    );

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt="some" />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <Comments comments={comments} />

                {isCreator && ownerButtons}
            </div>

            {(getUserData() && !isCreator) && <AddComment gameId={gameId} handleAddComment={handleAddComment} />}

        </section>
    );
}

export default Details;