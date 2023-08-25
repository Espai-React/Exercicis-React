import "./App.css";
import { useState } from 'react';
import Pagination from "./Pagination";
import InfiniteScroll from './InfiniteScroll';

function App() {
  const [view, setView] = useState("pagination")
  return (
    <div className="App">
      <h2>Welcome to Random Users</h2>
      <nav className="nav">
        <button onClick={() => setView("pagination")}>Pagintation</button>
        <button onClick={() => setView("infiniteSroll")}>InfiniteScroll</button>
      </nav>
      {view === "pagination"? <Pagination/>: <InfiniteScroll/>}
    </div>
  );
}

export default App;
