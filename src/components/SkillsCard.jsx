import { User } from "lucide-react";
import React from "react";

const SkillsCard = ({ data, title, dataAos }) => {
  return (
    <div
      className="border border-gray-800 p-6 min-w-[30%] flex-1"
      data-aos={dataAos}
    >
      <h3 className="text-3xl text-neutral-600 font-bold">{title}</h3>
      <div className="flex flex-wrap gap-5 mt-5">
        {data.map((i) => (
          <div
            key={i.id}
            className="bg-gray-100 relative group w-17 h-17 flex items-center justify-center p-4 rounded"
            data-aos="flip-left"
          >
            {i.logo ? (
              <img
                src={i.logo}
                alt={i.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <User />
            )}
            <span className="absolute bg-neutral-900 px-2 py-px rounded-xs text-white text-[12px] opacity-0 group-hover:opacity-100 z-10 left-[50%] top-[90%] translate-x-[-50%] transition duration-300">
              {i.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
