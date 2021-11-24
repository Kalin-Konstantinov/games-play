import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    return (
        <div id="box">

            <Header />

            <main id="main-content">
            </main>
            <Home />
    
        
       
      

       

            <section id="game-details">
                <h1>Game Details</h1>
                <div className="info-section">

                    <div className="game-header">
                        <img className="game-img" src="images/MineCraft.png" />
                        <h1>Bright</h1>
                        <span className="levels">MaxLevel: 4</span>
                        <p className="type">Action, Crime, Fantasy</p>
                    </div>

                    <p className="text">
                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
                        with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
                        creatures live side by side with humans. A human cop is forced
                        to work with an Orc to find a weapon everyone is prepared to kill for.
                    </p>

                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>
                        <p className="no-comment">No comments.</p>
                    </div>

                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                </div>

                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form">
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>

            </section>

            <section id="catalog-page">
                <h1>All Games</h1>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="/images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Cover Fire</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="/images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Zombie lang</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="/images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>MineCraft</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

                <h3 className="no-articles">No articles yet</h3>
            </section>
        </div>
    );
}

export default App;
