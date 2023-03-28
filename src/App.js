import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Register from "./Register/Register";
import Header from "./Home/Header";
import FAQ from "./Home/FAQ";
import React, {useEffect} from "react";


function App() {

  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);

  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes className="max-w-md">
            <Route path="*" element={<Home />} />
            <Route path="/uwb-hacks23" element={<Home />} />
            <Route path="/uwb-hacks23/Registration" element={<Register />} />
            <Route path="/uwb-hacks23/FAQ" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
    </>

  );
}

export default App;
