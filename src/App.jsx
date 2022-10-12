import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { AddClient } from "./pages/AddClient";
import { AddSale } from "./pages/AddSale";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ClientsProvider } from "./context/ClientsContext";

function App() {
  return (
    <ClientsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/add-sale" element={<AddSale />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ClientsProvider>
  );
}

export default App;
