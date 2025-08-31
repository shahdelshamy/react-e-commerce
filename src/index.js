import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';   // add this
import Layout from './layouts/Layout';
import HomePage from './pages//HomePage';
import CartPage from './pages/CartPage';
import { Provider } from 'react-redux';
import {store} from './rtk/store';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        path:'',
        element:<HomePage />
      },
      {
        path: 'cart',
        element:<CartPage />
      }
    ]
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
