import { motion } from "framer-motion";

function IntroLoader() {
  const containerVariants = {
    initial: { top: 0 },
    exit: { 
      top: "-100vh", 
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
        delay: 0.2 
      }
    }
  };

  const textVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  // WAVE ANIMATION: Scaling from the center
  const waveVariants = {
    animate: (i) => ({
      scaleY: [0.3, 1.5, 0.3], // Contracts to 30% and expands to 150%
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.15, // Staggered delay for wave effect
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1E344C] text-white"
    >
      <div className="flex flex-col items-center">
        
        {/* ORIGINAL TEXT STYLE */}
        <div className="overflow-hidden">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <h1 className="rubik-h1 text-5xl md:text-7xl font-bold tracking-tighter">
              Hiwa
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="rubik-ps text-white/50 mt-4 flex items-center gap-3 uppercase tracking-[0.2em] text-xs md:text-sm">
                <span className="h-[1px] w-8 bg-white/20"></span>
                Full Stack Developer
                <span className="h-[1px] w-8 bg-white/20"></span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* 5-LINE MIDDLE-EXPANDING WAVE */}
        <div className="flex gap-3 h-16 mt-12 items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={waveVariants}
              animate="animate"
              className="w-1.5 h-8 bg-white rounded-full"
              style={{
                // origin-center ensures it grows/shrinks from the middle
                transformOrigin: "center", 
              }}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default IntroLoader;