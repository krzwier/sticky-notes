import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders "Super Sticky Notes" header', () => {
        render(<App />);
        const header = screen.queryByText(/all the stickies/);
        expect(header).toBeInTheDocument();
    });

    test('renders "New Note" button', () => {
        render(<App />);
        const button = screen.queryByText(/New Note/);
        expect(button).toBeInTheDocument();
    });

    test('renders input field with "Type here to search..." as placeholder', () => {
        render(<App/>);
        const input = screen.queryByPlaceholderText(/Type here to search.../);
        expect(input).toBeInTheDocument();
    });

    test('renders three sticky notes with title input when App loads', () => {
        render(<App/>);
        const stickyTitles = screen.queryAllByPlaceholderText(/Title/);
        expect(stickyTitles.length).toBe(1);
    });

    test('renders three sticky notes with text areas when App loads', () => {
        render(<App/>);
        const stickyTextAreas = screen.queryAllByPlaceholderText(/Description.../);
        expect(stickyTextAreas.length).toBe(1);
    });

    test('renders X for all three sticky notes when App loads', () => {
        render(<App/>);
        const stickyXs = screen.queryAllByText("X");
        expect(stickyXs.length).toBe(1);
    });


});

describe('Clicking "Add Note" button', () => {

    test('renders new note', () => {
        render(<App/>);
        const button = screen.queryByRole("button");
        button.click();
        const stickies = document.querySelectorAll(".note");
        expect(stickies.length).toBe(2);

    })

});


