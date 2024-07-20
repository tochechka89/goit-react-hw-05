import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWYzMjg2MzkyZGVlZWMwM2EwYmEzZTJhZjJhNWM4NSIsIm5iZiI6MTcyMTQ3NDA2MS40ODI2OCwic3ViIjoiNjY5Yjk4NzYxYmJhZTljYzI3OGI5OTU2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.28FvPEmdZEgNBzz8OTwx0CF4tTq_cjLA2GRAsDDz5rg`;
axios.defaults.params = {
    api_key: "a5f3286392deeec03a0ba3e2af2a5c85"
};

/*const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const IMAGE_SIZE = 'w500';*/

export const getTrendingMovies = async () => {
    const response = await axios.get('trending/movie/day?language=en-US');
    return response.data.results;
}

export const getMovieById = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?language=en-US`);
    return response.data;
}

export const getMovieCredits = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits`);
    return response.data;
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews`);
    return response.data;
}

export const getMovieByQuery = async (searchQuery) => {
    const response = await axios.get(`search/movie?query=${searchQuery}&page=1`);
    return response.data.results;
}
