'use client';
import { motion } from 'framer-motion';
import { FaLock, FaChartLine, FaHistory, FaSmile } from 'react-icons/fa';

const beneficios = [
  {
    title: "HODL sin Sacrificio",
    description: "Tus activos siguen siendo tuyos. No te pierdas la próxima subida del mercado mientras compras lo que necesitas.",
    icon: FaLock,
  },
  {
    title: "Colateral Productivo (vía Defindex)",
    description: "Tu dinero no duerme. Mientras tienes tu préstamo, tu colateral genera rendimientos optimizados en USDC.",
    icon: FaChartLine,
  },
  {
    title: "Historial On-Chain",
    description: "Construye tu reputación financiera en la blockchain más eficiente del mundo.",
    icon: FaHistory,
  },
  {
    title: "Cero Culpa",
    description: "Gasta con inteligencia. El rendimiento de las DeFi ayuda a pagar tus consumos.",
    icon: FaSmile,
  },
];

export const Beneficios = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -10, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)', transition: { duration: 0.3 } },
  };

  return (
    <section
      id="beneficios"
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-20"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white text-center"
      >
        Beneficios
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-center max-w-2xl"
      >
        Descubre por qué Redi es la elección inteligente para tu finanzas.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-10">
        {beneficios.map((beneficio, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4 mb-4">
              <beneficio.icon className="text-purple-400 text-3xl group-hover:text-violet-300 transition-colors" />
              <h3 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                {beneficio.title}
              </h3>
            </div>
            <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
              {beneficio.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};