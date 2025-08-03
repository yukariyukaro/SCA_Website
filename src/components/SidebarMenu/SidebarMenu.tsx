import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// 侧边栏菜单项接口
export interface SidebarMenuItem {
  id: string;
  label: string;
  path?: string;
  description?: string;
  children?: SidebarMenuItem[];
  icon?: string;
}

// 侧边栏菜单组件Props
export interface SidebarMenuProps {
  items: SidebarMenuItem[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
}

/**
 * 侧边栏菜单组件
 * 支持多级菜单、双列布局和响应式设计
 */
export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen,
  onClose,
  className = '',
  title = '导航菜单'
}) => {
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // 禁止背景滚动
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* 侧边栏 */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 h-full w-80 max-w-[90vw]
          bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${className}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
      >
        {/* 头部 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 id="sidebar-title" className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="关闭菜单"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 菜单内容 */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4">
            <MenuItems 
              items={items} 
              currentPath={location.pathname}
              onItemClick={onClose}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

/**
 * 菜单项组件（递归渲染）
 */
interface MenuItemsProps {
  items: SidebarMenuItem[];
  currentPath: string;
  onItemClick: () => void;
  level?: number;
}

const MenuItems: React.FC<MenuItemsProps> = ({ 
  items, 
  currentPath, 
  onItemClick, 
  level = 0 
}) => {
  return (
    <ul className={`space-y-1 ${level > 0 ? 'ml-4' : ''}`}>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          currentPath={currentPath}
          onItemClick={onItemClick}
          level={level}
        />
      ))}
    </ul>
  );
};

/**
 * 单个菜单项组件
 */
interface MenuItemProps {
  item: SidebarMenuItem;
  currentPath: string;
  onItemClick: () => void;
  level: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  item, 
  currentPath, 
  onItemClick, 
  level 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.path && currentPath === item.path;

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleClick = () => {
    if (!hasChildren && item.path) {
      onItemClick();
    }
  };

  return (
    <li>
      <div
        className={`
          flex items-center justify-between p-3 rounded-lg
          transition-all duration-200 ease-in-out
          ${isActive 
            ? 'bg-orange-100 text-orange-700 border-l-4 border-orange-500' 
            : 'hover:bg-gray-50 text-gray-700'
          }
          ${level > 0 ? 'text-sm' : ''}
        `}
      >
        {/* 菜单项内容 */}
        <div className="flex items-center flex-1 min-w-0">
          {item.icon && (
            <span className="mr-3 text-gray-400">
              <i className={item.icon} />
            </span>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="font-medium truncate">
              {item.label}
            </div>
            {item.description && (
              <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </div>
            )}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex items-center ml-2">
          {hasChildren ? (
            <button
              onClick={handleToggle}
              className="p-1 rounded hover:bg-gray-200 transition-colors"
              aria-label={isExpanded ? '收起子菜单' : '展开子菜单'}
            >
              {isExpanded ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </button>
          ) : item.path ? (
            <Link
              to={item.path}
              onClick={handleClick}
              className="p-1 rounded hover:bg-gray-200 transition-colors"
              aria-label={`导航到 ${item.label}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : null}
        </div>
      </div>

      {/* 子菜单 */}
      {hasChildren && isExpanded && (
        <div className="mt-1">
          <MenuItems
            items={item.children!}
            currentPath={currentPath}
            onItemClick={onItemClick}
            level={level + 1}
          />
        </div>
      )}
    </li>
  );
}; 