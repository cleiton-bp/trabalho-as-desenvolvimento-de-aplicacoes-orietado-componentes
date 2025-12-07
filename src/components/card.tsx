import type CardsProdutoProps from "../utils/interfaces/CardsProdutosProps.interface";
import { useState } from "react";
import Modal from "./modal";
import ConfirmarExclusao from "./confimar-exclusao";
import ProdutoService from "../utils/services/produtos/produtos.service";
import { showToast } from "../utils/services/toast.service";
import type Produto from "../utils/interfaces/Produto.interface";
import FormProduto from "./form-produto";

export default function Card({
  produtos,
  handleAtualizarProdutos,
}: CardsProdutoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<number | null>(
    null
  );

  const [isOpenFormModal, setIsOpenFormModal] = useState(false);
  const [produtoParaEditar, setProdutoParaEditar] = useState<Produto | null>(
    null
  );

  // --- Detalhes do produto ---
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [produtoParaDetalhe, setProdutoParaDetalhe] = useState<Produto | null>(
    null
  );

  // ---------- Formulário ----------
  const handleOpenCreate = () => {
    setProdutoParaEditar(null);
    setIsOpenFormModal(true);
  };

  const handleOpenEdit = (produto: Produto) => {
    setProdutoParaEditar(produto);
    setIsOpenFormModal(true);
  };

  const handleCloseForm = () => {
    setIsOpenFormModal(false);
    setProdutoParaEditar(null);
  };

  // ---------- Exclusão ----------
  const handleOpenModal = (id: number) => {
    setProdutoSelecionado(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProdutoSelecionado(null);
  };

  const handleConfirmExcluir = async (id: number) => {
    try {
      const produtoService = new ProdutoService();
      await produtoService.excluir(id);

      showToast.success(`Produto excluído com sucesso!`);
    } catch (error) {
      showToast.error(`Erro ao excluir produto: ${error}`);
    }

    handleAtualizarProdutos();
    handleCloseModal();
  };

  // ---------- Detalhes ----------
  const handleOpenDetail = (produto: Produto) => {
    setProdutoParaDetalhe(produto);
    setIsOpenDetailModal(true);
  };

  const handleCloseDetail = () => {
    setProdutoParaDetalhe(null);
    setIsOpenDetailModal(false);
  };

  return (
    <div className="p-6">
      {/* Botão Criar Produto */}
      <div className="mb-6 flex justify-end -mt-18">
        <button
          className="bg-gray-800 text-white text-base px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          onClick={handleOpenCreate}
        >
          Criar Produto
        </button>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtos.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-2xl border-gray-100 flex flex-col"
          >
            {/* Área clicável para abrir detalhe */}
            <div
              className="cursor-pointer"
              onClick={() => handleOpenDetail(item)}
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={item.photo_url}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="p-5 flex justify-between items-center border-t mt-auto">
              <span className="font-bold text-green-600 text-lg">
                R$ {item.price}
              </span>

              <div className="flex gap-3">
                <button
                  className="bg-yellow-400 text-gray-800 px-4 py-1.5 rounded-lg hover:bg-yellow-500 transition"
                  onClick={() => handleOpenEdit(item)}
                >
                  Editar
                </button>

                <button
                  className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleOpenModal(item.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Formulário */}
      <Modal
        isOpen={isOpenFormModal}
        onClose={handleCloseForm}
        title={produtoParaEditar ? "Editar Produto" : "Criar Produto"}
        size="md"
        closeOnBackdrop={false}
      >
        <FormProduto
          produto={produtoParaEditar}
          onSuccess={handleAtualizarProdutos}
          onClose={handleCloseForm}
        />
      </Modal>

      {/* Modal: Confirmar exclusão */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Confirmar exclusão"
        size="md"
        closeOnBackdrop={false}
      >
        {produtoSelecionado !== null && (
          <ConfirmarExclusao
            id={produtoSelecionado}
            handleCloseModal={handleCloseModal}
            handleConfirmExcluir={handleConfirmExcluir}
          />
        )}
      </Modal>

      {/* Modal Detalhes do Produto */}
      <Modal
        isOpen={isOpenDetailModal}
        onClose={handleCloseDetail}
        title="Detalhes do Produto"
        size="2xl"
        closeOnBackdrop={false}
      >
        {produtoParaDetalhe && (
          <div className="flex flex-col gap-4">
            <img
              src={produtoParaDetalhe.photo_url}
              alt={produtoParaDetalhe.name}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-xl font-bold">{produtoParaDetalhe.name}</h2>
            <p className="text-gray-700">{produtoParaDetalhe.description}</p>
            <span className="font-bold text-green-600 text-lg">
              R$ {produtoParaDetalhe.price}
            </span>
          </div>
        )}
      </Modal>
    </div>
  );
}
