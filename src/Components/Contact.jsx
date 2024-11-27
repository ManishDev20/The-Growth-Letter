import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send } from "lucide-react";
import { Instagram } from "react-feather";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <Send className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-500 mb-8">
            Ready to start your growth journey? Connect with us on Instagram for
            daily inspiration and updates.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-5  "
          >
            <a
              href="https://instagram.com/thegrowwthletter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:bg-gradient-to-br hover:from-pink-500 hover:via-pink-400 hover:to-red-500 gap-2 px-5 py-3 hover:text-white hover:border-white  text-lg rounded-full border-2 border-black hover:bg-white  transition-colors duration-300"
            >
              <Instagram /> thegrowwthletter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
