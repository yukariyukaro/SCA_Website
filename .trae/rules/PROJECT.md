# 「攜手同行」小腦萎縮症社區資源包網站

## 项目概括

本项目是一个基于 React + TypeScript + Vite 的现代化响应式网站，旨在为小腦萎縮症患者及其家属提供全面的社区资源信息平台。网站采用组件化架构设计，提供资源总览、关于我们、手册下载等核心功能模块，致力于成为患者和家属的重要支持工具。注意：项目内的所有文本使用繁体中文

## 技术选型

### 核心技术栈
- **前端框架**: React 19.1.0 (最新版本，支持最新特性)
- **类型系统**: TypeScript 5.8.3 (提供强类型支持)
- **构建工具**: Vite 7.0.4 (快速开发和构建)
- **路由管理**: React Router DOM 7.6.3 (单页应用路由)
- **样式框架**: Tailwind CSS 4.1.11 (原子化CSS框架)
- **包管理器**: pnpm (高效的包管理工具)

### 开发工具链
- **代码规范**: ESLint 9.30.1 + React Hooks插件
- **测试框架**: Playwright 1.54.1 (E2E测试)
- **开发服务器**: Vite Dev Server (热重载支持)
- **类型检查**: TypeScript编译器

### UI组件库
- **轮播组件**: Swiper 11.2.10 (现代化轮播解决方案)
- **图标系统**: FontAwesome (通过CDN引入)
- **响应式设计**: Tailwind CSS响应式工具类

## 项目结构 / 模块划分

```
d:\works\website/
├── public/                           # 静态资源目录
│   └── img/                         # 图片资源
│       ├── home/                    # 首页相关图片
│       │   ├── logo.svg            # 网站Logo
│       │   ├── flower1.svg         # 装饰花朵1
│       │   ├── flower2.svg         # 装饰花朵2
│       │   ├── flower3.svg         # 装饰花朵3
│       │   ├── arrow-down.svg      # 下拉箭头图标
│       │   └── homeSwiper/         # 首页轮播图片
│       └── partners/               # 合作伙伴Logo
├── src/                             # 源代码目录
│   ├── components/                  # 可复用组件
│   │   ├── Footer.tsx              # 页脚组件 (已实现)
│   │   ├── NavigationButton/       # 导航按钮组件 (规划中)
│   │   │   ├── index.ts            # 组件导出
│   │   │   ├── NavigationButton.tsx # 主组件
│   │   │   ├── DropdownMenu.tsx    # 下拉菜单子组件
│   │   │   └── types.ts            # 类型定义
│   │   └── ui/                     # 通用UI组件 (扩展)
│   ├── pages/                      # 页面组件
│   │   ├── Home.tsx                # 首页 (已实现)
│   │   ├── About.tsx               # 关于我们页面
│   │   ├── ResourceOverview.tsx    # 资源总览页面
│   │   └── HandbookDownload.tsx    # 手册下载页面
│   ├── hooks/                      # 自定义Hooks
│   │   └── useClickOutside.ts      # 点击外部关闭Hook (规划中)
│   ├── types/                      # 全局类型定义
│   │   └── navigation.ts           # 导航相关类型 (规划中)
│   ├── assets/                     # 编译时资源
│   ├── App.tsx                     # 应用根组件
│   ├── main.tsx                    # 应用入口文件
│   ├── App.css                     # 全局样式
│   └── index.css                   # 基础样式
├── .vscode/                        # VS Code配置
├── .specstory/                     # 项目历史记录
├── 导航按钮组件重构开发文档.md        # 组件开发规范文档
├── PROJECT.md                      # 项目规则文档 (本文件)
├── package.json                    # 项目依赖配置
├── vite.config.js                  # Vite构建配置
├── tailwind.config.js              # Tailwind CSS配置
├── tsconfig.json                   # TypeScript配置
└── eslint.config.js                # ESLint配置
```

## 核心功能 / 模块详解

### 1. 首页模块 (Home)
**状态**: ✅ 已实现
- **Header区域**: 包含Logo、网站标题和装饰花朵
- **导航区域**: 三个主要功能按钮 (待重构为组件)
- **内容区域**: 项目介绍文本和图片轮播
- **Footer区域**: 合作伙伴信息和版权声明

### 2. 导航按钮组件 (NavigationButton)
**状态**: 🔄 开发中
- **功能特性**: 可复用的导航按钮，支持下拉菜单
- **技术实现**: React + TypeScript + Tailwind CSS
- **交互设计**: 悬停效果、键盘导航、无障碍访问
- **响应式**: 适配移动端和桌面端

### 3. 资源总览模块 (ResourceOverview)
**状态**: 📋 规划中
- **医疗资源**: 专业医疗机构和服务信息
- **支援小组**: 患者和家属互助组织
- **复康服务**: 物理治疗和职业治疗资源
- **日常生活支援**: 辅助器具和生活技巧

### 4. 关于我们模块 (About)
**状态**: 📋 规划中
- **项目使命**: 项目目标和愿景介绍
- **团队介绍**: 核心团队成员信息
- **合作伙伴**: 协作机构和组织展示
- **联络方式**: 联系信息和地址

### 5. 手册下载模块 (HandbookDownload)
**状态**: 📋 规划中
- **患者指南**: PDF格式的患者手册
- **照护者手册**: 家属照护指导文档
- **运动指南**: 适合的运动和复健指导
- **资源清单**: 完整的资源列表文档

## 数据模型

### 导航配置数据结构
```typescript
interface NavigationItem {
  id: string;              // 唯一标识符
  label: string;           // 显示文本
  path: string;            // 路由路径
  description?: string;    // 描述信息
}

interface NavigationConfig {
  icon: string;            // FontAwesome图标类名
  text: string;            // 按钮文本
  menuItems: NavigationItem[]; // 下拉菜单项
}
```

