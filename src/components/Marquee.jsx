const Marquee = ({ text, link, style }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block border-b border-gray-800 bg-white py-4 overflow-hidden whitespace-nowrap cursor-pointer hover:bg-gray-900 transition-colors duration-300 ${style === "dark" && "bg-gray-900! hover:bg-white!"}`}
    >
      <div
        className={`animate-marquee text-gray-800 group-hover:text-white text-xl tracking-wider group-hover:underline font-normal ${style === "dark" && "text-white! group-hover:text-gray-900!"}`}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="px-8">
            {text}
          </span>
        ))}
        {[...Array(10)].map((_, i) => (
          <span key={i + 10} className="px-8">
            {text}
          </span>
        ))}
      </div>
    </a>
  );
};

export default Marquee;
