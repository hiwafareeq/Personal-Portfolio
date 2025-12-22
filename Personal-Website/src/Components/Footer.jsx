import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1E344C] text-white px-20 py-16">
      {/* TOP SECTION */}
      <div className="flex justify-between items-start gap-16">

        {/* LEFT — CTA */}
        <div className="max-w-xl flex flex-col gap-6">
          <h2 className="text-3xl font-bold">
            You Know What Would Be Fun?
          </h2>

          <p className="text-white/80 text-lg">
            Whether it’s a project, internship, or collaboration —
            send a message and let’s build something meaningful.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-2">
            <a
              href="mailto:your@email.com"
              className="
                bg-white text-[#1E344C]
                px-6 py-3 rounded-full
                font-semibold
                hover:bg-white/90
                transition
              "
            >
              Email Me
            </a>

            <a
              href="#contact"
              className="
                border border-white/70
                px-6 py-3 rounded-full
                font-semibold
                hover:bg-white/10
                transition
              "
            >
              Contact Form
            </a>
          </div>
        </div>

        {/* RIGHT — LINKS */}
        <div className="flex gap-24">

          {/* INTERNAL LINKS */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Links</h3>
            <a href="#about" className="text-white/80 hover:text-white">
              About
            </a>
            <a href="#skills" className="text-white/80 hover:text-white">
              Skills
            </a>
            <a href="#journey" className="text-white/80 hover:text-white">
              Journey
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Socials</h3>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <FaInstagram /> Instagram
            </a>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-16 border-t border-white/30" />

      {/* BOTTOM */}
      <div className="text-center mt-6 text-white/70 text-sm">
        © 2025. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
