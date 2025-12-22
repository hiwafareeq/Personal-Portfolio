import Logo from "../assets/Images/Logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

/* ----------------------------------------------
   NAVBAR ANIMATION
---------------------------------------------- */
const navbarVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
  },
};

/* ----------------------------------------------
   MOBILE MENU ANIMATION
---------------------------------------------- */
const menuVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10 },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["About", "Expertise", "Projects", "Contact"];

  return (
    <motion.nav
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className="
        absolute w-full z-10
        flex justify-between items-center
        px-6 py-6
        sm:px-10 sm:py-8
        lg:px-16 lg:py-10
      "
    >
      {/* Logo */}
      <img src={Logo} alt="Logo" className="h-8 sm:h-9 md:h-10 w-auto" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-2 md:gap-3">
        {navItems.map((item) => (
          <li key={item}>
            <button
              className="
                text-white bg-neutral-primary
                border-2 border-white
                hover:bg-gray-200/25
                font-medium leading-5
                rounded-full
                text-sm md:text-base
                px-4 py-1
                transition-colors
              "
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="Toggle menu"
        className="
          md:hidden
          text-white
          border-2 border-white
          rounded-full
          p-2
          hover:bg-gray-200/25
          transition-colors
        "
      >
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            variants={menuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              absolute top-full left-0 w-full
              flex flex-col items-center gap-4
              bg-neutral-primary/95
              backdrop-blur-md
              py-6
              md:hidden
            "
          >
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setOpen(false)}
                  className="
                    text-white
                    border-2 border-white
                    rounded-full
                    px-6 py-2
                    text-base
                    hover:bg-gray-200/25
                    transition-colors
                  "
                >
                  {item}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
