/**
 * 左侧功能栏组件类型定义
 */

// 语言类型
export type Language = 'zh-TW' | 'zh-CN';

// 左侧功能栏项目接口
export interface LeftSidebarItemProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  tooltip?: string;
}

// 左侧功能栏主组件Props
export interface LeftSidebarProps {
  className?: string;
  onLanguageChange?: (language: Language) => void;
  currentLanguage?: Language;
  onMobileMenuToggle?: () => void; // 新增：移动端菜单切换回调
}

// 语言切换组件Props
export interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}


