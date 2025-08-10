import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';
import { SidebarMenu } from '../../components/SidebarMenu';
import { aboutSidebarItems } from './_sidebar.config';

const titleMap: Record<string, string> = {
  '/about': '關於我們',
  '/about/mission': '項目使命',
  '/about/team': '團隊介紹',
  '/about/partners': '合作夥伴',
  '/about/contact': '聯絡方式',
};

const AboutLayout: React.FC = () => {
  const location = useLocation();
  const title = titleMap[location.pathname] ?? '關於我們';

  return (
    <div className="min-h-screen bg-gray-100">
      <HomeHeader />
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-6">
        <div className="flex items-start gap-6">
          <SidebarMenu items={aboutSidebarItems} isOpen={true} onClose={() => {}} title="關於我們" className="sticky top-6 self-start" />
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

export default AboutLayout;



