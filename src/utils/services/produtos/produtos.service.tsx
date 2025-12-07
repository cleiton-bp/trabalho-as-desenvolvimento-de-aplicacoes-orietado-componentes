import axios from "axios";
import type { ProdutoPayload } from "../../interfaces/produto/produto-payload.interface";

export default class ProdutoService {
  async listarTodos() {
    const response = await axios("http://localhost:3001/products", {
      method: "GET",
    });
    return response.data;
  }

  async criar(produto: ProdutoPayload) {
    await fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify(produto),
    });
  }

  async atualizar(id: number, produto: ProdutoPayload) {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(produto),
    });
  }

  async excluir(id: number) {
    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });
    console.log("Produto excluído:", response);
  }
}
