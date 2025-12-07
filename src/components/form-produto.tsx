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
    if (!form.name.trim() || !form.price.trim() || !form.description.trim()) {
      showToast.warn("Nome, preço e descrição são obrigatórios.");
      return;
    }

    const payload: ProdutoPayload = {
      ...form,
      price: Number(form.price),
      photo_url: form.photo_url.trim() || "https://picsum.photos/400/300",
    };

    try {
      const service = new ProdutoService();

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
        required
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nome do produto"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-50 focus:outline-none transition"
      />

      <input
        required
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Preço"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-50 focus:outline-none transition"
      />

      <input
        name="photo_url"
        value={form.photo_url}
        onChange={handleChange}
        placeholder="URL da imagem (opcional)"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-50 focus:outline-none transition"
      />

      <textarea
        required
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descrição (opcional)"
        rows={4}
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-50 focus:outline-none transition resize-none"
      />

      <button
        onClick={handleSubmit}
        className="bg-gray-800 text-white text-base px-4 py-3 rounded-lg shadow hover:bg-gray-900 transition"
      >
        {produto ? "Salvar alterações" : "Criar produto"}
      </button>
    </div>
  );
}
