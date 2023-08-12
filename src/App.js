import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddShoeForm from "./Components/Layout/AddShoe/AddShoeForm";
import ShoePage from "./Components/Layout/ShoePage";
import "./App.css";

import NavBar from "./UI/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<ShoePage />} />
        <Route path="/addshoe" exact element={<AddShoeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
