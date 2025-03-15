const API_KEY = "d166ac3efe8b36e00be5ae5ae5d77c30";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => 
{
    //fetch is used to send a network request to the API
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => 
{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}