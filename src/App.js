import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/uwb-hacks23" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
