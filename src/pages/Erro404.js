
import React from 'react';
import { motion } from 'framer-motion';

const Erro404 = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-blue-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-green-400">404</h1>
        <p className="text-2xl mb-4">Página não encontrada</p>
        <a href="/" className="text-green-400 hover:underline">Voltar para a home</a>
      </div>
    </motion.div>
  );
};

export default Erro404;
