import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './component/Routes/Routes'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router}/>
    </HelmetProvider>
    
  </React.StrictMode>,
)
