import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PaginaNaoEncontrada() {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Animação do SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10"
      >
        <svg
          width="230"
          height="230"
          viewBox="0 0 200 200"
          className="drop-shadow-2xl"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="white"
            strokeWidth="8"
            fill="none"
            animate={{
              strokeDasharray: [0, 600],
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.text
            x="100"
            y="115"
            textAnchor="middle"
            fontSize="55"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            404
          </motion.text>
        </svg>
      </motion.div>

      {/* Texto */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Opa... Esta página não existe.
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg text-center max-w-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Parece que você navegou para um local desconhecido. Mas não se preocupe,
        podemos te levar de volta!
      </motion.p>

      {/* BOTÃO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          Voltar
        </button>
      </motion.div>
    </div>
  );
}
