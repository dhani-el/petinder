import React from 'react';
import ReactDOM from 'react-dom/client';
import './Stylesheets/index.css'
import Login from './login'
import Homepage from './homepage';
import ChoicePage from './choicePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    <Homepage name ={"Benjamine"}/>
    <ChoicePage animal={"cats"}/>
    <div>boy</div>
  </React.StrictMode>
);
