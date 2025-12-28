function Experience({ description, org, logo, title }) {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6">
      <div
        className="
          max-w-3xl w-full
          flex flex-col
          items-center
          text-center
          gap-6
        "
      >
        {/* LOGO */}
        {logo && (
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt={org}
              draggable={false}
              className="w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 object-contain"
            />
          </div>
        )}

        {/* ORGANIZATION */}
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          {org}
        </h2>

        {/* TITLE */}
        {title && (
          <span className="text-slate-500 text-sm sm:text-base">
            {title}
          </span>
        )}

        {/* DESCRIPTION */}
        {description && (
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Experience;
