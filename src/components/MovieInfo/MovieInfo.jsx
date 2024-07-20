import css from './MovieInfo.module.css'

export default function MovieInfo({ movie: { title, tagline, genres, overview, vote_average, poster_path
} }) {
    return (
        <div className={css.container}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="some image" className={css.image} />
                <p className={css.text}>Rating: {vote_average}</p>
            </div>
           
            <div>
                <h1 className={css.title}>{title}</h1>
                <p className={css.tagline}>{tagline}</p>

                <h2 className={css.secTitle}>Overwiew</h2>
                <p className={css.text}>{overview}</p>

                <h2 className={css.secTitle}>Genres:</h2>
                <ul>
                    {genres.map((genre) => {
                        return <li key={genre.id} className={css.text}>{genre.name}</li>
                    })}
                </ul>

            </div>
        </div>
    )
}