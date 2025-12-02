import { useNavigate } from "react-router-dom";
import CardsProdutoProps from "../utils/interfaces/CardsProdutosProps";




export default function Card({ produtos }: CardsProdutoProps) {
  const navigate = useNavigate();

  return (
    <>
      {produtos.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: "whitesmoke",
            width: "23vw",
            height: "70vh",
            borderRadius: "10px",
          }}
        >
          <img
            src={item.photo_url}
            style={{ width: "100%", borderRadius: "10px" }}
            alt={item.name}
          />
          <div style={{ padding: "16px" }}>
            <h1>{item.name}</h1>
            <h3>{item.description}</h3>
            <h5>R$ {item.price}</h5>
          </div>
          <div style={{ display: "flex", padding: "16px", gap: "16px" }}>
            <button
              style={{ backgroundColor: "yellow" }}
              onClick={() => navigate(`/produtos/form/${item.id}`)}
            >
              Editar
            </button>
            <button style={{ backgroundColor: "red" }}>Excluir</button>
          </div>
        </div>
      ))}
    </>
  );
}

