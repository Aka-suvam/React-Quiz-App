import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Start from './Component/Start/Start.jsx';
import Quiz from './Component/Quiz/Quiz.jsx'

import App from './App.jsx'

const appRouter=createBrowserRouter([

  {
    path:'/',
    element:<App/>,

    children:[
      {
        path:'/',
        element:<Start/>
      },
      {
        path:'/quiz',
        element:<Quiz/>
      }
      
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
