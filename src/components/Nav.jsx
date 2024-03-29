import { useEffect, useState } from "react";
import Link from 'next/link'

import Logo from '../svgs/logo.svg';
import Hamburger from "../partials/Hamburger";

const Nav = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = () => {
        setOpen(false);
    };

    const renderLinks = () => {
        const links = [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/music", label: "Music" },
            { href: "/movies", label: "Movies" },
            { href: "/articles", label: "Articles" },
            { href: "/satire", label: "Satire"}
        ];

        return links.map((link, index) => (
            <li key={index}>
                <Link href={link.href} className="nav-links" onClick={handleLinkClick}>
                    {link.label}
                </Link>
            </li>
        ));
    };

    return (
        <nav>
            <div className={open ? "nav-content hairline" : "nav-content"}>
                <Link href="/">

                    <Logo />

                </Link>
                <ul className="nav-links-container">
                    {renderLinks()}
                    <li><a href="mailto:schroederzine@gmail.com" className="nav-links" onClick={handleLinkClick}>Contact</a></li>
                </ul>
                <Hamburger open={open} setOpen={setOpen}/>
            </div>
            <div className={open ? "menu-tray menu-tray-open" : "menu-tray"}>
                <ul className="nav-links-container mobile">
                    {renderLinks()}
                    <li><a href="mailto:schroederzine@gmail.com" className="nav-links" onClick={() => setOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
