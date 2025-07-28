import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import Authprovider from './Context/Authprovider'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
AOS.init({
  duration: 1000,
  once: true,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router}>



        </RouterProvider>
        <Toaster position="top-right" />
      </Authprovider>
    </QueryClientProvider>
  </StrictMode>,
)
