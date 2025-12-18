import React from 'react';
import { CaseSensitive } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useFontSize } from '@/contexts/FontSizeProvider';
import { LeftSidebarItem } from '@/components/LeftSidebar/LeftSidebarItem';

export const FontSizeSwitcher: React.FC = () => {
  const { setFontSize } = useFontSize();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full">
            <LeftSidebarItem
              icon={<CaseSensitive className="w-5 h-5 sm:w-6 sm:h-6" />}
              text="字體大小"
              tooltip="調整字體大小"
            />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right">
        <DropdownMenuItem onClick={() => setFontSize('16px')}>
          小
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFontSize('18px')}>
          中
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFontSize('20px')}>
          大
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};