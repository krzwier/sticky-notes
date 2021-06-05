import React from "react";

function Header () {
    return (
        <header className="app-header">
                <h1 className="app-header__title">all the stickies</h1>
                <aside className="app-header__controls">
                    <button className="add-new">+ New Note</button>
                    <input className="search" placeholder="Type here to search..." />
                </aside>
            </header>
    )
}

export default Header;