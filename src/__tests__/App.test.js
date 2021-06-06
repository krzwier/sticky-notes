import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders <Header />', () => {
        render(<App />);
        const header = screen.queryByTestId("Header");
        expect(header).toBeInTheDocument();
    });

    it('renders <NotesList />', () => {
        render(<App />);
        const notesList = screen.queryByTestId("NotesList");
        expect(notesList).toBeInTheDocument();
    });

});

describe('Clicking "Add Note" button', () => {

    it('renders new note', () => {
        render(<App/>);
        const button = screen.queryByRole("button");
        button.click();
        const stickies = document.querySelectorAll(".note");
        expect(stickies.length).toBe(2);

    });

});

describe('typing in title of a note', () => {

    it('displays new text typed', () => {
        render(<App/>);
        const titleInput = screen.getByTestId('titleInput');
        fireEvent.change(titleInput, { target: { value: 'a'}});
        expect(titleInput.value).toBe('a');
    });
    
    it('displays new text typed in correct note', () => {
        render(<App/>);
        const button = screen.getByRole('button', {name: "+ New Note"});
        button.click();
        const titleInput = screen.getAllByTestId('titleInput');
        // type in second note
        fireEvent.change(titleInput[1], { target: { value: 'a'}});
        // text in second note should have changed
        expect(titleInput[1].value).toBe('a');
        // text in first note should still be blank
        expect(titleInput[0].value).toBe('');
        
    });


})

describe('typing in description of a note', () => {

    it('displays new text typed', () => {
        render(<App/>);
        const descriptionInput = screen.getByTestId('descriptionInput');
        fireEvent.change(descriptionInput, { target: { value: 'a'}});
        expect(descriptionInput.value).toBe('a');
    });

    it('displays new text typed in correct note', () => {
        render(<App/>);
        const button = screen.getByRole('button', {name: "+ New Note"});
        button.click();
        const descriptionInput = screen.getAllByTestId('descriptionInput');
        // type in second note
        fireEvent.change(descriptionInput[1], { target: { value: 'a'}});
        // text in second note should have changed
        expect(descriptionInput[1].value).toBe('a');
        // text in first note should still be blank
        expect(descriptionInput[0].value).toBe('');
        
    });

})

describe('typing in search box', () => {

    const notes = [
        {
            id: 0,
            title: "Bubba",
            description: "",
            doesMatchSearch: true
        },
        {
            id: 1,
            title: "Angela",
            description: "Boris",
            doesMatchSearch: true
        },
        {
            id: 2,
            title: "Susie",
            description: "Mikki",
            doesMatchSearch: true
        }
    ];

    it('displays typed string in search box', () => {
        render(<App notes={notes}/>);
        const searchInput = screen.getByTestId('searchInput');
        fireEvent.change(searchInput, {target:{value:'b'}});
        expect(searchInput.value).toBe('b');

    });

    it('filters and displays only notes matching letter "b"', () => {
        render(<App notes={notes}/>);
        const searchInput = screen.getByTestId('searchInput');
        fireEvent.change(searchInput, {target:{value:'b'}});
        const notesDisplayed = screen.getAllByTestId('Note');
        expect(notesDisplayed.length).toBe(2);

    });

    it('filters and displays only notes matching letter "g"', () => {
        render(<App notes={notes}/>);
        const searchInput = screen.getByTestId('searchInput');
        fireEvent.change(searchInput, {target:{value:'g'}});
        const notesDisplayed = screen.getAllByTestId('Note');
        expect(notesDisplayed.length).toBe(1);

    });

    it('filters and displays only notes matching letter "x"', () => {
        render(<App notes={notes}/>);
        const searchInput = screen.getByTestId('searchInput');
        fireEvent.change(searchInput, {target:{value:'x'}});
        const notesDisplayed = screen.queryAllByTestId('Note');
        expect(notesDisplayed.length).toBe(0);

    });


});



