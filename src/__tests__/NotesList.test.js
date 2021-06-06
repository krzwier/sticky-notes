import { render, screen } from '@testing-library/react';
import NotesList from '../NotesList';


describe('NotesList', () => {
    it('renders one note by default', () => {
        render(<NotesList />);
        const stickies = screen.getAllByTestId('Note');
        expect(stickies.length).toBe(1);
    });

    it('renders only notes with doesMatchSearch=true', () => {
        const notes = [
            {
                id: Date.now(),
                title: "",
                description: "",
                doesMatchSearch: true
            },
            {
                id: Date.now(),
                title: "",
                description: "",
                doesMatchSearch: false
            },
            {
                id: Date.now(),
                title: "",
                description: "",
                doesMatchSearch: true
            }
        ]
        render(<NotesList notes={notes} />);
        const stickies = screen.getAllByTestId('Note');
        expect(stickies.length).toBe(2);
    });


});


