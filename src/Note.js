import React, { Component } from "react";

class Note extends Component {

    static defaultProps = {
        key: Date.now(),
        note: {
            id: this.key,
            title: "",
            description: "",
            doesMatchSearch: true
        },
        onType: null
    };

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
            <li className="note" data-testid="Note">
                <input className="note__title" type="text" placeholder="Title" value={this.props.note.title} onChange={this.editTitle} data-testid="titleInput" />
                <textarea className="note__description" placeholder="Description..." value={this.props.note.description} onChange={this.editDescription} data-testid="descriptionInput" />
                <span className="note__delete" data-testid="x">X</span>
            </li>
        );
    }
}

export default Note;