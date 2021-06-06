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

    

    onType = (noteId, field, newText) => {
        const updateNote = (note) => {
            if (note.id === noteId) {
                if (field === "title") {
                    note.title = newText;
                } else if (field === "description") {
                    note.description = newText;
                }
            }
            return note;
        }
        const noteArray = this.state.notes.map(updateNote);
        this.setState({notes: noteArray});

    }

    render() {
        return (
            <div className="App">
                <Header searchText={this.state.searchText} addNote={this.addNote} />
                <NotesList notes={this.state.notes} onType={this.onType} />
            </div>
        );
    }

}

export default App;
