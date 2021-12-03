
const Comments = ({
    comments,
}) => {
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.length > 0
                    ? comments.map(x => <li className="comment" key={x._id}><p >Content: {x.comment}</p></li>)
                    : <p className="no-comment">No comments.</p>
                }
            </ul>
        </div>
    );
}

export default Comments;