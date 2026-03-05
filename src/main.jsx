import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './component/About.jsx'
import Home from './component/Home.jsx'
import Service from './component/Service.jsx'
import Contact from './component/Contact.jsx'


const allRouter = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/about',
          element:<About />
        },
        {
          path:'/service',
          element:<Service />
        },
        {
          path:'/contact',
          element:<Contact />
        }
      ]
    },
    

  ])
createRoot(document.getElementById('root')).render(
  <RouterProvider router = {allRouter}></RouterProvider>
)
