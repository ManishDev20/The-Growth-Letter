import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Sparkles } from "lucide-react";
import { Instagram } from "react-feather";

export function AboutBrand() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gray-900" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-white my-10 font-serif mb-6">
            The Growth Letter
          </h2>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              The Growth Letter is a heartfelt space on Instagram, created by
              <span className="font-semibold  text-white"> VIDHUSI</span>, for
              dreamers, thinkers, and storytellers. It's a place where stories
              come alive and inspire growth. Whether it's through reflections on
              mindset, habits, or personal development, every post is crafted to
              spark a deeper connection with your inner self and the world
              around you.
            </p>
            <p className="text-lg leading-relaxed">
              Here, we believe that everyone has a story to tell, and through
              the power of sharing, we can grow together, one step at a time.
            </p>
            <div className="w-full flex justify-center items-center">
              <img src="./img/vidhill2.png" alt="" className="w-[200px]" />
            </div>
            <div className="flex pt-10 items-center justify-center space-x-2 text-white">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <p className="font-serif italic text-xl text-blue-400">
                Follow us for a little more growth each day
              </p>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
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
                className="inline-flex gap-2 px-5 py-3 hover:text-red-500  rounded-full border-2 border-white hover:bg-white  transition-colors duration-300"
              >
                <Instagram /> thegrowwthletter
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
