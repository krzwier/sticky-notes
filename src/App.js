import React, { Component } from "react";
import './App.css';
import Header from './Header.js';
import NotesList from './NotesList';

class App extends Component {

    static defaultProps = {
        notes: [
            {
                id: 0,
                title: "",
                description: "",
                doesMatchSearch: true,
            }
        ]
    };


    state = {
        notes: this.props.notes,
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
                } else {
                    note.description = newText;
                }
            }
            return note;
        }
        const noteArray = this.state.notes.map(updateNote);
        this.setState({notes: noteArray});
    }

    onSearch = (searchString) => {
        this.setState({searchText: searchString});
        const updateMatchBoolean = (note) => {
            if (note.title.match(regEx) ||
                note.description.match(regEx)) {
                    note.doesMatchSearch = true;
                }
            else {
                note.doesMatchSearch = false;
            }
            return note;
        }
        const regEx = new RegExp(searchString, 'i');
        const noteArray = this.state.notes.map(updateMatchBoolean);
        this.setState({notes: noteArray});
    }
    

    render() {
        return (
            <div className="App">
                <Header searchText={this.state.searchText} addNote={this.addNote} onSearch={this.onSearch} />
                <NotesList notes={this.state.notes} onType={this.onType} />
            </div>
        );
    }

}

export default App;
