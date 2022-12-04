// Import React Components
import React from 'react';
import ReactDOM from 'react-dom/client';


//import Css Styles 
import './index.css';


// Import React Router Components
import {BrowserRouter} from 'react-router-dom'

// Import Custom Components
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

