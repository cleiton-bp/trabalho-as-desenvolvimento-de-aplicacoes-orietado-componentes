import { motion } from "framer-motion";

export default function HomeProductSection() {
  const produtos = [
    { id: 1, name: "Produto A", description: "Qualidade e inovação." },
    { id: 2, name: "Produto B", description: "Praticidade e estilo." },
    { id: 3, name: "Produto C", description: "Tecnologia avançada." },
    { id: 4, name: "Produto D", description: "Design moderno e elegante." },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Nossos Produtos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtos.map((produto, i) => (
            <motion.div
              key={produto.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <div className="text-6xl mb-4">{produto.id}️⃣</div>
              <h3 className="text-xl font-semibold mb-2">{produto.name}</h3>
              <p className="text-gray-600">{produto.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
