import React from 'react';
import { Link } from 'react-router-dom';
import type { DropdownMenuProps } from '../../types/navigation';

/**
 * 下拉菜单组件
 * 显示导航菜单项列表，支持键盘导航和无障碍访问
 */
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  isOpen,
  onItemClick,
  className = ''
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`
        absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 sm:w-72 md:w-80
        bg-gradient-to-b from-white to-orange-50 rounded-lg shadow-xl border border-orange-200
        py-2 z-50
        transition-all duration-200 ease-out
        ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        ${className}
      `}
      role="menu"
      aria-label="导航菜单"
    >
      {items.map((item, index) => (
        <Link
          key={item.id}
          to={item.path}
          className="
            block px-4 py-3 text-gray-700
            hover:bg-gradient-to-r hover:from-orange-100 hover:to-orange-200 hover:text-orange-700
            transition-all duration-150 ease-in-out
            focus:bg-gradient-to-r focus:from-orange-100 focus:to-orange-200 focus:text-orange-700 focus:outline-none
            border-b border-orange-100 last:border-b-0
          "
          role="menuitem"
          tabIndex={0}
          onClick={() => onItemClick?.(item)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onItemClick?.(item);
            }
          }}
        >
          <div className="flex flex-col">
            <span className="font-medium text-sm">
              {item.label}
            </span>
            {item.description && (
              <span className="text-xs text-gray-500 mt-1">
                {item.description}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};