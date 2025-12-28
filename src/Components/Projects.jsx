import VerticalLine from "./VerticalLine.jsx";
import HorizontalLine from "./HorizontalLine.jsx";

function Projects({ title, points, name }) {
  return (
    <div
      className="
        flex flex-col md:flex-row
        items-center md:items-center
        justify-center md:justify-around
        text-white
        gap-4 md:gap-6
        h-full
        px-6 sm:px-10 md:px-16
      "
    >
      {/* LEFT TITLE */}
      <h1
        className="
          rubik-h1 font-bold
          text-2xl sm:text-3xl
          md:text-5xl lg:text-6xl
          w-full md:w-1/4
          text-center md:text-left
          md:mt-0
        "
      >
        {title}
      </h1>
      <div className="mt-1 flex justify-center md:hidden">
            <HorizontalLine
              width={56}
              height={3}
              color="rgba(255,255,255,0.6)"
            />
          </div>

      {/* RIGHT COLUMN */}
      <div
        className="
          flex flex-col
          w-full md:w-auto
          h-auto md:h-[65vh]
          text-center md:text-left
          items-center md:items-center
          justify-cen md:justify-between
        "
      >
        {/* POINTS */}
        <div className="relative flex flex-col gap-2 pl-0 md:pl-6">
          {/* DESKTOP — vertical line */}
          <div className="hidden md:block">
            <VerticalLine />
          </div>

          {points.map((p, i) => (
            <p
              key={i}
              className="
                rubik-ps
                text-[1rem] sm:text-xs
                md:text-base lg:text-lg
              "
            >
              {p}
            </p>
          ))}

          {/* MOBILE — horizontal line */}
          <div className="mt-3 flex justify-center md:hidden">
            <HorizontalLine
              width={56}
              height={3}
              color="rgba(255,255,255,0.6)"
            />
          </div>
        </div>

        {/* PROJECT NAME */}
        <h2
          className="
            rubik-h2 font-semibold
            text-xl sm:text-2xl
            md:text-4xl lg:text-5xl
            mt-6
            text-center md:text-left
          "
        >
          {name}
        </h2>
      </div>
    </div>
  );
}

export default Projects;
