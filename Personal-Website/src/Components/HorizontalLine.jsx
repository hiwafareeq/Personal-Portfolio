import { motion } from "framer-motion";

function HorizontalLine({ height = 3, width = 60, color = "currentColor" }) {
  return (
    <motion.div
      className="mx-auto rounded-full"
      style={{
        height,
        width,
        backgroundColor: color,
        transformOrigin: "center",
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}

export default HorizontalLine;
