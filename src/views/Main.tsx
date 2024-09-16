import React, { useEffect, useState } from "react";
import LogoEspanol from "@assets/LogoEspanol.png";
import Filters from "@assets/filter.svg";
import { FaSearch } from "react-icons/fa"; // Asegúrate de tener react-icons instalado
import CardCarousel from "@/components/cardCarousel/CardCarousel";
import coursesData from "@/utils/courses.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TitleCarousel from "@/components/titleCarousel/TitleCarousel";

interface Course {
  id: number;
  isNew: boolean;
  title: string;
  description: string;
  category: string;
  rating: number;
  status: string;
  image: string;
}

const Main: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [
    "Internacional",
    "Repostería",
    "Saludable",
    "Administración",
  ];

  useEffect(() => {
    // Simula una llamada a la API
    const fetchCourses = async () => {
      // Aquí estamos simulando una llamada a la API usando datos locales
      setCourses(coursesData);
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-start h-screen bg-ligthBG p-6">
      <section className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <img
            src={LogoEspanol}
            alt="Logo Español"
            className="w-[79px] h-[65px]"
          />
          <div className="flex flex-col">
            <h1 className="text-[24px] font-[600]">Hola, Carlos</h1>
            <p className="text-[13px] font-[700] w-[200px]">
              Qué quisieras aprender Hoy? Digita tu búsqueda Abajo.
            </p>
          </div>
        </div>
        <div className="relative inline-block">
          <FontAwesomeIcon
            icon={faBell}
            className="text-heading"
            style={{ width: "35px", height: "35px" }}
          />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-[13px] w-[13px] text-[10px] font-bold leading-none text-white bg-textBtn rounded-full">
            5
          </span>
        </div>
      </section>

      <div className="relative mt-7 w-full">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar"
          className="p-2 pl-10 bg-white rounded-[12px] w-full h-[64px] shadow-input"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <img src={Filters} alt="Filters" className="w-[38px] h-[38px]" />
        </button>
      </div>

      <section className="mt-10 w-full">
        <CardCarousel courses={courses} />
      </section>

      <section className="mt-10 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-[600] ">Categorías</h2>
          <button className="flex items-center text-textBtn font-bold">
            VER TODO
            <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          {categories.map((category) => (
            <div
              key={category}
              className={`text-[15px] font-[700] cursor-pointer transition-colors duration-300 ${
                selectedCategory === category
                  ? "text-textBtn"
                  : "text-textCategories"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 w-full">
        <div className="flex items-center justify-between mb-4 ">
          <h2 className="text-[18px] font-[600]">Cursos Asignados</h2>
          <button className="flex items-center text-textBtn font-bold">
            VER TODO
            <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
          </button>
        </div>
        <div className="overflow-hidden">
          <TitleCarousel categories={categories} cards={courses} />
        </div>
      </section>

      <section className="flex justify-between items-center mt-8 p-4 w-full pb-10">
        <div className="relative flex flex-col items-center">
          <FontAwesomeIcon
            icon={faUser}
            className=""
            style={{ width: "20px", height: "20px" }}
          />
          <span className="absolute text-[9px] font-[800] leading-snug mt-6">
            ESTADO
          </span>
        </div>
        <div className="relative flex flex-col items-center w-full mx-4">
          <div className="w-full bg-textCategories h-2 rounded-full">
            <div
              className="bg-textBtn h-2 rounded-full"
              style={{ width: "54%" }}
            ></div>
          </div>
          <span className="absolute text-[9px] font-[800] leading-snug mt-4">
            Plan Carrera - Parrillero
          </span>
        </div>
        <div className="text-[9px] font-[800] leading-snug">54/100</div>
      </section>
    </div>
  );
};

export default Main;