### 合作伙伴数据结构
```typescript
interface Partner {
  id: string;              // 合作伙伴ID
  name: string;            // 机构名称
  logo: string;            // Logo图片路径
  category: 'organizer' | 'education' | 'funding' | 'cooperation'; // 合作类型
  description?: string;    // 机构描述
}
```

## 其他项目规则

### 开发规范文档
- **[导航按钮组件重构开发文档.md](./导航按钮组件重构开发文档.md)**: 详细的组件开发规范，包含:
  - React + TypeScript 最佳实践
  - 组件设计模式和架构
  - 代码风格和命名规范
  - 性能优化策略
  - 无障碍访问规范
  - 测试策略和方法

### 代码规范要点
1. **组件开发**: 使用函数式组件 + Hooks模式
2. **类型安全**: 所有组件必须有完整的TypeScript类型定义
3. **样式规范**: 使用Tailwind CSS原子化类名，保持响应式设计
4. **文件组织**: 按功能模块组织，使用index.ts统一导出
5. **命名规范**: 组件使用PascalCase，文件使用camelCase
6. **性能优化**: 合理使用React.memo、useCallback、useMemo
7. **无障碍**: 遵循WCAG 2.1 AA标准，支持键盘导航和屏幕阅读器

### Git工作流规范
1. **分支策略**: 使用feature分支开发，合并到main分支
2. **提交信息**: 使用约定式提交格式 (Conventional Commits)
3. **代码审查**: 所有代码变更需要经过审查
4. **测试要求**: 新功能必须包含相应的测试用例

## 开发状态跟踪

| 模块/功能 | 状态 | 计划完成日期 | 实际完成日期 | 备注与问题追踪 |
|-----------|------|-------------|-------------|---------------|
| 首页基础布局 | ✅ 已完成 | - | 已完成 | 包含Header、导航、内容区、Footer |
| Footer组件 | ✅ 已完成 | - | 已完成 | 合作伙伴信息展示 |
| 导航按钮组件设计 | ✅ 已完成 | - | 已完成 | 完成技术方案和开发文档 |
| NavigationButton组件 | ✅ 已完成 | 2025-01-21 | 2025-01-21 | 可复用导航按钮，支持下拉菜单 |
| DropdownMenu组件 | ✅ 已完成 | 2025-01-21 | 2025-01-21 | 下拉菜单子组件 |
| useClickOutside Hook | ✅ 已完成 | 2025-01-21 | 2025-01-21 | 点击外部关闭功能 |
| 首页导航重构 | ✅ 已完成 | 2025-01-22 | 2025-01-21 | 使用新组件替换现有导航 |
| 资源总览页面 | 📋 待开始 | 2025-01-25 | - | 资源分类展示页面 |
| 关于我们页面 | 📋 待开始 | 2025-01-25 | - | 团队和项目介绍页面 |
| 手册下载页面 | 📋 待开始 | 2025-01-25 | - | 文档下载功能页面 |
| 响应式优化 | 📋 待开始 | 2025-01-26 | - | 移动端适配优化 |
| 无障碍访问优化 | 📋 待开始 | 2025-01-26 | - | ARIA属性和键盘导航 |
| 性能优化 | 📋 待开始 | 2025-01-27 | - | 代码分割和懒加载 |
| 测试用例编写 | 📋 待开始 | 2025-01-28 | - | 单元测试和E2E测试 |

## 代码检查与问题记录

### 当前技术债务
1. **首页导航按钮**: 当前使用内联数组和Link组件，需要重构为可复用组件
2. **类型定义缺失**: 部分数据结构缺少TypeScript类型定义
3. **组件拆分**: 首页组件过于庞大，需要进一步拆分
4. **样式优化**: 部分样式类名过长，需要提取为组件级别的样式

### 性能优化机会
1. **图片优化**: 实现图片懒加载和WebP格式支持
2. **代码分割**: 按路由实现代码分割
3. **缓存策略**: 实现静态资源缓存策略
4. **Bundle分析**: 定期分析打包体积，优化依赖

### 无障碍访问改进
1. **键盘导航**: 完善Tab键导航顺序
2. **ARIA标签**: 添加完整的ARIA属性
3. **颜色对比度**: 确保符合WCAG标准
4. **屏幕阅读器**: 优化屏幕阅读器体验

## 环境设置与部署指南

### 本地开发环境
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 代码检查
pnpm lint

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

### 开发工具配置
- **VS Code**: 推荐安装TypeScript、ESLint、Tailwind CSS插件
- **浏览器**: 推荐使用Chrome DevTools进行调试
- **Git**: 配置用户信息和SSH密钥

### 部署配置
- **构建输出**: `dist/` 目录包含生产构建文件
- **静态资源**: 所有静态文件位于 `public/` 目录
- **环境变量**: 使用 `.env` 文件管理环境配置
- **CDN配置**: FontAwesome通过CDN引入，确保网络可访问性

## 项目质量保证

### 代码质量
- **TypeScript**: 启用严格模式，确保类型安全
- **ESLint**: 自动检查代码规范和潜在问题
- **Prettier**: 自动格式化代码风格
- **Husky**: Git hooks确保提交前代码质量

### 测试策略
- **单元测试**: 使用Jest + React Testing Library
- **集成测试**: 测试组件间交互
- **E2E测试**: 使用Playwright测试用户流程
- **视觉回归测试**: 确保UI一致性

### 性能监控
- **Lighthouse**: 定期进行性能审计
- **Bundle Analyzer**: 监控打包体积
- **Core Web Vitals**: 关注用户体验指标
- **错误监控**: 生产环境错误追踪

---

**最后更新**: 2025年1月20日  
**文档版本**: v1.0  
**维护者**: AI开发助手