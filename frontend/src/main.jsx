import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Login from "./assets/pages/Login/Login";
import SignUp from "./assets/pages/signUp/SignUp";
import About from "./assets/pages/About/About";
import Profile from "./assets/pages/Profile/Profile";
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import Layout from './Layout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <NextUIProvider>
  <RouterProvider router={router} />
  </NextUIProvider>
  </>,
)
