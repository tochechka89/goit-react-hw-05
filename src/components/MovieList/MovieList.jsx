
import MovieCard from "../MovieCard/MovieCard"
import { useLocation } from "react-router-dom"

export default function MovieList({ movies }) {

    const location = useLocation();

    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id}>
                    <MovieCard movie={movie} location={location} />
                </li>
            })}
        </ul>
    )
}