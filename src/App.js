import './App.css';

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1 className="app-header__title">all the stickies</h1>
                <aside className="app-header__controls">
                    <button className="add-new">+ New Note</button>
                    <input className="search" placeholder="Type here to search..." />
                </aside>
            </header>
            <ul className="notes-list">
                <li className="note">
                    <input className="note__title" type="text" placeholder="Title" />
                    <textarea className="note__description" placeholder="Description..." />
                    <span className="note__delete">X</span>
                </li>
                <li className="note">
                <input className="note__title" type="text" placeholder="Title" />
                <textarea className="note__description" placeholder="Description..." />
                <span className="note__delete">X</span>
                </li>
                <li className="note">
                <input className="note__title" type="text" placeholder="Title" />
                <textarea className="note__description" placeholder="Description..." />
                <span className="note__delete">X</span>
                </li>
            </ul>
        </div>
    );
}

export default App;
