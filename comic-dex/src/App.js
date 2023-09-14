import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Comics from "./components/Comics";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Route element={ <HomePage />} />
      </Router> */}
      <HomePage />
      <Comics />
    </div>
  );
}

export default App;
