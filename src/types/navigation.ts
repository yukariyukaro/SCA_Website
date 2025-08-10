/**
 * 导航相关类型定义
 */

// 导航菜单项接口
export interface NavigationItem {
  id: string;              // 唯一标识符
  label: string;           // 显示文本
  contentId: string;       // 对应的内容ID
  description?: string;    // 描述信息
}

// 导航按钮配置接口
export interface NavigationConfig {
  icon: string;            // FontAwesome图标类名
  text: string;            // 按钮文本
  menuItems: NavigationItem[]; // 下拉菜单项
}

// 导航按钮组件Props
export interface NavigationButtonProps {
  config: NavigationConfig;
  className?: string;      // 额外的样式类名
  onItemClick?: (item: NavigationItem) => void; // 菜单项点击回调
}

// 下拉菜单组件Props
export interface DropdownMenuProps {
  items: NavigationItem[];
  isOpen: boolean;
  onItemClick?: (item: NavigationItem) => void;
  className?: string;
}

// 点击外部关闭Hook的返回类型
export interface UseClickOutsideReturn {
  ref: React.RefObject<HTMLElement>;
}