import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from '../../movies-api';
import { useState, useEffect } from 'react';
import css from './HomePage.module.css';

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        const getMovies = async () => {
            try {
                setLoading(true);
                const data = await getTrendingMovies();
                setMovies(data);
            } catch (error) {
                setError(true);
                alert('Error occured! Please try again.')
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    return (
        <div>
            {loading && <b>Loading movies. Please wait...</b>}
            {movies.length > 0 &&
                <div>
                    <h1 className={css.title}>Trending today:</h1>
                    <MovieList movies={movies} />
                </div>
            }
        </div>
    )
}