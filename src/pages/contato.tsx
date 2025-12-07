import Header from "../components/header.component";
import { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form enviado:", form);
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", mensagem: "" });
  }

  return (
    <>
      <Header ocultarBotaoContato={true} />

      <div className="h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
        {/* ESQUERDA */}
        <div className="flex-1 flex flex-col justify-center max-w-md mb-10 md:mb-0 md:pr-8">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">
            Fale Conosco
          </h1>

          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            Estamos aqui para ajudar no que for preciso. Envie sua mensagem e
            retornaremos o mais breve possível.
          </p>

          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=700&q=60"
            alt="Contato"
            className="rounded-xl shadow hidden md:block w-full max-h-48 object-cover"
          />
        </div>

        {/* DIREITA */}
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Enviar Mensagem
          </h2>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div>
              <label className="font-medium text-sm">Nome</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-xl mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label className="font-medium text-sm">E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-xl mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label className="font-medium text-sm">Mensagem</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows={3}
                className="w-full p-2.5 border rounded-xl mt-1 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white py-2.5 rounded-xl mt-2 hover:bg-gray-900 transition font-semibold text-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
