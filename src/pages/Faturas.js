
import React from 'react';
import { motion } from 'framer-motion';
import BaseLayout from '../../layouts/BaseLayout';

const Faturas = () => {
  return (
    <BaseLayout>
      <motion.div
        className="max-w-5xl mx-auto mt-10 p-6 bg-blue-900/50 backdrop-blur-md rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Faturas</h1>
        <p className="text-blue-200 text-center">Veja todas as faturas emitidas com status atualizado.</p>
      </motion.div>
    </BaseLayout>
  );
};

export default Faturas;
