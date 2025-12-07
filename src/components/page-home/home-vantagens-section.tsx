import { motion } from "framer-motion";

export default function HomeVantagensSection() {
  const vantagens = [
    { id: 1, title: "Entrega rápida", icon: "🚀" },
    { id: 2, title: "Qualidade garantida", icon: "✅" },
    { id: 3, title: "Atendimento 24/7", icon: "💬" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Por que escolher nossos produtos?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {vantagens.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
