import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comics from "./components/Comics";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="comics" element={<Comics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
