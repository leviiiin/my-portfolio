const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="relative w-20 h-20 overflow-hidden border border-gray-800">
        <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#ff0000,#00ff09,#0044ff,#ff0000)] animate-[spin_2s_linear_infinite]" />

        <div className="absolute inset-0.5 bg-white flex items-center justify-center">
          <span className="text-xs font-bold tracking-tighter">Loading</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
