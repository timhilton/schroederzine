import { useEffect, useState } from "react";
import Link from 'next/link'

import Logo from '../svgs/logo.svg';
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
                <Link href="/"><Logo /></Link>
                <ul className="nav-links-container">
                    <li><Link href="/about"><a className="nav-links">About</a></Link></li>
                    <li><Link href="/music"><a className="nav-links">Music</a></Link></li>
                    <li><Link href="/movies"><a className="nav-links">Movies</a></Link></li>
                    <li><Link href="/articles"><a className="nav-links">Articles</a></Link></li>
                    <li><a href="mailto:schroederzine@gmail.com" className="nav-links">Contact</a></li>
                </ul>
                <Hamburger open={open} setOpen={setOpen}/>
            </div>
            <div className={open ? "menu-tray menu-tray-open" : "menu-tray"}>
                <ul className="nav-links-container mobile">
                    <li><Link href="/about"><a className="nav-links" onClick={() => setOpen(!open)}>About</a></Link></li>
                    <li><Link href="/music"><a className="nav-links" onClick={() => setOpen(!open)}>Music</a></Link></li>
                    <li><Link href="/movies"><a className="nav-links" onClick={() => setOpen(!open)}>Movies</a></Link></li>
                    <li><Link href="/articles"><a className="nav-links" onClick={() => setOpen(!open)}>Articles</a></Link></li>
                    <li><a href="mailto:schroederzine@gmail.com" className="nav-links" onClick={() => setOpen(!open)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;