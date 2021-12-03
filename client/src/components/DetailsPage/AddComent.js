import { useHistory } from 'react-router-dom'
import { getUserData } from '../../helpers/authControl';
import { addComment } from "../../services/comentsService";


const AddComment = ({
    gameId,
    handleAddComment,
}) => {

    const history = useHistory();

    const onAddComment = (e) => {
        e.preventDefault();
        const commentData = new FormData(e.currentTarget);
        const comment = commentData.get('comment');
        const data = { gameId, comment };
        const token = getUserData()?.accessToken;
        if(comment == '') {
            return alert('Comment cannot be empty string');
        }
        addComment(data, token)
            .then(() => {
                handleAddComment();
                history.push(`/details/${gameId}`)
                e.target.reset();
            })

    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onAddComment}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}

export default AddComment;