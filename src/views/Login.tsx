import React, { useState } from "react";
import AprenderLogo from "../../public/assets/aprender-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/welcome");
  };

  return (
    <div className=" mx-[34px] flex flex-col items-center">
      <img src={AprenderLogo} alt="Aprender" className="mb-6" />
      <div className="flex flex-col self-start w-full max-w-md">
        <h1 className="text-[24px] font-[600] mb-4">Ingreso</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faUser} className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Usuario"
              className="p-2 pl-10 bg-white rounded-[12px] w-full"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faLock} className="text-gray-400" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="p-2 pl-10 pr-10 bg-white rounded-[12px] w-full"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-400" />
            </span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2 h-[18px] w-[18px]" />
            <label htmlFor="remember" className="text-[13px] font-[700]">
              Recordar usuario y contraseña
            </label>
          </div>
          <a href="#" className="text-[13px] font-[700] self-center">
            Forgot Password?
          </a>
          <button
            type="submit"
            className="relative p-2 bg-[#5E5E5E] text-white rounded-full font-[700] flex items-center justify-center h-[60px]"
          >
            <span className="text-[18px] font-jost font-[600]">Ingresar</span>
            <span className="absolute right-2 flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <FontAwesomeIcon icon={faArrowRight} className="text-[#5E5E5E] h-[17px] w-[21px]" />
            </span>
          </button>
        </form>
        <p className="text-center text-[14px] font-[700] mt-6">
          o continuar con
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white shadow-custom"
            aria-label="Iniciar sesión con Google"
          >
            <FontAwesomeIcon icon={faGoogle} className="h-[21px] w-[21px]" />
          </button>
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white shadow-custom"
            aria-label="Iniciar sesión con Microsoft"
          >
            <FontAwesomeIcon icon={faMicrosoft} className="h-[21px] w-[21px]" />
          </button>
        </div>
        <p className="text-center text-[13px] mt-6">
          ¿Olvidaste tu contraseña?{" "}
          <a href="#" className="text-blue-500 font-[800] underline">
            Haz clic aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;