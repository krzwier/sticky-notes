import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders "Super Sticky Notes" header', () => {
        render(<App />);
        const header = screen.queryByText(/Super Sticky Notes/);
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

});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
