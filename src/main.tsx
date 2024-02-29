import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { register } from 'swiper/element/bundle';
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
register();
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
