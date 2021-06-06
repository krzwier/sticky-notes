import React, { Component } from "react";

class Note extends Component {

    editTitle = (e) => {
        const field = "title";
        const id = this.props.note.id;
        const newText = e.target.value;
        this.props.onType(id, field, newText);
    }

    editDescription = (e) => {
        const field = "description";
        const id = this.props.note.id;
        const newText = e.target.value;
        this.props.onType(id, field, newText);
    }


    render() {
        return (
            <li className="note">
                <input className="note__title" type="text" placeholder="Title" value={this.props.note.title} onChange={this.editTitle} />
                <textarea className="note__description" placeholder="Description..." value={this.props.note.description} onChange={this.editDescription} />
                <span className="note__delete">X</span>
            </li>
        );
    }
}

export default Note;