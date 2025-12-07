import type Produto from "./Produto.interface";

export default interface CardsProdutoProps {
  produtos: Produto[];
  handleAtualizarProdutos: () => void;
}
