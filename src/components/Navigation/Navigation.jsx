import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import { clsx } from "clsx";

const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
    return (
        <nav className={css.container}>
            <ul className={css.navList}>
                <li>
                    <NavLink to='/' className={getNavLinkClass}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/movies' className={getNavLinkClass}>Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}