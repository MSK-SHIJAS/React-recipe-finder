import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Detail';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Meals from './Meals';
import Allitems from './Allitems';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}></Route>
 <Route path='/detail/:catName' element={<Detail/>}></Route>
 <Route path='/meals/:meals' element={<Meals/>}></Route>
 <Route path='/allitems' element={<Allitems/>}></Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
