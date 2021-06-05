import React from "react";
import Note from "./Note";

const renderNote = (note) => (
    <Note note={note} key={note.id} />
);

const NotesList = (props) => {

    const renderedNotes = props.notes.map(renderNote);

    return (
        <ul className="notes-list">
            {renderedNotes}
        </ul>
    )
}

export default NotesList;