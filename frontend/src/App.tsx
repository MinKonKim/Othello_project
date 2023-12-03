import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainGame from "./components/MainGame";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
