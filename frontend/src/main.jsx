import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import SignUp from "./assets/pages/signUp/SignUp";
import About from "./assets/pages/About/About";
import Profile from "./assets/pages/Profile/Profile";
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import Layout from './Layout';
import SignIn from './assets/pages/SignIn/SignIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/signin",
        element: <SignIn/>,
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
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <NextUIProvider>
  <RouterProvider router={router} />
  <ToastContainer position="bottom-left" autoClose={2000}   />
  </NextUIProvider>
    </PersistGate>
   </Provider>
  </>,
)
