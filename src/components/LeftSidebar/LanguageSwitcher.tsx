import React from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Language, LanguageSwitcherProps } from './types';

/**
 * 语言切换组件
 * 显示语言图标，暂不实现具体功能
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  className = ''
}) => {
  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'w-full h-12 sm:h-14 flex flex-col items-center justify-center gap-1',
          'text-gray-600',
          'rounded-lg',
          'cursor-default' // 表示不可点击
        )}
        aria-label="語言切換"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          <Globe className="w-full h-full" />
        </div>
        <span className="text-xs sm:text-sm font-medium leading-tight text-center px-1">
          語言
        </span>
      </div>
    </div>
  );
};
