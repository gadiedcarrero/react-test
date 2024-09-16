import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import figura1 from "@assets/LineBlack.svg";
import figura2 from "@assets/LineBlack.svg";
import figura3 from "@assets/OvalBlack.svg";
import figura4 from "@assets/OvalGreen.svg";
import figura5 from "@assets/OvalOrange.svg";
import figura6 from "@assets/StarRed.svg";
import figura7 from "@assets/StarYellow.svg";
import figura8 from "@assets/TriangleBlue.svg";
import figura9 from "@assets/TriangleGreen.svg";

const figuras = [figura1, figura2, figura3, figura4, figura5, figura6, figura7, figura8, figura9];

const AnimatedFigures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const animations = figuras.map((figura) => {
        const figuraElement = document.createElement("img");
        figuraElement.src = figura;
        figuraElement.className = "absolute w-3 h-3"; // Ajusta el tamaño de las figuras
        container.appendChild(figuraElement);

        const animateFigura = () => {
          return gsap.to(figuraElement, {
            x: Math.random() * container.offsetWidth,
            y: Math.random() * container.offsetHeight,
            duration: 2 + Math.random() * 3, // Duración aleatoria entre 2 y 5 segundos
            ease: "power1.inOut",
            onComplete: animateFigura,
          });
        };

        return animateFigura();
      });

      return () => {
        animations.forEach((animation) => animation.kill());
      };
    }
  }, []);

  return <div ref={containerRef} className="relative w-[250px] h-[250px]"></div>;
};

export default AnimatedFigures;