import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from "../../movies-api"
import Error from '../Error/Error';
import css from './MovieCast.module.css'

export default function MovieCast() {

    const { movieId } = useParams();
    const [movieCredits, setMovieCredits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovieCreditsById = async () => {
            try {
                setLoading(true);
                const data = await getMovieCredits(movieId);
                setMovieCredits(data.cast);
            } catch (error) {
                setError(true);
                setMovieCredits([]);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieCreditsById();
    }, [movieId])

    return (
        <div>
            {loading && <p>Cast list is loading. Please wait...</p>}

            {error && <Error />}

            <ul className={css.list}>
                {movieCredits.map(({ id, name, profile_path, character }) => {
                    return <li key={id} className={css.listItem}>
                        <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
                        <p className={css.text}>{name}</p>
                        <p className={css.text}>Character: {character}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}