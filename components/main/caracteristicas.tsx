'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaCoins, FaPercent, FaNetworkWired } from 'react-icons/fa';

export const Caracteristicas = () => {
  const [colateral, setColateral] = useState(500);

  const ltv = 0.8; // 80%
  const interes = 0.01; // 1%
  const maxColateral = 2000;

  const prestamo = colateral * ltv;
  const pagoInteres = prestamo * interes;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="caracteristicas"
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-20"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white text-center"
      >
        Características
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-center max-w-2xl"
      >
        Descubre el poder de Stellar y Soroban con nuestro sistema de préstamos inteligentes.
      </motion.p>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-10">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaBolt className="text-purple-400 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Préstamos Instantáneos (Smart Contracts)</h3>
          </div>
          <p className="text-gray-300">Sin aprobación bancaria. Tu colateral en Soroban libera el crédito al instante.</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaPercent className="text-purple-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">LTV Dinámico del 80%</h3>
          </div>
          <p className="text-gray-300">Maximiza tu capital. Deja $1000, gasta $800.</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCoins className="text-purple-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">Interés Fijo del 1%</h3>
          </div>
          <p className="text-gray-300">Transparencia total. Sin letras chiquitas ni tasas variables.</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaNetworkWired className="text-purple-400 text-2xl" />
            <h3 className="text-xl font-semibold text-white">Ecosistema Conectado</h3>
          </div>
          <p className="text-gray-300">Liquidez que fluye a través de la red Stellar con costos de transacción ínfimos.</p>
        </motion.div>
        {/* Simulador */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaBolt className="text-purple-400 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Simulador de Crédito</h3>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">¿Cuánto quieres dejar de colateral? (USDC)</label>
            <input
              type="range"
              min="100"
              max={maxColateral}
              value={colateral}
              onChange={(e) => setColateral(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${(colateral / maxColateral) * 100}%, #374151 ${(colateral / maxColateral) * 100}%, #374151 100%)`,
              }}
            />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>100</span>
              <span className="text-purple-400 font-bold">{colateral} USDC</span>
              <span>{maxColateral}</span>
            </div>
          </div>
          <div className="text-white">
            <p className="text-lg">
              Puedes gastar <span className="text-purple-400 font-bold">{prestamo.toFixed(2)} USDC</span> con solo <span className="text-violet-400 font-bold">{(pagoInteres).toFixed(2)} USDC</span> de interés.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};