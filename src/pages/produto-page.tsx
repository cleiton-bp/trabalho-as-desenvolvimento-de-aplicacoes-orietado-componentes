import { useState, useEffect } from "react";
import Header from "../components/header";
import Card from "../components/card";
import ProdutoService from "../utils/services/produtos/produtos.service";
import type Produto from "../utils/interfaces/Produto.interface";

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

  const handleAtualizarProdutos = async () => {
    try {
      const produtoService = new ProdutoService();
      const dados = await produtoService.listarTodos();
      setProdutos(dados);
    } catch (error) {
      console.error("Erro ao atualizar produtos:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header ocultarBotaoProduto={true} />

      <main className="px-4 py-10">
        <h1 className="text-4xl font-bold pl-10 mb-4 text-start text-gray-800">
          Produtos
        </h1>

        <div className="container mx-auto">
          <Card
            handleAtualizarProdutos={handleAtualizarProdutos}
            produtos={produtos}
          />
        </div>
      </main>
    </div>
  );
}
