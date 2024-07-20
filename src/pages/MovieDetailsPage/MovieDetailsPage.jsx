import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getMovieById } from '../../movies-api';
import { Suspense } from 'react';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Error from '../../components/Error/Error';
import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {

    const { movieId } = useParams();
    const location = useLocation();
    const linkRef = useRef(location.state);
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                setLoading(true);
                const data = await getMovieById(movieId);
                setMovie(data);
            } catch (error) {
                setError(true);
                setMovie(null);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieById();
    }, [movieId])

    return (
        <div>
            <Link to={linkRef.current ?? '/'} className={css.homeLink}>Go back</Link>

            {loading && <p>Page is loading. Please wait...</p>}
            {error && <Error />}

            {movie &&
                <div>
                    <MovieInfo movie={movie} />
                    <h3>Additional information:</h3>
                    <ul className={css.list}>
                        <li className={css.listItem}>
                            <Link to='cast' className={css.link}>Cast</Link>
                        </li>
                        <li className={css.listItem}>
                            <Link to='reviews' className={css.link}>Reviews</Link>
                        </li>
                    </ul>

                    <Suspense fallback={<div>Loading subpage...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            }
        </div>
    )
}