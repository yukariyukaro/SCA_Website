import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarMenuItem } from './SidebarMenu/SidebarMenu';
import { ArrowRight } from './Icons/ArrowRight';

/**
 * Mobile menu component
 * Displays menu content directly above page content area
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
  title = '导航菜单'
}) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Auto-expand menu items that contain the current path
  useEffect(() => {
    if (isOpen) {
      const newExpanded: Record<string, boolean> = {};
      
      const findAndExpandPath = (menuItems: SidebarMenuItem[], currentPath: string) => {
        menuItems.forEach(item => {
          if (item.children) {
            // Check if any child matches current path
            const hasActiveChild = item.children.some(child => 
              child.path === currentPath || 
              (child.children && child.children.some(grandChild => grandChild.path === currentPath))
            );
            
            if (hasActiveChild) {
              newExpanded[item.id] = true;
            }
            
            // Recursively check children
            findAndExpandPath(item.children, currentPath);
          }
        });
      };
      
      findAndExpandPath(items, location.pathname);
      setExpanded(newExpanded);
    }
  }, [isOpen, items, location.pathname]);

  const toggleExpanded = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg">
      {/* Menu header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800" style={{fontSize: 'var(--font-size-lg)', fontFamily: 'Source Han Serif CN, serif'}}>
          {title}
        </h2>
        <button 
          onClick={onClose}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="关闭菜单"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Menu content */}
      <div className="max-h-[70vh] overflow-y-auto bg-white">
        <div className="py-2">
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <MobileMenuItem
                item={item}
                currentPath={location.pathname}
                onClose={onClose}
                expanded={expanded}
                onToggle={toggleExpanded}
                level={0}
              />
              {index < items.length - 1 && (
                <div className="mx-4 my-2 border-t border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Mobile menu item component (recursive rendering)
 */
interface MobileMenuItemProps {
  item: SidebarMenuItem;
  currentPath: string;
  onClose: () => void;
  expanded: Record<string, boolean>;
  onToggle: (id: string) => void;
  level: number;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  item,
  currentPath,
  onClose,
  expanded,
  onToggle,
  level
}) => {
  const hasChildren = !!(item.children && item.children.length > 0);
  const isActive = !!(item.path && currentPath === item.path);
  const isExpanded = !!expanded[item.id];
  const paddingLeft = level * 16 + 16; // 16px base + 16px per level

  if (hasChildren) {
    return (
      <div>
        <div className={`relative ${isActive ? 'border-l-4 border-[#FFC47E] bg-orange-50' : ''}`}>
          <button
            type="button"
            onClick={() => onToggle(item.id)}
            className="flex w-full items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <i className={`${item.icon} text-[#FFC47E]`} style={{fontSize: 'var(--font-size-lg)'}} />
              )}
              <span 
                className="text-black font-medium" 
                style={{fontFamily: 'Source Han Serif CN, serif', fontSize: 'var(--font-size-base)'}}
              >
                {item.label}
              </span>
            </div>
            <ArrowRight 
              className={`transition-transform text-black ${isExpanded ? 'rotate-90' : ''}`} 
              size={20} 
            />
          </button>
        </div>
        
        {isExpanded && (
          <div>
            {item.children!.map((child) => (
              <MobileMenuItem
                key={child.id}
                item={child}
                currentPath={currentPath}
                onClose={onClose}
                expanded={expanded}
                onToggle={onToggle}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${isActive ? 'border-l-4 border-[#FFC47E] bg-orange-50' : ''}`}>
      <Link
        to={item.path!}
        onClick={onClose}
        className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 transition-colors"
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        {item.icon && (
          <i className={`${item.icon} text-[#FFC47E]`} style={{fontSize: 'var(--font-size-lg)'}} />
        )}
        <span 
          className="text-black font-medium" 
          style={{fontFamily: 'Source Han Serif CN, serif', fontSize: 'var(--font-size-base)'}}
        >
          {item.label}
        </span>
      </Link>
    </div>
  );
};
