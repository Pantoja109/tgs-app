import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { AddClient } from "./pages/AddClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-client" element={<AddClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
