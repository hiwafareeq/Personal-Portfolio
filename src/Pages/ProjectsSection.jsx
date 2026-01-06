import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../Components/Projects.js";

/* =========================
   FADE-UP VARIANT
========================= */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* =========================
   PROJECTS SECTION
========================= */

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  return (
    <section
      id="projects"
      className="
        min-h-screen
        bg-black text-white
        px-8 sm:px-12 lg:px-20
        py-32
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">

        {/* LEFT — PROJECT LIST */}
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl mb-6">
            Notable Projects
          </h1>

          <p className="text-white/60 text-lg mb-16">
            Of course I created a thing or two
          </p>

          <ul className="space-y-10">
            {projectsData.map((project, i) => (
              <li key={project.name}>
                <button
                  onClick={() => setActiveIndex(i)}
                  className={`
                    w-full text-left
                    flex items-baseline gap-6
                    transition-colors duration-300
                    ${
                      activeIndex === i
                        ? "text-white"
                        : "text-white/40 hover:text-white/80"
                    }
                  `}
                >
                  <span className="text-sm opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-2xl sm:text-3xl
                      border-b border-white/30 pb-1
                    "
                  >
                    {project.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — PROJECT DETAILS */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h2 className="font-serif text-4xl sm:text-5xl mb-8">
                {activeProject.name}
              </h2>

              <p className="text-white/70 text-xl leading-relaxed max-w-xl">
                {activeProject.description}
              </p>

              {/* DIVIDER */}
              <div className="mt-12 border-t border-white/30 w-full max-w-xl" />

              {/* TOOLS USED */}
              <div className="mt-8 flex flex-wrap gap-4 max-w-xl">
                {activeProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      px-6 py-2
                      text-base sm:text-lg
                      border border-white/20
                      rounded-full
                      bg-white/5
                      text-white
                      tracking-wide
                      transition-all duration-300
                      hover:shadow-[0_0_16px_rgba(255,255,255,0.6)]
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
