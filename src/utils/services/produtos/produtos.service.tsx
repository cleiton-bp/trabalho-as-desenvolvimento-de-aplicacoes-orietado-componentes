import type Produto from "../../interfaces/Produto.interface";

export default class ProdutoService {
  async listarTodos() {
    const dados: Produto[] = [
      {
        id: 1,
        name: "Produto A",
        description: "Descrição do Produto A",
        price: 100,
        photo_url: "https://picsum.photos/200/400",
      },
      {
        id: 2,
        name: "Produto B",
        description: "Descrição do Produto B",
        price: 200,
        photo_url: "https://picsum.photos/200/200",
      },
    ];
    return dados;
  }

  // async buscarPorId(id: number) {
  //   // const response = await base.get<Produto>(`/produtos/${id}`);
  //   // return response.data;
  // }

  // async criar(produto: Produto) {
  //       // const response = await base.post<Produto>("/produtos", produto);
  //       // return response.data;
  // }

  // async atualizar(id: number, produto: Produto) {
  //   // const response = await base.put<Produto>(`/produtos/${id}`, produto);
  //   // return response.data;
  // }

  // async excluir(id: number) {
  //   // await base.delete(`/produtos/${id}`);
  // }
}
