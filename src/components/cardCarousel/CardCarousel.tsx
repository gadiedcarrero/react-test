import React from "react";
import Slider from "react-slick";
import Card from "../card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardCarousel.css";

interface Course {
  id: number;
  isNew: boolean;
  title: string;
  description: string;
}

interface CardCarouselProps {
  courses: Course[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ courses }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    customPaging: (i: number) => (
      <div className="custom-dot"></div>
    ),
  };

  return (
    <div
      className="carousel-container w-full h-[180px] p-2 rounded-[12px]"
    >
      {courses.length === 0 ? (
        <p>No hay cursos disponibles</p>
      ) : (
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="h-full flex justify-center items-center">
              <Card
                isNew={course.isNew}
                title={course.title}
                description={course.description}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CardCarousel;