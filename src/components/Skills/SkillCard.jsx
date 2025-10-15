import React from "react";

const SkillCard = ({
  icon,
  title,
  level,
  borderColor = "border-retro-electric-blue",
}) => {
  return (
    <div
      className={`bg-black bg-opacity-70 border-2 ${borderColor} p-6 h-full text-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_15px_#00ffff]`}
    >
      <div className="text-4xl text-retro-neon-green mb-3 flex justify-center">
        {icon}
      </div>
      <h4 className="font-orbitron text-lg mb-2">{title}</h4>
      <span className="font-press-start text-xs text-retro-light-grey">
        {level}
      </span>
    </div>
  );
};

export default SkillCard;
