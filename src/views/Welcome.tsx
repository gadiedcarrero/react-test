import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import imgPerfil from "@assets/Perfil.svg";
import Loading from "@/components/loading/Loading";
import AnimatedFigures from "@/components/animatedfigures/AnimatedFigures";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { callMsGraph, getUserPhoto } from "../graph";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { instance, accounts } = useMsal();
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState(imgPerfil); // Default image

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    if (welcomeRef.current) {
      welcomeRef.current.style.opacity = "1";
      gsap.fromTo(
        welcomeRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  useEffect(() => {
    if (accounts.length > 0) {
      const request = {
        ...loginRequest,
        account: accounts[0],
      };

      instance.acquireTokenSilent(request).then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          const firstName = response.displayName.split(" ")[0];
          setUserName(firstName);
        });

        getUserPhoto(response.accessToken).then((photoUrl) => {
          if (photoUrl) {
            setUserPhoto(photoUrl);
          }
        });
      });
    }
  }, [accounts, instance]);

  return (
    <div className="flex items-center justify-center h-screen bg-customBlue">
      <div
        ref={welcomeRef}
        className="p-10 flex flex-col items-center justify-center border h-[460px] w-[360px] rounded-[40px] bg-ligthBG overflow-hidden"
      >
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute">
            <AnimatedFigures />
          </div>
          <img
            src={userPhoto}
            alt="Perfil"
            className="w-[153px] h-[153px] rounded-full z-10"
          />
        </div>
        <h1 className="text-[24px] font-[600] mt-7 z-10">Bienvenido {userName}</h1>
        <p className="text-[14px] font-[700] text-center mt-4">
          “La calidad empieza con la educación y termina con la educación”
        </p>
        <div className="flex items-center gap-2">
          <p className="italic text-[14px] font-[300]">Kaoru Ishikawa 1950</p>
        </div>
        <div className="relative w-[153px] h-[153px] flex items-center justify-center">
          <Loading />
        </div>
      </div>
    </div>
  );
};

export default Welcome;