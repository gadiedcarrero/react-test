import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";
import { useIsAuthenticated } from "@azure/msal-react";

const App: React.FC = () => {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};

export default App;
