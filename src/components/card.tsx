import { useNavigate } from "react-router-dom";
import type CardsProdutoProps from "../utils/interfaces/CardsProdutosProps";

export default function Card({ produtos }: CardsProdutoProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {produtos.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
        >
          <img
            src={item.photo_url}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-green-600">R$ {item.price}</span>
              <div className="flex gap-2">
                <button
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition"
                  onClick={() => navigate(`/produtos/form/${item.id}`)}
                >
                  Editar
                </button>
                <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
