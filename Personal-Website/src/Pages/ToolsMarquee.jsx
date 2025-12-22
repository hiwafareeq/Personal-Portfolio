function ToolsMarquee() {
  const row1 = [
    "React",
    "JavaScript",
    "Lenis",
    "Tailwind",
    "Framer Motion",
    "Node.js",
    "PostgreSQL",
  ];

  const row2 = [
    "HTML",
    "CSS",
    "Express",
    "Robotics",
    "Git",
    "Figma",
    "REST APIs",
  ];

  return (
    <section className="tools-wrapper">
      {/* ROW 1 */}
      <div className="marquee">
        <div className="marquee-track marquee-left">
          <div className="marquee-content">
            {row1.map((t, i) => (
              <span key={i} className="pill">{t}</span>
            ))}
          </div>
          <div className="marquee-content">
            {row1.map((t, i) => (
              <span key={`dup-${i}`} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="marquee">
        <div className="marquee-track marquee-right">
          <div className="marquee-content">
            {row2.map((t, i) => (
              <span key={i} className="pill">{t}</span>
            ))}
          </div>
          <div className="marquee-content">
            {row2.map((t, i) => (
              <span key={`dup-${i}`} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsMarquee;
