import { FiArrowDown } from "react-icons/fi";

function LandingPage() {
  return (
    <section
      className="
        relative min-h-screen
        bg-[url('./Ari2.png')]
        bg-no-repeat
        bg-cover
        bg-left
        bg-black
        text-white  
      "
    >
      {/* CONTENT WRAPPER */}
      <div
        className="
          relative z-10
          min-h-screen
          px-8 sm:px-12 lg:px-20
          py-16
          flex flex-col
        "
      >
        {/* PUSH BOTTOM CONTENT DOWN */}
        <div className="flex-1" />

        {/* BOTTOM-LEFT CTA */}
        <div>
          <button
            className="
              border border-white/70
              px-6 py-3
              text-2xl tracking-wide
              hover:bg-white hover:text-black
              transition
            "
          >
            Get in touch
          </button>

          <p className="mt-4 text-xs text-white/70 tracking-widest uppercase">
            Web Developer · Software Engineer · UX/UI Designer
          </p>
        </div>

        {/* SCROLL HINT */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
          <FiArrowDown size={20} />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
