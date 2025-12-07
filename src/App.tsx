import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Contato from "./pages/contato";
import PaginaNaoEncontrada from "./pages/pagina-nao-encontrada";
import ProdutoPage from "./pages/produto-page";

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<ProdutoPage />} />
        <Route path="/contato" element={<Contato />} />
        <Route path= "*" element={< PaginaNaoEncontrada/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
