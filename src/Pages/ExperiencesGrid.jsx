import ExperienceBanner from "../Components/ExperienceBanner.jsx";
import { experiencesData } from "../Components/experiencesData.js";

function ExperiencesGrid() {
  return (
    <section
      id="expertise"
      className="w-full bg-black py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide text-white">
            Experiences
          </h1>
          <p className="mt-3 text-white/60 text-sm sm:text-base">
            A snapshot of what I’ve worked on so far.
          </p>
        </div>

        {/* GRID — 3 COLUMNS × 2 ROWS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            auto-rows-fr
          "
        >
          {experiencesData.map((exp, index) => (
            <ExperienceBanner
              key={index}
              index={index}
              {...exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencesGrid;
