import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './routes';
import './index.css'


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
