import React, { Component } from "react";
import './App.css';
import Header from './Header.js';
import NotesList from './NotesList';

class App extends Component {

    /**** PROPS ****/
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

    /**** STATE ****/

    state = {
        notes: this.props.notes,
        searchText: ""
    };

    /**** LIFECYCLE METHODS ****/

    componentDidMount() {
        const notesString = localStorage.getItem('notes');
        if (notesString) {
            const notes = JSON.parse(notesString);
            this.setState({notes: notes});
        }
        
    }

    componentDidUpdate() {
        const notesString = JSON.stringify(this.state.notes);
        localStorage.setItem("notes", notesString);
    }

    /**** EVENT HANDLERS ****/

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

    deleteNote = (noteId) => {
        const noteArray = [];
        for (let note of this.state.notes) {
            if (note.id !== noteId) {
                noteArray.push(note);
            }
        }
        this.setState({notes: noteArray});
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
                <NotesList notes={this.state.notes} onType={this.onType} deleteNote={this.deleteNote}/>
            </div>
        );
    }

}

export default App;
