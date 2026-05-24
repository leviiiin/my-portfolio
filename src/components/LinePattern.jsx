const LinePattern = ({ direction = "right", className = "" }) => {
  const degree = direction === "right" ? "135deg" : "45deg";

  const patternStyle = {
    backgroundImage: `repeating-linear-gradient(${degree}, transparent, transparent 24px, rgba(0, 0, 0, 1) 24px, rgba(0, 0, 0, 1) 25px)`,
  };

  return <div style={patternStyle} className={`h-12 w-full ${className}`} />;
};

export default LinePattern;
