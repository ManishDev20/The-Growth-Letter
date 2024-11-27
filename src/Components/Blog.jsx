import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const notify = () => toast("Stay Tuned!");

  return (
    <section className="py-20 px-4 bg-gray-900" ref={ref}>
      <ToastContainer />
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-4xl md:text-5xl font-semibold text-white font-serif mb-4">
            Blog & Articles
          </h2>
          <p className="text-gray-300 mb-8">
            Inspiring stories and insights coming soon!
          </p>

          <div className="bg-black bg-opacity-[1] hover:bg-opacity-[0.5] hover p-8 rounded-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white font-serif mb-4">
              Coming Soon!
            </h3>
            <p className="text-gray-300 mb-6">
              We're crafting thoughtful content to help you grow. Stay tuned for
              inspiring stories, practical tips, and meaningful insights.
            </p>
            <button
              onClick={notify}
              className="px-6 py-2 border-2 border-white hover:bg-white text-white rounded-full hover:text-black transition-colors duration-300"
            >
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
