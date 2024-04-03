import Layout from "../Layout";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

export const routes =[
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/Signin",
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
    }

  ]