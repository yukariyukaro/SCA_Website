import React from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';
import { SidebarMenu } from '../../components/SidebarMenu';
import { MobileMenuDialog } from '../../components/MobileMenuDialog';
import { Breadcrumb } from '../../components/Breadcrumb';
import { downloadSidebarItems } from './_sidebar.config';

const titleMap: Record<string, string> = {
  '/download': '手冊下載',
};

// 定義Outlet Context的類型
interface OutletContextType {
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
}

const DownloadLayout: React.FC = () => {
  const location = useLocation();
  const { isMobileMenuOpen, onCloseMobileMenu } = useOutletContext<OutletContextType>();
  const title = titleMap[location.pathname] ?? '手冊下載';

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />
      <Breadcrumb />
      
      {/* 移動端菜單彈窗 */}
      <MobileMenuDialog
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
        items={downloadSidebarItems}
        title="手冊下載"
      />
      
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-6">
        <div className="flex items-start gap-6">
          <SidebarMenu 
            items={downloadSidebarItems} 
            isOpen={true} 
            onClose={() => {}} 
            title="手冊下載" 
            className="sticky top-6 self-start" 
          />
          <main className="flex-1 min-w-0 bg-white rounded-xl shadow-sm p-6">
            <h1 className="text-3xl font-bold text-[#a45a52] mb-6">{title}</h1>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DownloadLayout;
