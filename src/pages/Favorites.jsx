import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite(){

    const {favorites} = useMovieContext();
    if(favorites)
    {
        return (
            <div className="favorites">
                <h2>Favorite Movies</h2>
                <div className="movies-grid">
                {
                    favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet.</h2>
            <p>Start adding movies, you will see them here.</p>
        </div>
    );
}

export default Favorite;