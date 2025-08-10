# 页面重构计划：按分类目录的 page.tsx 方案

- **状态**: [ ] 未开始  [ ] 进行中  [ ] 暂停  [ ] 阻塞  [ ] 待评审  [ ] 待上线  [ ] 已完成
- **负责人**: 开发团队
- **最后更新**: 2025-01-21

---

## 背景与问题
当前 `About.tsx`、`ResourceOverview.tsx`、`HandbookDownload.tsx` 使用在页面内定义侧栏菜单与 `useLocation + switch` 方式渲染子内容。这会导致：
- 子页面无法独立开发/维护，难以进行复杂 UI/交互与数据加载
- 路由不可按需加载，影响性能与可维护性
- 类型不统一：`Home.tsx` 使用 `NavigationItem.contentId`，侧栏使用 `SidebarMenuItem.path`

## 目标与原则
- 将每个子页面拆分为独立的 `page.tsx`，按分类放置在目录中，形成清晰的层次结构
- 使用嵌套路由与懒加载，消除页面内 `switch` 逻辑
- 抽离共享布局（头部/侧栏/页脚），复用 `SidebarMenu`
- 统一导航类型字段为 `path`，逐步移除 `contentId`
- 渐进式迁移，确保首页导航与现有链接不间断

---

## 目标目录结构（建议）
```text
src/
  pages/
    about/
      layout.tsx            # About 分类布局（Header + SidebarMenu + <Outlet />）
      mission/page.tsx
      team/page.tsx
      partners/page.tsx
      contact/page.tsx
      index/page.tsx        # /about 默认页（可选）
    resources/
      layout.tsx
      disability-certificate/page.tsx
      transportation/page.tsx
      residential-care/page.tsx
      medical-rehabilitation/page.tsx
      community-support/page.tsx
      employment-training/page.tsx
      index/page.tsx
    download/
      layout.tsx
      patient-guide/page.tsx
      caregiver-handbook/page.tsx
      exercise-guide/page.tsx
      resource-list/page.tsx
      index/page.tsx
  components/
    layout/
      PageHeader.tsx        # 可复用头部（可选）
      CategoryLayout.tsx    # 可选：通用分类布局（注入标题/侧栏配置）
  types/
    navigation.ts           # 统一为 path
  routes/
    index.tsx               # 可选：集中管理与懒加载路由
```

---

## 代码级变更指南（基于现有代码）

### 1) 路由改造（嵌套 + 懒加载）
- 在 `src/main.tsx` 改为为每个分类定义 `layout`，子路由指向对应 `page.tsx`
- 推荐将路由表抽出到 `src/routes/index.tsx` 并使用懒加载：

```tsx
// src/routes/index.tsx
import { lazy } from 'react';

// About 布局与页面
const AboutLayout = lazy(() => import('../pages/about/layout'));
const AboutIndex = lazy(() => import('../pages/about/index/page'));
const Mission = lazy(() => import('../pages/about/mission/page'));
const Team = lazy(() => import('../pages/about/team/page'));
const Partners = lazy(() => import('../pages/about/partners/page'));
const Contact = lazy(() => import('../pages/about/contact/page'));

// Resources 布局与页面（同理省略）
// Download 布局与页面（同理省略）

export const routes = [
  {
    path: '/',
    element: lazy(() => import('../App'))._,
    children: [
      { index: true, element: lazy(() => import('../pages/Home'))._ },
      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          { index: true, element: <AboutIndex /> },
          { path: 'mission', element: <Mission /> },
          { path: 'team', element: <Team /> },
          { path: 'partners', element: <Partners /> },
          { path: 'contact', element: <Contact /> },
        ],
      },
      // resources、download 同理配置
    ],
  },
];
```

在 `src/main.tsx` 中：
```tsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);
```

说明：若暂不抽离 `routes/`，也可直接在 `main.tsx` 内按上述结构配置。

### 2) 页面拆分：从 `switch` 到独立 `page.tsx`
- 将 `About.tsx`、`ResourceOverview.tsx`、`HandbookDownload.tsx` 内的 `getPageContent()` 与正文拆分到对应 `page.tsx`
- 每个分类新增一个 `layout.tsx`，包含：
  - 保持现有 Header 视觉与返回首页 `Link`，标题由当前路由或注入的 `title` 决定
  - 打开侧栏的按钮与 `SidebarMenu`
  - `Outlet` 渲染子路由页面正文
- 每个 `page.tsx` 只负责本页标题与内容，不包含侧栏与页脚逻辑
- `Footer` 仍可在 `layout.tsx` 或更外层统一渲染（当前 `Home` 使用 `Footer`，分类页也可放在各自 `layout`）

### 3) 侧栏菜单配置抽离
- 为每个分类提供独立侧栏配置（避免硬编码在页面内），例如：
```ts
// src/pages/about/_sidebar.config.ts
import type { SidebarMenuItem } from '../../components/SidebarMenu/SidebarMenu';

export const aboutSidebarItems: SidebarMenuItem[] = [
  { id: 'mission', label: '項目使命', path: '/about/mission', description: '項目目標和願景介紹' },
  { id: 'team', label: '團隊介紹', path: '/about/team', description: '核心團隊成員信息' },
  { id: 'partners', label: '合作夥伴', path: '/about/partners', description: '協作機構和組織展示' },
  { id: 'contact', label: '聯絡方式', path: '/about/contact', description: '聯繫信息和地址' },
];
```
- 对应在 `about/layout.tsx` 中注入到 `SidebarMenu`。

