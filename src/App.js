import React from 'react';
import './App.css';
import Home from './components/Home';
import Filters from '../src/components/Filters';
import RestaurantsDetails from './components/RestaurantsDetails';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/filters",
    element: <Filters/>,
  },
  {
    path: "/details/:RestaurantsName",
    element: <RestaurantsDetails/>,
  }
]);

function App() {
  return (<div ><RouterProvider router={router} /></div>);
}

export default App;
