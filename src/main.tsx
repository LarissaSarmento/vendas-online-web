import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { loginRoutes } from './modules/routes';

const erroRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Error</div>,
  },
]);

const router = {
  ...loginRoutes,
  ...erroRouter,
}
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
