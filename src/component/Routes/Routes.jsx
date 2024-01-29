import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import ErrorMessage from "../Error/ErrorMessage";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement:<ErrorMessage/>,
      children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:'/skill',
            element:<Skills/>
        },
        {
            path:'/project',
            element:<Projects/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
      ],
    },
  ]);
  