import React from "react";
import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signinagain from "./components/Signinagain";
import Signup from "./components/Signup";
import SignUpForm from "./components/signup2/SignUpForm";
import OtpPage from "./components/OtpPage";
import HomePage from "./pages/HomePage";
import FeaturedPage from "./pages/FeaturedPage";
import Fanfavspg from "./pages/Fanfavspg";

const routes = [
    // {
    //   path: "/",
    //   element: <Navbar />,
    // },
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path:"/Signin",
      element:<Signin/>
    },
    {
      path:"/signinImdb",
      element:<Signinagain/>
    },
    {
      path:"/signup",
      element:<SignUpForm/>
    },
    // {
    //   path:"/otpauth",
    //   element:<OtpPage/>
    // },
    {
      path:"/posts",
      element:<FeaturedPage/>
    },
    {
      path:"/fanfavs",
      element:<Fanfavspg/>
    }
  ];
  
  const Router = () => {
    const router = createBrowserRouter(routes);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;
  