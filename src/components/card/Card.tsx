import React from "react";

interface CardProps {
  isNew: boolean;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ isNew, title, description }) => {
  return (
    <div className="p-4 rounded-lg m-2 w-[300px]">
      {isNew && <span className="text-[15px] font-[800] text-white">NUEVO</span>}
      <h3 className="text-[22px] font-[800] text-white">{title}</h3>
      <p className="text-sm text-white mt-1">{description}</p>
    </div>
  );
};

export default Card
;