import Layout from "../Layout";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/signUp/SignUp";

export const routes =[
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
    }
  ]