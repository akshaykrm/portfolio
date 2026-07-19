export function DeveloperAvatar() {
  return (
    <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto md:mx-0 group">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
      <img
        src="/portfolio/Akshay.png"
        alt="Akshay K. M."
        className="relative w-full h-full rounded-full border border-sand-200/80 dark:border-sand-800/80 shadow-sm object-cover transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>
  );
}
