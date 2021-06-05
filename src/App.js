import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Super Sticky Notes</h1>
                <aside>
                    <button>+ New Note</button>
                    <input placeholder="Type here to search..." />
                </aside>
            </header>
            <ul>
                <li>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Description..." />
                    <span>X</span>
                </li>
                <li>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Description..." />
                    <span>X</span>
                </li>
                <li>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Description..." />
                    <span>X</span>
                </li>
            </ul>
        </div>
    );
}

export default App;
