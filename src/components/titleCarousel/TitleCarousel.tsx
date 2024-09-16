import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardExtended from "@/components/cardExtended/CardExtended"; // Importa el nuevo componente
import "./TitleCarousel.css";

interface TitleCarouselProps {
  categories: string[];
  cards: {
    isNew: boolean;
    title: string;
    category: string;
    rating: number;
    status: string;
    image: string;
  }[];
}

const TitleCarousel: React.FC<TitleCarouselProps> = ({ categories, cards }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  const cardSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    initialSlide: 0,
  };

  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full mb-4">
        <button
          className={`h-[30px] px-4 rounded-full ${
            selectedCategory === null
              ? "bg-textBtn text-white"
              : "bg-textBtnNoActivo text-heading"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          Todo
        </button>
        <Slider {...settings} className="w-full ml-4">
          {categories.map((category) => (
            <div key={category} className="px-2">
              <button
                className={`h-[30px] px-4 rounded-full w-full ${
                  selectedCategory === category
                    ? "bg-textBtn text-white"
                    : "bg-textBtnNoActivo text-heading"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative -ml-0">
        {" "}
        {/* Ajusta el margen izquierdo para compensar el espacio */}
        <Slider {...cardSettings} className="w-full">
          {filteredCards.map((card) => (
            <div key={card.title} className="px-2">
              <CardExtended
                isNew={card.isNew}
                title={card.title}
                category={card.category}
                rating={card.rating}
                status={card.status}
                image={card.image}
              />{" "}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TitleCarousel;
