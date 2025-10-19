import React, { useState, useCallback } from 'react';
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import type { NavigationButtonProps, NavigationItem } from '../../types/navigation';

/**
 * 可复用的导航按钮组件
 * 支持下拉菜单、键盘导航、无障碍访问和响应式设计
 */
export const NavigationButton: React.FC<NavigationButtonProps> = ({
  config,
  className = '',
  onItemClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // 移除外部点击 Hook，改由 Shadcn/Radix 管理 focus 与外部点击

  // 切换菜单显示状态
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // 处理菜单项点击
  const handleItemClick = useCallback((item: NavigationItem) => {
    setIsOpen(false);
    onItemClick?.(item);
  }, [onItemClick]);

  // 处理键盘事件（主要保留回车/空格打开与 Esc 关闭）
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, [toggleMenu]);

  return (
    <div className={`relative inline-block ${className}`}>
      <ShadcnDropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            className="
              group relative
              bg-[#FFC47E] hover:bg-[#FF9F4D] active:bg-[#FF8C42]
              text-white font-medium
              px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-[16px]
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2
              shadow-md hover:shadow-lg
              flex items-center gap-2
              min-w-[120px] sm:min-w-[140px] md:min-w-[160px]
              min-h-[40px] sm:min-h-[48px] md:min-h-[56px]
              justify-center
              text-base sm:text-lg md:text-xl
            "
            aria-expanded={isOpen}
            aria-haspopup="menu"
            aria-label={`${config.text}菜单`}
          >
            {/* 图标 */}
            <i 
              className={`${config.icon} text-lg sm:text-xl md:text-2xl transition-transform duration-200 group-hover:scale-110`}
              aria-hidden="true"
            />
            
            {/* 按钮文本 */}
            <span className="whitespace-nowrap text-white">
              {config.text}
            </span>
            
            {/* 下拉箭头 */}
            <svg
              className={`
                w-4 h-4 transition-transform duration-200
                ${isOpen ? 'rotate-180' : 'rotate-0'}
              `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center">
          {config.menuItems.map((item) => (
            <DropdownMenuItem
              key={item.id}
              onClick={() => handleItemClick(item)}
            >
              <span className="font-medium text-sm">
                {item.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </ShadcnDropdownMenu>
    </div>
  );
};