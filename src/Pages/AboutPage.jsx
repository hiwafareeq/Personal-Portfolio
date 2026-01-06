import { FiDownload } from "react-icons/fi";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

/* =========================
   RIBBON MOTIONS
========================= */

const ribbonLeft = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const ribbonRight = {
  animate: {
    x: ["-50%", "0%"],
    transition: {
      duration: 45,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

/* =========================
   RIBBON COMPONENT
========================= */

function Ribbon({ position = "top", reverse = false }) {
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["-100%", "0%"] : ["0%", "-100%"]
  );

  return (
    <div
      className={`
        absolute ${position === "top" ? "top-0" : "bottom-0"}
        left-0 w-full overflow-hidden
        pointer-events-none
        z-0
      `}
    >
      <motion.div
        style={{
          x,
          WebkitTextStroke: "1px rgba(255,255,255,0.25)",
        }}
        className="
          flex whitespace-nowrap
          font-serif
          tracking-tight
          select-none
          text-transparent
          text-[18vw] sm:text-[14vw] lg:text-[9vw]
        "
      >
        <span className="px-16">
          SOFTWARE ENGINEER · WEB DESIGNER · UX/UI ·
        </span>
        <span className="px-16">
          SOFTWARE ENGINEER · WEB DESIGNER · UX/UI ·
        </span>
      </motion.div>
    </div>
  );
}


/* =========================
   ABOUT PAGE
========================= */

function AboutPage() {
  return (
    <section
      id="about"
      className="
        relative min-h-screen
        bg-black text-white
        px-8 sm:px-12 lg:px-20
        flex items-center
        overflow-hidden
      "
    >
      {/* BACKGROUND RIBBONS */}
      <Ribbon position="top" />
      <Ribbon position="bottom" reverse />

      {/* CONTENT */}
      <motion.div
        className="
          relative z-10
          max-w-7xl w-full
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-10
          my-30
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* LEFT TEXT */}
        <div>
          <motion.h1
            className="
              font-serif
              sm:text-[2rem] md:text-[2rem]
              leading-snug
              max-w-3xl
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I’m Hiwa — a Software Engineer & Full Stack Developer crafting
            scalable and immersive digital experiences, merging creativity
            with engineering precision.
          </motion.h1>

          <motion.p
            className="
              mt-6
              text-white/70
              text-md sm:text-base
              leading-relaxed
              max-w-xl
            "
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I specialize in developing websites and web applications,
            AI-driven products, and interactive digital experiences using
            modern technologies such as React, Node.js, and advanced UI
            animation techniques.
          </motion.p>
        </div>

        {/* RIGHT CTA */}
        <motion.div
          className="mx-auto "
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="src/assets/HiwaFareeqResume.pdf"
            download
            className="
              inline-flex items-center gap-3
              whitespace-nowrap
              border border-white/40
              px-8 py-4
              text-sm tracking-wide
              hover:bg-white hover:text-black
              transition
            "
          >
            <FiDownload />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutPage;