### 4) 类型统一：`NavigationItem` 使用 `path`
- 现状：`src/types/navigation.ts` 中 `NavigationItem` 使用 `contentId`；`SidebarMenuItem` 使用 `path`
- 统一方案：
  - 将 `NavigationItem` 更改为 `{ id, label, path, description? }`
  - 在过渡期为向后兼容，`NavigationButton` 允许读 `item.path ?? item.contentId`
  - 完成迁移后移除 `contentId`

```ts
// types/navigation.ts（目标状态）
export interface NavigationItem {
  id: string;
  label: string;
  path: string;          // 统一字段
  description?: string;
}
```

- `Home.tsx` 中的 `navigationConfigs` 将 `contentId` 字段重命名为 `path`

### 5) 首页导航对接
- 继续使用 `NavigationButton`，点击时 `navigate(item.path)`
- 菜单项与分类子页面一一对应，路径保持与路由一致

### 6) 组件复用与抽象（可选强化）
- 抽象 `PageHeader` 以统一头部视觉与返回按钮
- 抽象 `CategoryLayout`：接收 `title` 与 `sidebarItems`，内部统一渲染 Sidebar 与 Footer

---

## 兼容与迁移策略
- 第一阶段：
  - 新增目录与 `layout.tsx`、子 `page.tsx`
  - 路由切换到嵌套结构
  - `NavigationItem` 临时双字段兼容（`path ?? contentId`）
  - `SidebarMenu` 使用外部配置文件
- 第二阶段：
  - 重命名 `Home.tsx` 导航数据到 `path`
  - 清理 `contentId` 相关类型与代码
- 第三阶段：
  - 删除旧的 `About.tsx`、`ResourceOverview.tsx`、`HandbookDownload.tsx`

---

## 潜在风险与应对
- 兼容性风险：路径或导航字段更名导致 404 或跳转失败
  - 应对：过渡期保留双字段读取，新增 Playwright 路由可达性用例
- 性能影响：懒加载首屏抖动
  - 应对：在 `layout` 层提供 Skeleton/Loading 状态
- 维护成本：重复的 Header/Footer 逻辑
  - 应对：抽象 `PageHeader`、`CategoryLayout` 复用

---

## 测试策略（Windows + pnpm）
- 单元测试（可选）：
  - 组件渲染与属性（Header、SidebarMenu、CategoryLayout）
- 集成/E2E（Playwright）：
  - 启动：`pnpm dev` 后运行 Playwright 测试
  - 覆盖：
    - 从首页点击导航到各分类子页，断言标题与关键文案存在
    - 直接访问深链（例如 `/resources/transportation`）可正确渲染
    - 侧栏展开/收起、当前项高亮、返回首页按钮可用
- 无障碍：键盘导航、ARIA 属性快照检查

---

## 任务清单
- [ ] 新建目录结构（about/resources/download，各自 layout 与 index）
- [ ] 拆分 `About` 子页面到独立 `page.tsx`
- [ ] 拆分 `Resources` 子页面到独立 `page.tsx`
- [ ] 拆分 `Download` 子页面到独立 `page.tsx`
- [ ] 抽离并接入各分类 `Sidebar` 配置文件
- [ ] 路由改为嵌套 + 懒加载
- [ ] 统一类型：将 `NavigationItem.contentId` 重命名为 `path`（保兼容）
- [ ] 调整 `Home.tsx` 导航数据字段为 `path`
- [ ]（可选）抽象 `PageHeader` 与 `CategoryLayout`
- [ ] E2E 覆盖所有子路由可达性与侧栏交互
- [ ] 移除旧页面与过渡兼容代码

---

## 验收标准
- 首页导航到所有目标子页成功，深链访问成功
- 代码中不再存在 `useLocation + switch` 的页面内内容切换
- `NavigationItem` 类型只保留 `path` 字段
- Playwright 用例通过；手动检查 UI 与键盘导航正常

---

## 附：About 分类 layout 示例（伪代码）
```tsx
// src/pages/about/layout.tsx
import React, { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import { SidebarMenu } from '../../components/SidebarMenu';
import { aboutSidebarItems } from './_sidebar.config';

export default function AboutLayout() {
  const location = useLocation();
  const titleMap: Record<string, string> = {
    '/about': '關於我們',
    '/about/mission': '項目使命',
    '/about/team': '團隊介紹',
    '/about/partners': '合作夥伴',
    '/about/contact': '聯絡方式',
  };
  const title = titleMap[location.pathname] ?? '關於我們';

  return (
    <div className="min-h-screen bg-white">
      <header className="relative flex items-center justify-between py-4 px-6 bg-[#FFC47E]">
        <div className="flex items-center gap-3">
          <img src="/img/home/logo.svg" alt="logo" className="h-20 w-20 object-contain rounded-full border-4 border-white bg-white" />
          <h1 className="text-4xl font-bold text-white">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="p-2 text-white hover:bg-white/20 rounded-lg" aria-label="返回首页">
            {/* icon */}
          </Link>
          {/* 侧栏按钮（略） */}
        </div>
      </header>

      <Suspense fallback={<div className="p-8">Loading...</div>}>
        <Outlet />
      </Suspense>

      <Footer />

      <SidebarMenu items={aboutSidebarItems} isOpen={false} onClose={() => {}} title="關於我們" />
    </div>
  );
}
```

---

（本计划遵循最小化与结构化原则，正文精炼，执行条目可直接落地。）
