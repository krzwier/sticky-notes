import React from "react";

function Header({ addNote = null, searchText = "" }) {
    return (
        <header className="app-header" data-testid="Header">
            <h1 className="app-header__title">all the stickies</h1>
            <aside className="app-header__controls">
                <button className="add-new" onClick={addNote}>+ New Note</button>
                <input className="search" placeholder="Type here to search..." value={searchText} />
            </aside>
        </header>
    )
}

export default Header;