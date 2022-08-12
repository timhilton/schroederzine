import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {ReactComponent as Logo} from '../svgs/logo.svg';
import Hamburger from "../partials/Hamburger";

const Nav = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768) {
                setOpen(false);
            }
        })
    })

    return (
        <nav>
            <div className={open ? "nav-content hairline" : "nav-content"}>
                <Link to="/"><Logo /></Link>
                <ul className="nav-links-container">
                    <li><Link className="nav-links" to="/about">About</Link></li>
                    <li><Link className="nav-links" to="/music">Music</Link></li>
                    <li><Link className="nav-links" to="/movies">Movies</Link></li>
                    <li><Link className="nav-links" to="/articles">Articles</Link></li>
                    <li><a href="mailto:schroederzine@gmail.com" className="nav-links">Contact</a></li>
                </ul>
                <Hamburger open={open} setOpen={setOpen}/>
            </div>
            <div className={open ? "menu-tray menu-tray-open" : "menu-tray"}>
                <ul className="nav-links-container mobile">
                    <li><Link className="nav-links" to="/about" onClick={() => setOpen(!open)}>About</Link></li>
                    <li><Link className="nav-links" to="/music" onClick={() => setOpen(!open)}>Music</Link></li>
                    <li><Link className="nav-links" to="/movies" onClick={() => setOpen(!open)}>Movies</Link></li>
                    <li><Link className="nav-links" to="/articles" onClick={() => setOpen(!open)}>Articles</Link></li>
                    <li><a href="mailto:schroederzine@gmail.com" className="nav-links" onClick={() => setOpen(!open)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;