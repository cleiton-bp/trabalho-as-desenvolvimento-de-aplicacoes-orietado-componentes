import { useNavigate } from "react-router-dom";
import type CardsProdutoProps from "../utils/interfaces/CardsProdutosProps";

export default function Card({ produtos }: CardsProdutoProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {produtos.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100"
        >
          <div className="relative h-52 w-full overflow-hidden">
            <img
              src={item.photo_url}
              alt={item.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-5 flex flex-col gap-3 flex-1">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {item.name}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              {item.description}
            </p>

            <div className="flex justify-between items-center mt-auto pt-3 border-t">
              <span className="font-bold text-green-600 text-lg">
                R$ {item.price}
              </span>

              <div className="flex gap-3">
                <button
                  className="bg-yellow-400 text-gray-800 hover:shadow-sm px-4 py-1.5 rounded-lg hover:bg-yellow-500 transition font-medium shadow-sm"
                  onClick={() => navigate(`/produtos/form/${item.id}`)}
                >
                  Editar
                </button>

                <button className="bg-red-500 text-white px-4 hover:shadow-sm py-1.5 rounded-lg hover:bg-red-600 transition font-medium shadow-sm">
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
