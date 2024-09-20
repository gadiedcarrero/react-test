// src/authConfig.js
export const msalConfig = {
    auth: {
      clientId: "090850e8-8c74-4cdd-b3c6-7bb97be16a5b",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:8080",
    },
    cache: {
      cacheLocation: "localStorage", // Puedes usar "sessionStorage" si prefieres
      storeAuthStateInCookie: false, // Set to true for IE 11 support
    },
  };
  
  export const loginRequest = {
    scopes: ["User.Read"],
  };