import timelineData from "../Components/timeline.js";

/* =========================
   GROUP BY YEAR
========================= */
const groupedByYear = timelineData.reduce((acc, item) => {
  acc[item.year] = acc[item.year] || [];
  acc[item.year].push(item);
  return acc;
}, {});

const years = Object.keys(groupedByYear).sort();

/* =========================
   COMPONENT
========================= */
export default function ScrollVerticalTimeline() {
  return (
    <section className="bg-black text-white relative">
      {years.map((year, index) => (
        <section
          key={year}
          className="
            sticky
            top-0
            min-h-screen
            flex
            items-center
            justify-center
            px-6
            md:px-20
            bg-black
          "
          style={{ zIndex: index + 1 }}
        >
          {/* DARKENING OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black
              opacity-0
              transition-opacity
              duration-300
              pointer-events-none
            "
          />

          {/* CONTENT */}
          <div className="relative max-w-6xl w-full flex items-center md:flex-row md:space-x-12 space-y-12 md:space-y-0">
            
            {/* YEAR */}
            <div className="flex items-center justify-center">
              <h2 className="text-[5rem] md:text-[8rem] font-bold tracking-widest text-white/90">
                {year}
              </h2>
            </div>

            {/* EXPERIENCE */}
            <div className="space-y-8">
              {groupedByYear[year].map((item, i) => (
                <div
                  key={i}
                  className="border-l border-white/20 pl-6"
                >
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}
    </section>
  );
}
