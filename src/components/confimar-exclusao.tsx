interface ConfirmarExclusaoProps {
  handleCloseModal: () => void;
  handleConfirmExcluir: (id: number) => void;
}

export default function ConfirmarExclusao({
  handleCloseModal,
  handleConfirmExcluir,
}: ConfirmarExclusaoProps) {
  const id = 0;

  return (
    <div>
      <p className="mb-4 text-gray-700">
        Tem certeza que deseja excluir este produto?
      </p>

      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          onClick={handleCloseModal}
        >
          Cancelar
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          onClick={() => handleConfirmExcluir(id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
