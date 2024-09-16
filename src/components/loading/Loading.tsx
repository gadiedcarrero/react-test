import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading: React.FC = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const numElements = 12; // Número de elementos en el círculo
  const elements = Array.from({ length: numElements });

  useEffect(() => {
    if (loadingRef.current) {
      const tl = gsap.timeline({ repeat: -1 });
      elements.forEach((_, i) => {
        const angle = (i / numElements) * 360;
        const x = Math.cos((angle * Math.PI) / 180) * 16; // Radio del círculo
        const y = Math.sin((angle * Math.PI) / 180) * 16; // Radio del círculo
        tl.fromTo(
          loadingRef.current!.children[i], // Añadir el operador de no-null assertion (!)
          { opacity: 0, x: 0, y: 0 },
          { opacity: 1, x, y, duration: 0.5, ease: "power1.inOut" },
          i * 0.1
        ).to(
          loadingRef.current!.children[i], // Añadir el operador de no-null assertion (!)
          { opacity: 0, duration: 0.5, ease: "power1.inOut" },
          (i + numElements) * 0.1
        );
      });
    }
  }, [elements]);

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute w-16 h-16 rounded-full flex items-center justify-center">
        <div ref={loadingRef} className="absolute w-full h-full flex items-center justify-center">
          {elements.map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#9a9a9a] rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;