import { motion, type Transition } from "framer-motion";
import { Link } from "react-router-dom";

const animations = {
  left: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } as Transition, // ease como array Bézier
  },
  right: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.2,
    } as Transition,
  },
};

interface GlowEffectProps {
  className?: string;
  color?: string;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
  className = "",
  color = "",
}) => (
  <div
    className={`absolute w-96 h-96 rounded-full blur-[100px] pointer-events-none ${color} ${className}`}
  />
);

export default function HomeHeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Glows */}
      <GlowEffect className="-top-20 -left-40" color="bg-yellow-500/10" />
      <GlowEffect className="-bottom-20 -right-40" color="bg-blue-500/10" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* LADO ESQUERDO */}
        <motion.div
          className="flex-1 text-center md:text-left z-10"
          {...animations.left}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-800 border border-gray-700 text-yellow-400 text-sm font-semibold mb-6">
            Novidades da Estação
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Produtos que você vai <span className="text-yellow-400">amar</span>.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Explore nossa seleção exclusiva pensada para facilitar sua vida e
            surpreender quem você gosta.
          </p>

          <Link to="/produto">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(234, 179, 8, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-xl shadow-xl hover:bg-yellow-400 transition-colors"
            >
              Ver Produtos
            </motion.button>
          </Link>
        </motion.div>

        {/* LADO DIREITO */}
        <motion.div
          className="flex-1 relative w-full max-w-lg md:max-w-none"
          {...animations.right}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
            <img
              src="https://images.ctfassets.net/86of3mjdn78g/3GXLaHN61BEbuctprAZQa6/71784e138d06b36f769fa8f71632cddb/Ecomm_photo_avex_Banner.jpg"
              alt="Destaque"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -inset-4 bg-linear-to-r from-yellow-500 to-blue-500 rounded-2xl blur-2xl opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
