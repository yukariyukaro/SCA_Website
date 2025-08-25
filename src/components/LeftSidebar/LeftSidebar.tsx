import React from 'react';
import { Home, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LeftSidebarItem } from './LeftSidebarItem';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LeftSidebarProps, Language } from './types';

/**
 * 左侧功能栏主组件
 * 位于所有页面最左侧，包含Logo、Home导航、语言切换功能和移动端菜单按钮
 */
export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  className = '',
  onLanguageChange,
  currentLanguage = 'zh-TW',
  onMobileMenuToggle
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 处理Home导航点击
  const handleHomeClick = () => {
    navigate('/');
  };

  // 处理语言切换
  const handleLanguageChange = (language: Language) => {
    onLanguageChange?.(language);
  };

  // 处理移动端菜单切换
  const handleMobileMenuToggle = () => {
    onMobileMenuToggle?.();
  };

  // 判断当前是否在首页
  const isHomePage = location.pathname === '/';

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen',
        'w-16 sm:w-20 md:w-24 lg:w-28', // 使用标准Tailwind断点
        'bg-white border-r border-gray-300 shadow-lg rounded-r-xl',
        'flex flex-col items-center py-4',
        'z-50',
        className
      )}
      aria-label="左侧功能栏"
    >
      {/* Logo区域 */}
      <div className="mb-6 px-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 bg-white overflow-hidden shadow-md">
          <img
            src="/img/home/logo.svg"
            alt="攜手同行"
            className="w-full h-full object-contain p-1"
          />
        </div>
      </div>

      {/* 功能项目区域 */}
      <div className="flex-1 flex flex-col items-center space-y-3 w-full px-2">
        {/* Home导航 */}
        <LeftSidebarItem
          icon={<Home className="w-5 h-5 sm:w-6 sm:h-6" />}
          text="首頁"
          onClick={handleHomeClick}
          isActive={isHomePage}
          tooltip="返回首頁"
        />

        {/* 分隔线 */}
        <div className="w-full h-px bg-gray-200" />

        {/* 语言切换 */}
        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />

        {/* 移动端菜单按钮 - 仅在移动端显示 */}
        <div className="block md:hidden w-full">
          <LeftSidebarItem
            icon={<Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            text="菜單"
            onClick={handleMobileMenuToggle}
            tooltip="打開導航菜單"
          />
        </div>
      </div>

      {/* 底部预留空间 */}
      <div className="mt-auto pb-4">
        {/* 可以在这里添加更多功能项目 */}
      </div>
    </aside>
  );
};
