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
} from '../ui/sidebar';

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
    <aside className={`w-72 lg:w-80 shrink-0 bg-white rounded-xl border shadow-sm ${className}`} aria-label="侧边栏导航">
      {/* 头部标题 */}
      <div className="p-4 border-b border-gray-200">
        <SidebarGroupLabel className="m-0 p-0">
          <span className="text-lg sm:text-xl font-semibold text-gray-800">{title}</span>
        </SidebarGroupLabel>
      </div>
      {/* 菜单内容：高度自适应，超出时内部滚动 */}
      <SidebarGroupContent className="max-h-[80vh] overflow-y-auto p-3 sm:p-4">
        <UISidebarMenu>
          {items.map((item) => (
            <RenderItem
              key={item.id}
              item={item}
              currentPath={location.pathname}
              onLeafClick={() => onClose?.()}
              expanded={expanded}
              onToggle={toggle}
            />
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
        <SidebarMenuSubButton asChild isActive={isActive} className={`${level > 0 ? 'ml-4' : ''} h-10 sm:h-11 text-base sm:text-lg`}>
          <button type="button" onClick={() => onToggle(item.id)} className="flex w-full items-center gap-3 justify-between">
            <span className="flex items-center gap-3">
              {item.icon && <i className={`${item.icon} text-gray-400 text-lg sm:text-xl`} />}
              <span className="truncate">{item.label}</span>
            </span>
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform ${isExpanded ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </SidebarMenuSubButton>
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
      {item.path ? (
        level > 0 ? (
          <SidebarMenuSubButton asChild isActive={isActive} className="h-10 sm:h-11 text-base sm:text-lg">
            <Link to={item.path} onClick={onLeafClick} className="flex items-center gap-3">
              {item.icon && <i className={`${item.icon} text-gray-400 text-lg sm:text-xl`} />}
              <span className="truncate">{item.label}</span>
            </Link>
          </SidebarMenuSubButton>
        ) : (
          <SidebarMenuSubButton asChild isActive={isActive} className="h-10 sm:h-11 text-base sm:text-lg">
            <Link to={item.path} onClick={onLeafClick} className="flex items-center gap-3">
              {item.icon && <i className={`${item.icon} text-gray-400 text-lg sm:text-xl`} />}
              <span className="truncate">{item.label}</span>
            </Link>
          </SidebarMenuSubButton>
        )
      ) : (
        <SidebarMenuSubButton isActive={isActive} className={`${level > 0 ? 'ml-4' : ''} h-10 sm:h-11 text-base sm:text-lg flex items-center gap-3`}>
          {item.icon && <i className={`${item.icon} text-gray-400 text-lg sm:text-xl`} />}
          <span className="truncate">{item.label}</span>
        </SidebarMenuSubButton>
      )}
    </UISidebarMenuItem>
  );
};