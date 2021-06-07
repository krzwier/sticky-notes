import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
    localStorage.clear();
});

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

    it('saves to local storage when a sticky is updated', () => {
        render(<App />);
        expect(localStorage.getItem("notes")).toBeUndefined;
        const button = screen.queryByRole("button");
        button.click();
        const titleInput = screen.getAllByTestId('titleInput');
        fireEvent.change(titleInput[0], { target: { value: 'Groceries'}});
        const notesString = localStorage.getItem("notes");
        const notesArray = JSON.parse(notesString);
        expect(notesArray[0].title).toBe('Groceries');

    });

    it('retrieves from local storage when app loads', () => {
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
        localStorage.setItem("notes", JSON.stringify(notes));
        render(<App/>);
        const stickies = screen.queryAllByTestId('Note');
        expect(stickies.length).toBe(3);
        const stickyTitles = screen.getAllByTestId('titleInput');
        expect(stickyTitles[0].value).toBe("Bubba");
        const stickyDescriptions = screen.getAllByTestId('descriptionInput');
        expect(stickyDescriptions[2].value).toBe("Mikki");

    });

});

describe('Clicking "Add Note" button', () => {

    it('renders new note', () => {
        render(<App/>);
        const button = screen.queryByRole("button");
        button.click();
        const stickies = screen.queryAllByTestId('Note');
        expect(stickies.length).toBe(2);

    });

});

describe('Clicking X on a note', () => {

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

    it('deletes the note', () => {
        render(<App/>);
        const x = screen.queryByTestId("x");
        x.click();
        const stickies = screen.queryAllByTestId('Note');
        expect(stickies.length).toBe(0);

    });

    it('deletes only the correct note', () => {
        render(<App notes={notes}/>);
        const Xs = screen.queryAllByTestId('x');
        Xs[0].click();
        const newXs = screen.queryAllByTestId('x');
        const stickies = screen.queryAllByTestId('Note');
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



