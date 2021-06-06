import React, { Component } from "react";
import './App.css';
import Header from './Header.js';
import NotesList from './NotesList';

class App extends Component {

    state = {
        notes: [
            {
                id: Date.now(),
                title: "",
                description: "",
                doesMatchSearch: true,
            }
        ],
        searchText: ""
    };

    addNote = () => {
        const newNote = {
            id: Date.now(),
            title: "",
            description: "",
            doesMatchSearch: true,
        }
        const notesArray = [newNote, ...this.state.notes];
        this.setState({ notes: notesArray });
    }

    render() {
        return (
            <div className="App">
                <Header searchText={this.state.searchText} addNote={this.addNote} />
                <NotesList notes={this.state.notes} />
            </div>
        );
    }

}

export default App;
