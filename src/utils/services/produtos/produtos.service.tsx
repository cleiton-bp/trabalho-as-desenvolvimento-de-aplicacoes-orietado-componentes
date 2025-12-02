import base from "../base-api.service";

export interface Produto {
  id?: number;
  name: string;
  description: string;
  price: number;
  photo_url: string;
}

export default class ProdutoService {
  async listarTodos() {
    const response = await base.get<Produto[]>("/produtos");
    return response.data;
  }

  async buscarPorId(id: number) {
    const response = await base.get<Produto>(`/produtos/${id}`);
    return response.data;
  }

  async criar(produto: Produto) {
    const response = await base.post<Produto>("/produtos", produto);
    return response.data;
  }

  async atualizar(id: number, produto: Produto) {
    const response = await base.put<Produto>(`/produtos/${id}`, produto);
    return response.data;
  }

  async excluir(id: number) {
    await base.delete(`/produtos/${id}`);
  }
}

