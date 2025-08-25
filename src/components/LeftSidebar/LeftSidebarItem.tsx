import React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface LeftSidebarItemProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  tooltip?: string;
}

/**
 * 左侧功能栏项目组件
 * 显示单个功能项，支持图标、文字、点击事件和工具提示
 */
export const LeftSidebarItem: React.FC<LeftSidebarItemProps> = ({
  icon,
  text,
  onClick,
  isActive = false,
  className = '',
  tooltip
}) => {
  const itemContent = (
    <button
      onClick={onClick}
      className={cn(
        'w-full h-12 sm:h-14 flex flex-col items-center justify-center gap-1',
        'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset',
        'rounded-lg',
        'active:scale-95', // 点击时轻微缩放
        isActive && 'bg-blue-50 text-blue-700 hover:bg-blue-100',
        className
      )}
      aria-label={text}
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs sm:text-sm font-medium leading-tight text-center px-1">
        {text}
      </span>
    </button>
  );

  // 如果有工具提示，则包装在Tooltip中
  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {itemContent}
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-gray-900 text-white text-sm">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return itemContent;
};
