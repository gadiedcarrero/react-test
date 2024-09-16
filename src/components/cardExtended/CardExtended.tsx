import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



interface CardExtendedProps {
  isNew: boolean;
  title: string;
  category: string;
  rating: number;
  status: string;
  image: string;
}

const CardExtended: React.FC<CardExtendedProps> = ({
  isNew,
  title,
  category,
  rating,
  status,
  image,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md mb-8">
      <img
        src={image}
        alt={title}
        className="w-full h-[134px] object-cover rounded-t-lg"
      />
      <div className="mt-2 pl-4 pr-4 h-[84px]">
        <p className="text-[12px] font-[700]  text-cursoCategoria">{category}</p>
        <h3 className="text-[16px] font-[600]">{title}</h3>
        <div className="flex items-center justify-between">
          {isNew && <span className="text-[15px] font-[800] text-textBtn">Nuevo</span>}
          <div className="flex items-center text-[11px] font-[800] text-gray-500 ml-2">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
            {rating}
          </div>
          <p className="text-xs text-gray-500">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default CardExtended;
