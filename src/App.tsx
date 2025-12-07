import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contato from "./pages/contato";
import PaginaNaoEncontrada from "./pages/pagina-nao-encontrada";
import ProdutoPage from "./pages/produto-page";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<ProdutoPage />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </BrowserRouter>

      {/* Toast global */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
