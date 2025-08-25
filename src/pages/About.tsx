import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { SidebarMenu } from '../components/SidebarMenu';
import type { SidebarMenuItem } from '../components/SidebarMenu/SidebarMenu';

const About: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 侧边栏菜单项配置
  const sidebarItems: SidebarMenuItem[] = [
    {
      id: 'mission',
      label: '項目使命',
      path: '/about/mission',
      description: '項目目標和願景介紹'
    },
    {
      id: 'team',
      label: '團隊介紹',
      path: '/about/team',
      description: '核心團隊成員信息'
    },
    {
      id: 'partners',
      label: '合作夥伴',
      path: '/about/partners',
      description: '協作機構和組織展示'
    },
    {
      id: 'contact',
      label: '聯絡方式',
      path: '/about/contact',
      description: '聯繫信息和地址'
    }
  ];

  // 根据当前路径获取页面标题和内容
  const getPageContent = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/about/mission':
        return {
          title: '項目使命',
          content: '页面項目使命（項目目標和願景介紹）'
        };
      case '/about/team':
        return {
          title: '團隊介紹',
          content: '页面團隊介紹（核心團隊成員信息）'
        };
      case '/about/partners':
        return {
          title: '合作夥伴',
          content: '页面合作夥伴（協作機構和組織展示）'
        };
      case '/about/contact':
        return {
          title: '聯絡方式',
          content: '页面聯絡方式（聯繫信息和地址）'
        };
      default:
        return {
          title: '關於我們',
          content: '页面關於我們（我們的故事）'
        };
    }
  };

  const pageContent = getPageContent();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="relative flex items-center justify-between py-4 px-6 bg-[#FFC47E] overflow-visible">
          <div className="flex items-center gap-3">
            <img src="/img/home/logo.svg" alt="logo" className="h-20 w-20 object-contain rounded-full border-4 border-white bg-white" />
            <h1 className="text-4xl font-bold text-white">{pageContent.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            {/* 返回首页按钮 */}
            <Link
              to="/"
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              aria-label="返回首页"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            {/* 侧边栏切换按钮 */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              aria-label="打开侧边栏菜单"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#a45a52] mb-6">{pageContent.title}</h2>
          <p className="text-gray-700 text-xl mb-4">{pageContent.content}</p>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* 侧边栏菜单 */}
      <SidebarMenu
        items={sidebarItems}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        title="關於我們"
      />
    </div>
  );
};

export default About; 