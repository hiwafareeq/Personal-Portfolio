import { motion } from "framer-motion";
import { FiArrowDown, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Experience from "../Components/Experience.jsx";
import { experiencesData } from "../Components/experiencesData.js";

function ExperiencesSlider() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const slidesCount = experiencesData.length;
  const [dragLimit, setDragLimit] = useState(0);

  /* ----------------------------------
     CALCULATE DRAG LIMIT SAFELY
  ---------------------------------- */
  useEffect(() => {
    const calculateLimit = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const visibleWidth = containerWidth; // 100vw
      const totalWidth = containerWidth * (slidesCount / 2); // each slide = 50vw

      setDragLimit(Math.max(totalWidth - visibleWidth, 0));
    };

    calculateLimit();
    window.addEventListener("resize", calculateLimit);
    return () => window.removeEventListener("resize", calculateLimit);
  }, [slidesCount]);

  return (
    <section className="w-screen my-24">
      
      {/* SECTION TITLE */}
<h1 className="rubik-h1 text-3xl md:text-4xl text-center">
  Places I Worked
</h1>
<motion.p
  className="rubik-ps text-center text-slate-500 mb-8 mt-3 flex items-center justify-center gap-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  <FiArrowLeft />
  Drag to See
  <FiArrowRight />
</motion.p>
      {/* SLIDER */}
      <div
        ref={containerRef}
        className="w-screen h-[50vh] overflow-hidden"
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragElastic={0.08}
          dragMomentum={true}
          dragConstraints={{ left: -dragLimit, right: 0 }}
          className="
            flex h-full
            cursor-grab active:cursor-grabbing
            select-none
          "
          style={{
            width: `${slidesCount * 50}vw`,
          }}
        >
          {experiencesData.map((exp, i) => (
            <div
              key={i}
              className="
                w-[50vw] h-full flex-shrink-0
                border-r border-slate-300/60
              "
            >
              <Experience {...exp} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ExperiencesSlider;
