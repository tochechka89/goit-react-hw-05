import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../movies-api';
import Error from '../Error/Error';
import css from './MovieReviews.module.css'

export default function MovieReviews() {

    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovieCreditsById = async () => {
            try {
                setLoading(true);
                const data = await getMovieReviews(movieId);
                setMovieReviews(data.results);
            } catch (error) {
                setError(true);
                setMovieReviews([]);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieCreditsById();
    }, [movieId])

    return (
        <div>
            {loading && <p>Reviews are loading. Please wait...</p>}

            {error && <Error />}

            <ul className={css.list}>
                {movieReviews.map(({ id, author, content }) => {
                    return <li key={id} className={css.listItem}>
                        <p className={css.title}>Author: {author}</p>
                        <p className={css.text}>{content}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}