import React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MobileMenuButtonProps } from './types';

/**
 * 移动端菜单按钮组件
 * 位于语言切换器下方，仅在移动端显示
 */
export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  onClick,
  className = ''
}) => {
  return (
    <div className={cn('w-full', className)}>
      <button
        onClick={onClick}
        className={cn(
          'w-full h-12 sm:h-14 flex flex-col items-center justify-center gap-1',
          'text-gray-600 hover:text-gray-800',
          'rounded-lg',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        )}
        aria-label="開啟移動端菜單"
        type="button"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          <Menu className="w-full h-full" />
        </div>
        <span className="text-xs sm:text-sm font-medium leading-tight text-center px-1">
          菜單
        </span>
      </button>
    </div>
  );
};
