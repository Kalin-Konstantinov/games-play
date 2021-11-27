import { createGame } from "../../services/gameService";


const Create = ({
    history,
}) => {
    const onCreate = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const title = form.get('title');
        const category = form.get('category');
        const maxLevel = form.get('maxLevel');
        const imageUrl = form.get('imageUrl');
        const summary = form.get('summary');
        const isDataNotValid = !title || !category || !maxLevel || !imageUrl || !summary;
        if (isDataNotValid) {
            return alert('Please fill all fields.')
        }

        const game = {
            title,
            category,
            maxLevel,
            imageUrl,
            summary,
        }

        createGame(game)
            .then(() => history.push('/'))
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onCreate}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );

}

export default Create;