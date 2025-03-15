import MoiveCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const movies = await getPopularMovies();
                setMovies(movies);
            }catch (e){
                console.log(e);
                setError("An error occurred while loading popular movies");
            }finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    const handlesearch = async (e) => {
        e.preventDefault();
        
        if (!searchQuery.trim()) return;
        setLoading(true);
        if (loading) return;

        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult);
            setError(null);
        } 
        catch(e){
            console.log(e);
            setError("An error occurred while searching for movies");
        }finally{
            setLoading(false);
        }

    }

    return (
        <div className="home">
            <form action="" onSubmit={handlesearch} className="search-form">
                <input type="text"
                placeholder="Search movies ..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && (<div className="error-message">{error}</div>)}

            {
                loading 
                ? (<div className="loading">Loading...</div>)
                : (<div className="movies-grid">
                    {movies.map(movie => 
                        (
                            <MoiveCard movie={movie} key={movie.id}/>
                        )
                    )}       

                    </div>
            )}
            <div className="movies-grid">
                {movies.map(movie => 
                    (
                        <MoiveCard movie={movie} key={movie.id}/>
                    )
                )}
            </div>
        </div>
    );
}

export default Home;