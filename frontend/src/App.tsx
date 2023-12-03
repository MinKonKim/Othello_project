import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gothello from "./Gothello/Gothello";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gothello />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
