import { motion } from "framer-motion";
import { Instagram } from "react-feather";
import { useInView } from "react-intersection-observer";

export function InstagramGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      image: "./img/post1.jpg",
      link: "https://www.instagram.com/p/DC39uvqCHzc/",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
    {
      image: "./img/post2.jpg",
      link: "https://www.instagram.com/p/DCy0hNeiNaS/",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
    {
      image: "./img/post3.jpg",
      link: "https://www.instagram.com/p/DCwQpOHiDfZ/",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
    {
      image: "./img/post4.jpg",
      link: "https://www.instagram.com/p/DCrFyMiCceY/",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
    {
      image: "./img/post6.jpg",
      link: "https://www.instagram.com/p/DCRV3gJi07N/",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
    {
      image: "./img/post5.jpg",
      link: "https://www.instagram.com/p/DCMMQgDTH3g/",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
  ];

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="p-2 rounded-full bg-black broder-2 w-max mx-auto mb-10">
            <img
              src="./img/dp.jpg"
              alt=""
              className="rounded-full"
              width={150}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-4 bg-gradient-to-r from-pink-500 via-indigo-300 to-red-600 inline-block text-transparent bg-clip-text py-2">
            Instagram Highlights
          </h2>
          <p className="text-gray-600">
            Follow our journey of growth and inspiration
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="PostItem relative group overflow-hidden rounded-xl "
            >
              <a href={post.link} target="_blank" rel="noreferrer">
                <img
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <a
                      href={post.link}
                      className="p-2 px-5 rounded-full "
                      target="_blank"
                      rel="noreferrer"
                    >
                      {post.icon}
                    </a>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
