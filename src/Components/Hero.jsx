import { motion } from "framer-motion";
import { Feather, Sparkles, Leaf, CloudSnow } from "lucide-react";
import { Instagram } from "react-feather";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.5, 0.5, 0.5],
              scale: [1, 1.2, 1],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {i % 2 === 0 ? (
              <div className="w-full gap-40 flex justify-between items-stretch">
                <Feather className="w-8 h-8" />
                <CloudSnow className="w-8 h-8" />
              </div>
            ) : (
              <div className="w-full gap-40 flex justify-between items-stretch">
                <Leaf className="w-6 h-6" />
                <Sparkles className="w-6 h-6" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Growth Letter
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering Brands with Stories That Matter
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://instagram.com/thegrowwthletter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 px-5 py-3 hover:text-red-500  rounded-full border-2 border-white hover:bg-white  transition-colors duration-300"
          >
            <Instagram /> Explore Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
