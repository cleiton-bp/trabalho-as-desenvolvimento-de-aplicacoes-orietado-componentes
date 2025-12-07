import { useState } from "react";
import ProdutoService from "../utils/services/produtos/produtos.service";
import { showToast } from "../utils/services/toast.service";
import type Produto from "../utils/interfaces/Produto.interface";
import type { ProdutoPayload } from "../utils/interfaces/produto/produto-payload.interface";

interface FormProdutoProps {
  produto?: Produto | null;
  onSuccess: () => void;
  onClose: () => void;
}

export default function FormProduto({
  produto,
  onSuccess,
  onClose,
}: FormProdutoProps) {
  // Inicializa o estado diretamente
  const [form, setForm] = useState({
    name: produto?.name ?? "",
    price: produto?.price !== undefined ? String(produto.price) : "",
    description: produto?.description ?? "",
    photo_url: produto?.photo_url ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const service = new ProdutoService();

    const payload: ProdutoPayload = {
      ...form,
      price: Number(form.price),
    };

    try {
      if (produto) {
        await service.atualizar(produto.id, payload);
        showToast.success("Produto atualizado!");
      } else {
        await service.criar(payload);
        showToast.success("Produto criado com sucesso!");
      }

      onSuccess();
      onClose();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Erro ao salvar produto";
      showToast.error(message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nome"
        className="border p-2 rounded"
      />

      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Preço"
        className="border p-2 rounded"
      />

      <input
        name="photo_url"
        value={form.photo_url}
        onChange={handleChange}
        placeholder="URL da imagem"
        className="border p-2 rounded"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descrição"
        className="border p-2 rounded"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {produto ? "Salvar alterações" : "Criar produto"}
      </button>
    </div>
  );
}
