import { render, screen, fireEvent } from '@testing-library/react';
import Note from '../Note';


describe('Note', () => {
    it('renders title placeholder', () => {
        render(<Note/>);
        const stickyTitle = screen.getByTestId('titleInput');
        expect(stickyTitle).toBeInTheDocument;
    });

    it('renders description placeholder', () => {
        render(<Note/>);
        const stickyDescription = screen.getByTestId('descriptionInput');
        expect(stickyDescription).toBeInTheDocument;
    });

    it('renders X', () => {
        render(<Note/>);
        const stickyX = screen.getByTestId('x');
        expect(stickyX).toBeInTheDocument;
    });

});

describe('typing in a Note', () => {

    const mockOnType = jest.fn();

    beforeEach(() => {
        render(<Note note={{id: 0}} onType={mockOnType}/>);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });
        
    it('calls editTitle function with correct args', () => {
        const titleInput = screen.getByTestId('titleInput');
        fireEvent.change(titleInput, { target: { value: 'a'}});
        expect(mockOnType.mock.calls.length).toBe(1);
        expect(mockOnType.mock.calls[0][0]).toBe(0);
        expect(mockOnType.mock.calls[0][1]).toBe("title");
        expect(mockOnType.mock.calls[0][2]).toBe('a');
    });

    it('calls editDescription function with correct args', () => {
        const descriptionInput = screen.getByTestId('descriptionInput');
        fireEvent.change(descriptionInput, { target: { value: 'a'}});
        expect(mockOnType.mock.calls.length).toBe(1);
        expect(mockOnType.mock.calls[0][0]).toBe(0);
        expect(mockOnType.mock.calls[0][1]).toBe("description");
        expect(mockOnType.mock.calls[0][2]).toBe('a');
    });
})
