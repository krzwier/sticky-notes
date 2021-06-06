import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe('Header', () => {
    it('renders heading', () => {
        render(<Header />);
        const heading = screen.getByRole("heading", {name: "all the stickies"});
        expect(heading).toBeInTheDocument;
    });

    it('renders "New Note" button', () => {
        render(<Header />);
        const button = screen.getByRole("button", {name: "+ New Note"});
        expect(button).toBeInTheDocument;
    });

    it('renders search input', () => {
        render(<Header />);
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument;
    });


});


