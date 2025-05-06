import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Projekty API</h1>
      <ul>
        <li>
          <Link to="/vesmirna-stanice">Vesmírná stanice</Link>
        </li>
        <li>
          <Link to="/citaty">Citáty</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
