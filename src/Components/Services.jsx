import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PenTool, Lightbulb, Target, Megaphone } from "lucide-react";

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <PenTool className="w-10 h-10 text-white" />,
      title: "Brand Storytelling",
      description:
        "Crafting compelling narratives that resonate with your audience and bring your brand to life.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Strategy Development",
      description:
        "Creating strategic roadmaps for sustainable growth and meaningful impact.",
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Personal Growth",
      description:
        "Guiding individuals through their journey of self-discovery and development.",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-white" />,
      title: "Content Creation",
      description:
        "Developing engaging content that educates, inspires, and drives action.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white font-serif mb-4">
            What We Do?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto my-10">
            Transforming ideas into impactful stories and strategies that drive
            growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-black rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="mb-4  flex justify-center ">{service.icon}</div>
              <h3 className="text-lg font-semibold text-yellow-400  font-serif mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400  text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
