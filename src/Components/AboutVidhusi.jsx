import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

export function AboutVidhusi() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [imgRef, inImgView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Meet Vidhusi
          </h2>
          <div className="w-full grid gap-10 grid-cols-6 place-items-center mt-16">
            <motion.div
              ref={imgRef}
              style={{
                translateY: inImgView ? 0 : 20,
                opacity: inImgView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                transitionDuration: 0.8,
              }}
              className="col-span-6 min-[970px]:col-span-2 h-full pt-5 "
            >
              <img
                src="./img/vidhill.png"
                alt=""
                className="w-[300px] lg:w-[500px] "
              />
            </motion.div>
            <div className="col-span-6 min-[970px]:col-span-4 max-[970px]:text-center  text-left">
              <p className="text-lg leading-relaxed px-0 sm:px-5">
                Meet Vidhusi, a storyteller at heart and the creative soul
                behind The Growth Letter. With a passion for words and an eye
                for detail, she helps individuals and brands uncover the stories
                that truly matter. For her, storytelling isn't just about
                crafting narratives; it's about giving voice to thoughts, ideas,
                and experiences that inspire growth and connection
              </p>
              <div className="sm:hidden w-max mx-auto flex gap-2 my-5 bg-gray-900 px-4 py-2 rounded-full text-white items-center">
                <Star className="w-4 h-4 text-yellow-500" />
                Storyteller
              </div>
              <div className=" hidden sm:flex gap-2  flex-col sm:flex-row items-center justify-center space-x-4 my-8 text-white">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center space-x-2 bg-gray-900 px-4 py-2 rounded-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">
                      {index === 0
                        ? "Storyteller"
                        : index === 1
                        ? "Strategist"
                        : "Growth Expert"}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="text-lg leading-relaxed sm:px-5 my-5">
                Through The Growth Letter, Vidhusi shares her journey of
                exploring mindset, habits, and personal development, weaving her
                love for self-improvement into every post. She believes that
                every story—whether personal or professional—has the power to
                create meaningful change when told with authenticity and
                purpose.
              </p>
              <p className="text-lg leading-relaxed sm:px-5">
                Vidhusi's vision is simple: to inspire others to embrace their
                unique stories and share them with the world
              </p>
              <p className="font-serif italic my-5 sm:px-5 text-xl text-blue-400">
                "Because the world needs your story, and you deserve to grow
                while telling it."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
