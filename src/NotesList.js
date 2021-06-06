import React from "react";
import Note from "./Note";



const filterNotes = note => note.doesMatchSearch;


const NotesList = ({
    notes = [
        {
            id: 0,
            title: "",
            description: "",
            doesMatchSearch: true
        }
    ],
    onType = null,
    deleteNote = null
}) => {

    const renderNote = (note) => (
        <Note note={note} key={note.id} onType={onType} deleteNote={deleteNote} />
    );

    const filteredNotes = notes.filter(filterNotes)
    const renderedNotes = filteredNotes.map(renderNote);


    return (
        <ul className="notes-list" data-testid="NotesList">
            {renderedNotes}
        </ul>
    )
}

export default NotesList;