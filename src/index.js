import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaProduto from './paginas/PaginaProduto'
import App from './App';

const roteador = createBrowserRouter ([
  {path: '/', element: <App/>},
  {path: '/sobre/:id', element: <PaginaProduto/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador}/>
  </React.StrictMode>
);

reportWebVitals();
