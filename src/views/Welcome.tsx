import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 3000); // Redirige a /main después de 3 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-loginBG">
      <h1 className="text-3xl font-bold">Welcome!</h1>
    </div>
  );
};

export default Welcome;