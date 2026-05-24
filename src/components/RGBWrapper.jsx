const RGBWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`group relative overflow-hidden border border-gray-800 transition-colors duration-300 ${className}`}
    >
      <div className="absolute inset-[-300%] bg-[conic-gradient(from_0deg,#ff0000,#00ff09,#0044ff,#ff0000)] opacity-0 group-hover:opacity-100 animate-[spin_4s_linear_infinite] transition-opacity duration-500" />

      <div className="absolute inset-[2.5px] bg-inherit z-0" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default RGBWrapper;
