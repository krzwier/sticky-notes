import React from "react";
import Note from "./Note";

const renderNote = (note) => (
    <Note note={note} key={note.id} />
);

const filterNotes = (note) => (note.doesMatchSearch);


const NotesList = (props) => {

    const filteredNotes = props.notes.filter(filterNotes)
    const renderedNotes = filteredNotes.map(renderNote);

    return (
        <ul className="notes-list">
            {renderedNotes}
        </ul>
    )
}

export default NotesList;