import { useState, useEffect } from "react";
import Header from "../components/header.component";
import Card from "../components/card";
import ProdutoService from "../utils/services/produtos/produtos.service";
import type Produto from "../utils/interfaces/Produto";

export default function ProdutoPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const produtoService = new ProdutoService();
        const dados = await produtoService.listarTodos();
        setProdutos(dados);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header ocultarBotaoProduto={true}/>

      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Produtos</h1>
        <Card produtos={produtos} />
      </main>
    </div>
  );
}
