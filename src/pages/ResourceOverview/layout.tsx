import React from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';
import { SidebarMenu } from '../../components/SidebarMenu';
import { MobileMenuDialog } from '../../components/MobileMenuDialog';
import { Breadcrumb } from '../../components/Breadcrumb';
import { resourceSidebarItems } from './_sidebar.config';

const titleMap: Record<string, string> = {
  '/resources': '資源總覽',
  '/resources/disability-certificate': '殘疾人士證明',
  '/resources/transportation/discount': '交通優惠',
  '/resources/transportation/accessibility': '無障礙出行',
  '/resources/transportation/accessibility/rehabus': '復康巴',
  '/resources/transportation/accessibility/other-buses': '其他巴士',
  '/resources/transportation/accessibility/taxi': '的士',
  '/resources/residential-care': '居住&日間照顧',
  '/resources/medical-rehabilitation': '醫療&復康',
  '/resources/community-support': '攜手共行',
  '/resources/employment-training': '就業&培訓',
};

// 定義Outlet Context的類型
interface OutletContextType {
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
}

const ResourceOverviewLayout: React.FC = () => {
  const location = useLocation();
  const { isMobileMenuOpen, onCloseMobileMenu } = useOutletContext<OutletContextType>();
  const title = titleMap[location.pathname] ?? '資源總覽';

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />
      <Breadcrumb />
      
      {/* 移動端菜單彈窗 */}
      <MobileMenuDialog
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
        items={resourceSidebarItems}
        title="資源總覽"
      />
      
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-6">
        <div className="flex items-start gap-6">
          <SidebarMenu items={resourceSidebarItems} isOpen={true} onClose={() => {}} title="資源總覽" className="sticky top-6 self-start" />
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

export default ResourceOverviewLayout;
