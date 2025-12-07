import axios from "axios";
import type Produto from "../../interfaces/Produto.interface";

export default class ProdutoService {
  async listarTodos() {
    const response = await axios("http://localhost:3001/products", {
      method: "GET"
    })
    return response.data

  }



  // async buscarPorId(id: number) {
  //   // const response = await base.get<Produto>(`/produtos/${id}`);
  //   // return response.data;
  // }

  async criar(produto: Produto) {

    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify(produto)
    },)

  }

  async atualizar(id: number, produto: Produto) {

    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(produto)
    },)

  }



  async excluir(id: number) {

    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"

    },)
    console.log("Produto excluído:", response);
  }
}

