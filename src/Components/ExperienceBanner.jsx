import { motion } from "framer-motion";

function ExperienceBanner({ title, org, logo, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="
        group
        relative h-full rounded-2xl
        border border-white/12
        bg-white/6
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-300
      "
    >
      {/* HOVER GLOW */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <div className="absolute inset-0 bg-white/10 blur-2xl" />
      </div>

      <div className="relative flex flex-col items-center text-center gap-5 p-8 h-full">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className="
            w-32 h-32
            rounded-3xl
            bg-white/50
            border border-white/25
            backdrop-blur-2xl
            shadow-[0_15px_40px_rgba(0,0,0,0.65)]
            flex items-center justify-center
            transition-transform duration-300 ease-out
            group-hover:scale-[1.06]
            group-hover:border-white/40
            group-hover:bg-white
          "
        >
          <img
            src={logo}
            alt={org}
            draggable={false}
            className="
              w-24 h-24 object-contain
              transition-transform duration-300 ease-out
              group-hover:scale-[1.08]
            "
          />
        </motion.div>

        {/* ORG + POSITION */}
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-xl sm:text-2xl tracking-wide text-white">
            {org}
          </h3>

          <span
            className="
              px-3 py-1
              rounded-full
              text-xs sm:text-sm
              text-white/80
              border border-white/20
              bg-white/10
              backdrop-blur-md
            "
          >
            {title}
          </span>
        </div>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-sm sm:text-base text-white/65 leading-relaxed max-w-sm">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default ExperienceBanner;
