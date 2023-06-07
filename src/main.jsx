import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes/Routes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1280px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
