"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <motion.div
      className="min-h-screen px-4 md:px-8 py-16 bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }} // animate when 20% visible, only once
    >
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
        A curated showcase of some of my favorite full-stack projects built with modern technologies.
      </p>
    </motion.div>
  );
}
