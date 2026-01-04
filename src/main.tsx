import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './routes';
import './index.css'

// 引入本地字体
import '@fontsource/noto-serif-tc/400.css';
import '@fontsource/noto-serif-tc/600.css';
import '@fontsource/noto-serif-tc/700.css';
import '@fontsource/noto-sans-sc/400.css';
import '@fontsource/noto-sans-sc/700.css';

import { FontSizeProvider } from './contexts/FontSizeProvider';
import { FullPageLoading } from './components/ui/FullPageLoading';

// 移除 HTML 中的静态 Loading
const CleanupHtmlLoading: React.FC = () => {
  React.useEffect(() => {
    const loader = document.getElementById('app-loading');
    if (loader) {
      // 添加淡出效果
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  }, []);
  return null;
};


const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CleanupHtmlLoading />
    <FontSizeProvider>
      <Suspense fallback={<FullPageLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </FontSizeProvider>
  </React.StrictMode>,
)
