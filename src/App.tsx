import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};

export default App;
