import React from "react";
import Note from "./Note";

function NotesList () {
    return (
        <ul className="notes-list">
                <Note/>
                <Note/>
                <Note/>
        </ul>
    )
}

export default NotesList;