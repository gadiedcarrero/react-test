import React from "react";

interface CardProps {
  isNew: boolean;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ isNew, title, description }) => {
  return (
    <div className="p-4 rounded-lg m-2">
      {isNew && <span className="text-xs text-white rounded-full">NUEVO</span>}
      <h3 className="text-lg text-white font-bold mt-2">{title}</h3>
      <p className="text-sm text-white mt-1">{description}</p>
    </div>
  );
};

export default Card
;