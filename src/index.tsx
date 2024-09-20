import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from "./App";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

library.add(fab);

const msalInstance = new PublicClientApplication(msalConfig);

const root = document.getElementById('root');

if (root) {
  const  rootElement = createRoot(root);
    rootElement.render(
        <StrictMode>
          <MsalProvider instance={msalInstance}>
          <App />
          </MsalProvider>
        
        </StrictMode>
    );
}