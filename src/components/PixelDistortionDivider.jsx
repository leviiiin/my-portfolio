import { useState, useRef, useEffect } from "react";

const SectionDivider = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () =>
      setContainerWidth(containerRef.current?.offsetWidth || 0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const dotsCount = 60;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full h-24 flex items-center justify-center overflow-hidden cursor-crosshair"
    >
      <div className="flex justify-between w-full px-4 gap-2">
        {[...Array(dotsCount)].map((_, i) => {
          const dotPosInsideContainer = (i / (dotsCount - 1)) * containerWidth;
          const dist = Math.abs(dotPosInsideContainer - mousePos.x);

          let translateY = 0;
          if (isHovering && dist < 100) {
            translateY = (100 - dist) / 2;
          }

          return (
            <div
              key={i}
              className="flex flex-col gap-1 transition-transform duration-150 ease-out"
              style={{
                transform: `translateY(${i % 2 === 0 ? translateY : -translateY}px)`,
              }}
            >
              <div
                className={`w-1 h-1 rounded-full transition-all ${
                  isHovering && dist < 100
                    ? "bg-black scale-150"
                    : "bg-gray-300"
                }`}
              />
              <div
                className={`w-1 h-1 rounded-full transition-all ${
                  isHovering && dist < 100
                    ? "bg-blue-500 opacity-50"
                    : "bg-gray-200"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionDivider;
