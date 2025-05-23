import "./App.css";
import { Books } from "./components/Books";
import { books } from "./data.js";

function App() {
  return (
    <div className="all-books">
      <Books myimage={books[0].image} mytitle={books[0].title} />
      <Books myimage={books[1].image} mytitle={books[1].title} />
      <Books myimage={books[2].image} mytitle={books[2].title} />
    </div>
  );
}

export default App;
