import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Authprovider from './Auth.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authprovider>
  </React.StrictMode>
);


