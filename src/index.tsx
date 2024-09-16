import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from "./App";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const root = document.getElementById('root');

if (root) {
  const  rootElement = createRoot(root);
    rootElement.render(
        <StrictMode>
        <App />
        </StrictMode>
    );
}