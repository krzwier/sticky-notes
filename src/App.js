import React, { Component } from "react";
import './App.css';
import Header from './Header.js';
import NotesList from './NotesList';

class App extends Component {

    state = {
        notes: [
            {
                id: 0,
                title: "eat",
                description: "reese peanut butter cups",
                doesMatchSearch: true
            },
            {
                id: 1,
                title: "sleep",
                description: "eight hours",
                doesMatchSearch: true
            },
            {
                id: 2,
                title: "code",
                description: "build an awesome ui",
                doesMatchSearch: true
            }
        ],
        searchText: ""
    };

    render() {
        return (
            <div className="App">
                <Header />
                <NotesList />
            </div>
        );
    }
    
}

    export default App;
