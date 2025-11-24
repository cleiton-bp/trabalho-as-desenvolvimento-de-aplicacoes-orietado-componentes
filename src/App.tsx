import { useState } from "react";
import "./App.css";
import Modal from "./components/modal.component";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen flex-col justify-center items-center bg-gray-100 gap-4">
        <div className="row">
          <h1 className="text-4xl font-bold text-blue-600 text-center">
            Hello, Vite with React and Tailwind CSS!
          </h1>
        </div>

        <div className="row">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <span className="flex items-center justify-center text-base font-semibold">
              Adicionar Participante
            </span>
          </button>
        </div>
      </div>

      {/* Modal: adicionar participante */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Adicionar Participante"
        size="lg"
      >
        <div className="p-6">teste</div>
      </Modal>
    </>
  );
}

export default App;
