# 左侧功能栏组件开发方案

## 1. 功能设计

### 1.1 核心功能
- **Logo展示**: 显示缩小的网站Logo，与Header保持一致
- **首页导航**: Home图标 + 说明文字，点击返回首页
- **语言切换**: 语言图标，支持繁体中文/简体中文切换
- **全局导航**: 位于所有页面最左侧，高度100%视口高度

### 1.2 技术特性
- **响应式设计**: 移动端优先，支持不同屏幕尺寸
- **固定定位**: 使用 `fixed` 定位，始终显示在左侧
- **状态管理**: 支持语言切换状态管理
- **无障碍访问**: 遵循WCAG 2.1 AA标准

## 2. UI设计

### 2.1 布局结构
```
┌─────────────────┐
│     Logo        │ ← 缩小的圆形Logo
├─────────────────┤
│  🏠 首頁        │ ← Home图标 + 说明文字
├─────────────────┤
│  🌐 語言        │ ← 语言切换图标 + 说明文字
├─────────────────┤
│                 │
│                 │ ← 预留扩展空间
│                 │
└─────────────────┘
```

### 2.2 视觉设计
- **背景色**: `bg-white` (白色背景)
- **边框**: `border-r border-gray-200` (右侧灰色边框)
- **阴影**: `shadow-lg` (左侧阴影效果)
- **圆角**: `rounded-r-xl` (右侧圆角)

### 2.3 尺寸规格
- **宽度**: 移动端 `w-16`，桌面端 `w-20`
- **高度**: `h-screen` (100%视口高度)
- **Logo尺寸**: 移动端 `w-8 h-8`，桌面端 `w-10 h-10`
- **图标尺寸**: 移动端 `w-5 h-5`，桌面端 `w-6 h-6`

## 3. 组件架构

### 3.1 文件结构
```
src/components/LeftSidebar/
├── index.ts                    # 组件导出
├── LeftSidebar.tsx            # 主组件
├── LeftSidebarItem.tsx        # 侧边栏项目组件
├── LanguageSwitcher.tsx       # 语言切换组件
└── types.ts                   # 类型定义
```

### 3.2 组件接口设计
```typescript
interface LeftSidebarProps {
  className?: string;
  onLanguageChange?: (language: 'zh-TW' | 'zh-CN') => void;
  currentLanguage?: 'zh-TW' | 'zh-CN';
}

interface LeftSidebarItemProps {
  icon: string;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}
```

## 4. 实现细节

### 4.1 响应式断点
```typescript
// 移动端优先的响应式设计
const sidebarWidth = {
  mobile: 'w-16',      // 64px
  tablet: 'w-18',      // 72px  
  desktop: 'w-20',     // 80px
  large: 'w-24'        // 96px
};
```

### 4.2 图标系统
- **Home图标**: 使用 `lucide-react` 的 `Home` 组件
- **语言图标**: 使用 `lucide-react` 的 `Globe` 组件
- **Logo**: 复用Header中的 `/img/home/logo.svg`

### 4.3 交互效果
- **悬停效果**: `hover:bg-gray-50` (悬停时背景色变化)
- **点击反馈**: `active:scale-95` (点击时轻微缩放)
- **过渡动画**: `transition-all duration-200` (平滑过渡)

## 5. 集成方案

### 5.1 路由集成
- 在 `src/routes/index.tsx` 中为所有页面添加左侧功能栏
- 使用 `Outlet` 组件确保子路由正确渲染

### 5.2 布局调整
- 修改现有页面布局，为左侧功能栏预留空间
- 调整 `max-w-7xl` 容器的左边距

### 5.3 状态管理
- 语言切换状态使用 React Context 或 Zustand
- 支持本地存储，记住用户语言偏好

## 6. 开发计划

### 6.1 第一阶段：基础组件
- [ ] 创建 `LeftSidebar` 基础组件
- [ ] 实现Logo展示功能
- [ ] 实现Home导航功能

### 6.2 第二阶段：语言切换
- [ ] 创建 `LanguageSwitcher` 组件
- [ ] 实现语言切换逻辑
- [ ] 集成国际化支持

### 6.3 第三阶段：集成测试
- [ ] 在所有页面中集成左侧功能栏
- [ ] 响应式设计测试
- [ ] 无障碍访问测试

## 7. 技术要点

### 7.1 性能优化
- 使用 `React.memo` 优化组件重渲染
- 图标组件按需导入
- 避免不必要的状态更新

### 7.2 无障碍设计
- 为所有交互元素添加 `aria-label`
- 支持键盘导航 (Tab键)
- 提供屏幕阅读器友好的文本描述

### 7.3 兼容性考虑
- 支持现代浏览器 (Chrome 90+, Firefox 88+, Safari 14+)
- 移动端触摸友好
- 支持高对比度模式

## 8. 项目规范遵循

### 8.1 代码规范
- 使用函数式组件 + Hooks模式
- 完整的TypeScript类型定义
- 遵循项目的ESLint配置

### 8.2 样式规范
- 使用Tailwind CSS原子化类名
- 移动端优先的响应式设计
- 遵循项目的Tailwind配置

### 8.3 文件组织
- 按功能模块组织组件
- 使用index.ts统一导出
- 遵循项目的命名规范

---

**创建日期**: 2025年1月22日  
**文档版本**: v1.0  
**维护者**: AI开发助手  
**状态**: 📋 待开始
