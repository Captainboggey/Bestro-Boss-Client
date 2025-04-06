import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div data-theme='light' className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
