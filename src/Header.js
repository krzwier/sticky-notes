import React, { Component } from "react";

class Header extends Component {
    static defaultProps = {
        addNote: null,
        searchText: "",
        onSearch: ""
    };

    onType = (e) => {
        const searchText = e.target.value;
        this.props.onSearch(searchText);
    }

    render() {
        return (
            <header className="app-header" data-testid="Header">
                <h1 className="app-header__title">all the stickies</h1>
                <aside className="app-header__controls">
                    <button className="add-new" onClick={this.props.addNote}>+ New Note</button>
                    <input className="search" placeholder="Type here to search..." value={this.props.searchText} data-testid="searchInput" onChange={this.onType} />
                </aside>
            </header>
        )
    }
}

export default Header;