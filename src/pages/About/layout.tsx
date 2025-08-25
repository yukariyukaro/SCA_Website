import React from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';
import { SidebarMenu } from '../../components/SidebarMenu';
import { MobileMenuDialog } from '../../components/MobileMenuDialog';
import { Breadcrumb } from '../../components/Breadcrumb';
import { aboutSidebarItems } from './_sidebar.config';

const titleMap: Record<string, string> = {
  '/about': '關於我們',
  '/about/mission': '項目使命',
  '/about/team': '團隊介紹',
  '/about/partners': '合作夥伴',
  '/about/contact': '聯絡方式',
};

// 定義Outlet Context的類型
interface OutletContextType {
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
}

const AboutLayout: React.FC = () => {
  const location = useLocation();
  const { isMobileMenuOpen, onCloseMobileMenu } = useOutletContext<OutletContextType>();
  const title = titleMap[location.pathname] ?? '關於我們';

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />
      <Breadcrumb />
      
      {/* 移動端菜單彈窗 */}
      <MobileMenuDialog
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
        items={aboutSidebarItems}
        title="關於我們"
      />
      
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-6">
        <div className="flex items-start gap-6">
          <SidebarMenu items={aboutSidebarItems} isOpen={true} onClose={() => {}} title="關於我們" className="sticky top-6 self-start" />
          <main className="flex-1 min-w-0 bg-white rounded-xl shadow-sm p-6">
            <h1 className="font-bold text-[#a45a52] mb-6" style={{fontSize: '1.875rem'}}>{title}</h1>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutLayout;



