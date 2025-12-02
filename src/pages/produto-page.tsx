import Header from "../components/header.component";
import { useState, useEffect } from "react";
import Produto from "../utils/interfaces/Produto";
import Card from "../components/card";

export default function ProdutoPage() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    // const dados = await ProdutoService.listarTodos();
    // setProdutos(dados);
  };

  const handleExcluir = async (id: number) => {
    // await ProdutoService.excluir(id);
    // carregarProdutos();
  };

  return (
    <>
      <Header />

      <div>
        <Card produtos={produtos} />
      </div>
    </>
  );
}
