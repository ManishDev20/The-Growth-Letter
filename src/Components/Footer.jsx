import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl text-white font-serif mb-2">
              The Growth Letter
            </h3>
            <p className="text-gray-300 text-sm">
              Empowering stories that inspire growth
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-2 border border-white rounded-full hover:bg-white text-white hover:black hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6 " />
          </motion.button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} The Growth Letter. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
