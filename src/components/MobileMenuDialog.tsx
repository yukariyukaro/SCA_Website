import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { SidebarMenu, SidebarMenuItem } from './SidebarMenu/SidebarMenu';

/**
 * 移動端菜單彈窗組件
 * 使用Sheet組件實現，位置在頁面上方正中間
 */
export interface MobileMenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
  items: SidebarMenuItem[];
  title?: string;
}

export const MobileMenuDialog: React.FC<MobileMenuDialogProps> = ({
  isOpen,
  onClose,
  items,
  title = '導航菜單'
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="top" 
        className="w-[90vw] max-w-md mx-auto mt-4 rounded-xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="pb-4">
          <SheetTitle className="text-lg font-semibold text-gray-800">
            {title}
          </SheetTitle>
        </SheetHeader>
        
        {/* 在彈窗中顯示SidebarMenu內容 */}
        <div className="flex-1 overflow-y-auto">
          <SidebarMenu
            items={items}
            isOpen={isOpen}
            onClose={onClose}
            className="w-full border-0 shadow-none"
            title=""
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
