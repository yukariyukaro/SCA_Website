import React, { useState, useCallback } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { DropdownMenu } from './DropdownMenu';
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
  
  // 处理点击外部关闭菜单
  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);
  
  const { ref } = useClickOutside(handleClickOutside);

  // 切换菜单显示状态
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // 处理菜单项点击
  const handleItemClick = useCallback((item: NavigationItem) => {
    setIsOpen(false);
    onItemClick?.(item);
  }, [onItemClick]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        toggleMenu();
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        if (!isOpen) {
          e.preventDefault();
          setIsOpen(true);
        }
        break;
    }
  }, [isOpen, toggleMenu]);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative inline-block ${className}`}
    >
      <button
        type="button"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        className="
          group relative
          bg-[#FFB876] hover:bg-[#FF9F4D] active:bg-[#FF8C42]
          text-white font-semibold
          px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-full
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2
          shadow-lg hover:shadow-xl
          flex items-center gap-2 sm:gap-3
          min-w-[140px] sm:min-w-[160px] md:min-w-[180px]
          min-h-[48px] sm:min-h-[56px] md:min-h-[64px]
          justify-center
          text-lg sm:text-xl md:text-2xl
        "
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`${config.text}菜单`}
      >
        {/* 图标 */}
        <i 
          className={`${config.icon} text-xl sm:text-2xl md:text-3xl transition-transform duration-200 group-hover:scale-110`}
          aria-hidden="true"
        />
        
        {/* 按钮文本 */}
        <span className="whitespace-nowrap">
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

      {/* 下拉菜单 */}
      <DropdownMenu
        items={config.menuItems}
        isOpen={isOpen}
        onItemClick={handleItemClick}
      />
    </div>
  );
};