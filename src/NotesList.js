import React from "react";
import Note from "./Note";



const filterNotes = note => note.doesMatchSearch;


const NotesList = (props) => {

    const renderNote = (note) => (
        <Note note={note} key={note.id} onType={props.onType}/>
    );

    const filteredNotes = props.notes.filter(filterNotes)
    const renderedNotes = filteredNotes.map(renderNote);


    return (
        <ul className="notes-list">
            {renderedNotes}
        </ul>
    )
}

export default NotesList;