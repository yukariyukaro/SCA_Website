import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LeftSidebar } from './LeftSidebar';

/**
 * 应用主布局组件
 * 包含左侧功能栏和页面内容区域
 */
const AppLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 处理移动端菜单切换
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // 关闭移动端菜单
  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 左侧功能栏 */}
      <LeftSidebar onMobileMenuToggle={handleMobileMenuToggle} />
      
      {/* 页面内容区域 - 为左侧功能栏预留空间 */}
      <div className="ml-16 sm:ml-20 md:ml-24 lg:ml-28">
        <Outlet context={{ isMobileMenuOpen, onCloseMobileMenu: handleCloseMobileMenu }} />
      </div>
    </div>
  );
};

export default AppLayout;
