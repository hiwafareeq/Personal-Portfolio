import { motion } from "framer-motion";

function IntroLoader() {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const waveVariants = {
    animate: (i) => ({
      scaleY: [0.3, 1.5, 0.3],
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.15,
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white px-6"
    >
      <div className="flex flex-col items-center max-w-7xl w-full">
          {/* WAVE */}
        <div className="flex gap-3 h-16 mt-12 items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={waveVariants}
              animate="animate"
              className="w-1.5 h-8 bg-white rounded-full"
              style={{ transformOrigin: "center" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default IntroLoader;
