import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu as UISidebarMenu,
  SidebarMenuItem as UISidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuButton,
} from '../ui/sidebar';
import { ArrowRight } from '../Icons/ArrowRight';

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
 * 移动端隐藏，桌面端显示
 */
export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, isOpen: _isOpen, onClose, className = '', title = '导航菜单' }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // 不再通过按钮触发显示，侧栏常驻；保留 Esc 关闭仅当 onClose 存在
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <aside className={`hidden md:block w-72 lg:w-80 shrink-0 ${className}`} aria-label="侧边栏导航">
      {/* 头部标题 */}
      <div className="p-4">
        <SidebarGroupLabel className="m-0 p-0">
          <span className="font-bold text-black" style={{fontFamily: 'Source Han Serif CN, serif', fontSize: 'var(--font-size-lg)'}}>{title}</span>
        </SidebarGroupLabel>
      </div>
      {/* 菜单内容：高度自适应，超出时内部滚动 */}
      <SidebarGroupContent className="max-h-[80vh] overflow-y-auto px-0">
        <UISidebarMenu>
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <RenderItem
                item={item}
                currentPath={location.pathname}
                onLeafClick={() => onClose?.()}
                expanded={expanded}
                onToggle={toggle}
              />
              {index < items.length - 1 && (
                <div className="mx-4 my-2 border-t border-[#212121] opacity-30" />
              )}
            </React.Fragment>
          ))}
        </UISidebarMenu>
      </SidebarGroupContent>
    </aside>
  );
};

/**
 * 菜单项组件（递归渲染）
 */
interface RenderItemProps {
  item: SidebarMenuItem;
  currentPath: string;
  onLeafClick: () => void;
  expanded: Record<string, boolean>;
  onToggle: (id: string) => void;
  level?: number;
}

/**
 * 单个菜单项组件
 */
const RenderItem: React.FC<RenderItemProps> = ({ item, currentPath, onLeafClick, expanded, onToggle, level = 0 }) => {
  const hasChildren = !!(item.children && item.children.length > 0);
  const isActive = !!(item.path && currentPath === item.path);
  const isExpanded = !!expanded[item.id];

  if (hasChildren) {
    return (
      <UISidebarMenuItem>
        <div className={`relative ${isActive ? 'border-l-4 border-[#FFC47E]' : ''}`}>
          <SidebarMenuSubButton asChild isActive={false} className={`${level > 0 ? 'ml-4' : ''} hover:bg-gray-50 ${isActive ? 'pl-6' : 'pl-4'}`} style={{height: 'clamp(3rem, 4vw, 3.25rem)'}}>
            <button type="button" onClick={() => onToggle(item.id)} className="flex w-full items-center gap-3 justify-between" style={{fontFamily: 'Source Han Serif CN, serif', fontSize: 'var(--font-size-base)'}}>
              <span className="flex items-center gap-3">
                {item.icon && <i className={`${item.icon} text-[#FFC47E]`} style={{fontSize: 'var(--font-size-lg)'}} />}
                <span className="truncate text-black font-medium">{item.label}</span>
              </span>
              <ArrowRight className={`transition-transform text-black ${isExpanded ? 'rotate-90' : ''}`} style={{width: 'clamp(1.25rem, 3vw, 1.5rem)', height: 'clamp(1.25rem, 3vw, 1.5rem)'}} size={20} />
            </button>
          </SidebarMenuSubButton>
        </div>
        {isExpanded && (
          <SidebarMenuSub>
            {item.children!.map((child) => (
              <SidebarMenuSubItem key={child.id}>
                <RenderItem
                  item={child}
                  currentPath={currentPath}
                  onLeafClick={onLeafClick}
                  expanded={expanded}
                  onToggle={onToggle}
                  level={level + 1}
                />
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        )}
      </UISidebarMenuItem>
    );
  }

  return (
    <UISidebarMenuItem>
      <div className={`relative ${isActive ? 'border-l-4 border-[#FFC47E]' : ''}`}>
        <SidebarMenuButton asChild isActive={false} className={`${level > 0 ? 'ml-4' : ''} hover:bg-gray-50 ${isActive ? 'pl-6' : 'pl-4'}`} style={{height: 'clamp(3rem, 4vw, 3.25rem)'}}>
           <Link to={item.path!} onClick={onLeafClick} className="flex items-center gap-3" style={{fontFamily: 'Source Han Serif CN, serif', fontSize: 'var(--font-size-base)'}}>
             {item.icon && <i className={`${item.icon} text-[#FFC47E]`} style={{fontSize: 'var(--font-size-lg)'}} />}
             <span className="truncate text-black font-medium">{item.label}</span>
           </Link>
         </SidebarMenuButton>
      </div>
    </UISidebarMenuItem>
  );
};