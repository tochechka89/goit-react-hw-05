import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <p className={css.text}>Oops! Something is wrong. Please follow back to Home page!</p>
            <Link to='/' className={css.link}>Go!</Link>
        </div>
    )
}