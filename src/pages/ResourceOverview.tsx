import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import { SidebarMenu } from '../components/SidebarMenu';
import type { SidebarMenuItem } from '../components/SidebarMenu/SidebarMenu';

const ResourceOverview: React.FC = () => {
  const location = useLocation();

  // 侧边栏菜单项配置
  const sidebarItems: SidebarMenuItem[] = [
    {
      id: 'disability-certificate',
      label: '殘疾人士證明',
      path: '/resources/disability-certificate',
      description: '殘疾人士證明申請和相關服務'
    },
    {
      id: 'transportation',
      label: '交通出行',
      path: '/resources/transportation',
      description: '無障礙交通和出行支援服務'
    },
    {
      id: 'residential-care',
      label: '居住&日間照顧',
      path: '/resources/residential-care',
      description: '住宿和日間照顧服務'
    },
    {
      id: 'medical-rehabilitation',
      label: '醫療&復康',
      path: '/resources/medical-rehabilitation',
      description: '醫療和復康治療服務'
    },
    {
      id: 'community-support',
      label: '攜手共行',
      path: '/resources/community-support',
      description: '社區支援和互助服務'
    },
    {
      id: 'employment-training',
      label: '就業&培訓',
      path: '/resources/employment-training',
      description: '就業支援和職業培訓服務'
    }
  ];

  // 根据当前路径获取页面标题和内容
  const getPageContent = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/resources/disability-certificate':
        return {
          title: '殘疾人士證明',
          content: '页面殘疾人士證明（殘疾人士證明申請和相關服務）'
        };
      case '/resources/transportation':
        return {
          title: '交通出行',
          content: '页面交通出行（無障礙交通和出行支援服務）'
        };
      case '/resources/residential-care':
        return {
          title: '居住&日間照顧',
          content: '页面居住&日間照顧（住宿和日間照顧服務）'
        };
      case '/resources/medical-rehabilitation':
        return {
          title: '醫療&復康',
          content: '页面醫療&復康（醫療和復康治療服務）'
        };
      case '/resources/community-support':
        return {
          title: '攜手共行',
          content: '页面攜手共行（社區支援和互助服務）'
        };
      case '/resources/employment-training':
        return {
          title: '就業&培訓',
          content: '页面就業&培訓（就業支援和職業培訓服務）'
        };
      default:
        return {
          title: '資源總覽',
          content: '页面資源總覽（小腦萎縮症社區資源包）'
        };
    }
  };

  const pageContent = getPageContent();

  return (
    <div className="min-h-screen bg-white">
      {/* 全站 Header */}
      <HomeHeader />

      {/* 页面主体：侧栏与内容水平对齐，整页可滚动 */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-6">
        <div className="flex items-start gap-6">
          {/* 常驻侧栏（左侧） */}
          <SidebarMenu
            items={sidebarItems}
            isOpen={true}
            onClose={() => {}}
            title="資源總覽"
            className="sticky top-6 self-start"
          />

          {/* 中间内容区域 */}
          <main className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold text-[#a45a52] mb-6">{pageContent.title}</h1>
            <p className="text-gray-700 text-xl mb-4">{pageContent.content}</p>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResourceOverview; 