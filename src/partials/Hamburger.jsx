import React from "react";

const Hamburger = ({open, setOpen}) => {
    return (
        <button className={open ? "hamburger menu-open" : "hamburger"} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </button>
    )
}

export default Hamburger;