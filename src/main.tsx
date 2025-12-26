import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './routes';
import './index.css'
import { FontSizeProvider } from './contexts/FontSizeProvider';


const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FontSizeProvider>
      <Suspense fallback={<div className="p-8">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </FontSizeProvider>
  </React.StrictMode>,
)
