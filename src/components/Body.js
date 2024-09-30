import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import { RouterProvider } from 'react-router-dom';
import OurProgram from './OurProgram';
import Collaborations from './Collaborations';


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/ourprogram",
            element:<OurProgram/>

        },
        {
            path:"/about",
            element:<About/>

        },
        {
            path:"/contact",
            element:<Contact/>

        },
        {
            path:"/blog",
            element:<Blog/>

        },
        {
            path:"/collabrations",
            element:<Collaborations/>

        },
    ]);
  return (
    <div>
        <RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body