import { motion } from "framer-motion";
import timelineData from "../Components/timeline.js";

export default function Timeline() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl text-white text-center mb-24">
          Journey
        </h2>

        <div className="space-y-24">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-white" />

                {/* CARD */}
                <div
                  className="
                    w-full sm:w-[46%]
                    rounded-2xl
                    border border-white/12
                    bg-white/6
                    backdrop-blur-xl
                    p-6
                  "
                >
                  {/* YEAR */}
                  <span className="text-sm text-white/50 tracking-widest">
                    {item.year}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-xl sm:text-2xl text-white mt-2">
                    {item.title}
                  </h3>

                  {/* ORG */}
                  <p className="text-white/60 text-sm mt-1">
                    {item.organization}
                  </p>

                  {/* BODY */}
                  <p className="text-white/75 mt-4 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
