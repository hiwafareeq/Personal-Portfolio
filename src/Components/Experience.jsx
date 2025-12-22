function Experience({ description, org, logo, title }) {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6">
      <div
        className="
          max-w-6xl w-full
          flex flex-col md:grid
          md:grid-cols-[1.3fr_1fr_auto]
          gap-6
          items-center
        "
      >
        {/* TEXT */}
        <div className="flex flex-col justify-between text-slate-700 min-h-[22vh] text-center md:text-left">
          <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            “{description}”
          </p>

          <div className="mt-4">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
              {org}
            </h2>

            {title && (
              <span className="text-slate-500 text-sm">
                {title}
              </span>
            )}
          </div>
        </div>

        {/* LOGO */}
        {logo && (
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt={org}
              draggable={false}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
