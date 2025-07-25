import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import Authprovider from './Context/Authprovider'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast'

AOS.init({
  duration: 1000,
  once: true,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}>



      </RouterProvider>
      <Toaster position="top-right" />
    </Authprovider>
  </StrictMode>,
)
