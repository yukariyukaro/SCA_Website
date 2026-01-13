# 頁面開發指南（依現有頁面實作風格整理）

本文以以下既有檔案為基準整理：

- [index.tsx](file:///d:/works/SCA_Website/src/routes/index.tsx)
- [layout.tsx（ResourceOverview）](file:///d:/works/SCA_Website/src/pages/ResourceOverview/layout.tsx)
- [Home.tsx](file:///d:/works/SCA_Website/src/pages/Home.tsx)
- [page.tsx（殘疾人士證明）](file:///d:/works/SCA_Website/src/pages/ResourceOverview/disability-certificate/page.tsx)

重要規則：專案內所有「頁面展示文字」一律使用繁體中文。

---

## 1. 專案頁面共通結構

### 1.1 路由層（`src/routes/index.tsx`）

- 使用 `React.lazy(() => import(...))` 進行路由層級的懶載入。
- 使用巢狀路由搭配 `Outlet` 組合頁面層級 Layout。
- 使用 `Navigate` 在分類入口做預設子頁導向（例如 `resources/transportation` 會導向 `discount`）。
- `routes` 以陣列物件定義，結構清晰且可擴充：父級 `element` + `children`。

新增頁面/路由時建議遵循：

- 在 `index.tsx` 頂部集中新增 `const Page = React.lazy(() => import(...))`。
- 在對應父路由的 `children` 內新增子路由項目。
- 若是分類入口，使用 `{ index: true, element: <Navigate to="xxx" replace /> }` 建立預設頁。

### 1.2 Layout 層（`src/pages/ResourceOverview/layout.tsx`）

資源總覽頁採用一致的頁面框架：

- 頁首：`<HomeHeader />`
- 麵包屑：`<Breadcrumb />`
- 內容區：左側 `<SidebarMenu />` + 右側 `<main>` 顯示 `<Outlet />`
- 頁尾：`<Footer />`
- 行動版選單：`<MobileMenuDialog />`（透過 Outlet Context 控制開關）

因此新增資源類別頁面時，通常只需要負責 `<Outlet />` 位置的內容頁，不需要重複 Header/Footer。

### 1.3 內容頁層（例：`disability-certificate/page.tsx`）

- 內容頁偏向「純內容渲染」，使用 Tailwind 進行排版。
- 常用 `space-y-*` 組織段落間距，並保持文字大小一致（多為 `text-lg`）。
- 優先復用現有 UI 元件：例如提示用 `Attention`、圖示用 `TelephoneIcon`。

---

## 2. 程式碼風格（依現有頁面）

### 2.1 React 與 TypeScript

- 一律使用函式元件：`const Page: React.FC = () => { ... }`
- 需要型別時在檔案內宣告（例：`OutletContextType`）。
- 與路由互動使用 `react-router-dom`：
  - 導航：`useNavigate`
  - 取得路徑：`useLocation`
  - 巢狀渲染：`Outlet`
  - 上下文：`useOutletContext`

### 2.2 Import 與檔案組織

既有檔案呈現的慣例：

- React / router 的 import 放最上方。
- 元件 import 依相對路徑引用（例如 `../../components/...`）。
- 路由檔將 lazy import 集中在檔案頂部，便於掃描與管理。

### 2.3 不建議做的事（避免破壞一致性）

- 不要在內容頁重複引入/渲染 `HomeHeader`、`Footer`（除非該頁不在 Layout 下）。
- 不要把大量樣式改成 inline style；既有頁面主要使用 Tailwind，只有少數特殊定位使用 `style={{ ... }}`（例：Home 橙色背景延伸）。
- 不要新增簡體中文的頁面展示文字。

---

## 3. Tailwind 樣式規範（依現有頁面寫法）

### 3.1 版面與容器

常見版面容器：

- 內容寬度：`mx-auto max-w-7xl`
- 內距：`px-4 lg:px-6 py-6`
- 左右欄：`flex items-start gap-6`
- 內容卡片：`bg-white rounded-xl shadow-sm p-6`

### 3.2 文字與標題

ResourceOverview 標題風格（建議延用）：

- 主標：`text-3xl font-bold text-[#a45a52] mb-6`

內容頁段落常見：

- 段落：`text-lg leading-relaxed text-gray-700/text-gray-800`
- 強調：`font-medium` / `font-semibold` / `important-text`（現有 class）
- 區塊標題：`text-lg font-bold text-gray-900`

### 3.3 區塊間距與清單

- 區塊間距優先用 `space-y-*`（例：`space-y-6`、`space-y-4`、`space-y-2`）。
- 清單使用 Tailwind 原生清單樣式：
  - 有序：`list-decimal list-inside`
  - 縮排：`ml-4`

### 3.4 響應式寫法

首頁（`Home.tsx`）呈現的寫法：

- 佈局切換：`flex flex-col lg:flex-row`
- 寬度比例：`w-full lg:w-2/5` / `w-full lg:w-3/5`
- 文字尺寸逐級提升：`text-base sm:text-xl lg:text-2xl`

建議新增頁面時，優先沿用這種 `sm:`、`lg:` 斷點節奏。

---

## 4. 建議優先復用的元件（依現有頁面）

### 4.1 全站框架

- `HomeHeader`：頁首（Logo/導覽/裝飾）
- `Footer`：頁尾
- `Breadcrumb`：麵包屑

### 4.2 ResourceOverview 專用導覽

- `SidebarMenu`：桌面側邊選單（搭配 `resourceSidebarItems`）
- `MobileMenuDialog`：行動版選單彈窗

### 4.3 內容頁 UI 元件

- `Attention`：溫馨提示區塊（適合放在頁面頂部）
- `TelephoneIcon`：電話圖示（內嵌於文字）
- `ImageWithState`：首頁輪播圖片，帶載入/錯誤狀態（適合任何需要顯示圖片的地方）

### 4.4 導航按鈕（首頁）

- `NavigationButton`：首頁主導航按鈕（支援下拉選單）
- 型別：`NavigationConfig`（`src/types/navigation`）

---

## 5. ResourceOverview 新增頁面步驟（推薦流程）

以新增 `resources/xxx` 的內容頁為例：

1. 在 `src/pages/ResourceOverview/.../page.tsx` 建立內容頁元件（函式元件 + Tailwind 排版）。
2. 在 `src/routes/index.tsx`：
   - 新增 lazy import（頂部 `const XxxPage = React.lazy(...)`）
   - 在 `resources` 對應區塊加入 `{ path: 'xxx', element: <XxxPage /> }`
3. 在 [layout.tsx（ResourceOverview）](file:///d:/works/SCA_Website/src/pages/ResourceOverview/layout.tsx) 的 `titleMap` 補上新路徑對應標題（確保標題為繁體中文）。
4. 若需要側邊選單入口，同步更新 `resourceSidebarItems`（位於 `src/pages/ResourceOverview/_sidebar.config`）。

---

## 6. 推薦頁面骨架（可直接改名套用）

```tsx
import React from 'react';

const ExamplePage: React.FC = () => {
  return (
    <div className="space-y-6 text-gray-800">
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">標題（繁體中文）</h2>
        <p className="text-lg leading-relaxed">
          內容段落（繁體中文）。
        </p>
      </section>
    </div>
  );
};

export default ExamplePage;
```

---

## 7. 檢查清單（提交前快速自檢）

- 頁面所有展示文字皆為繁體中文。
- 內容頁不重複渲染 Header/Footer（除非不在 Layout 下）。
- 排版優先使用 Tailwind（`space-y-*`、`text-lg`、`leading-relaxed` 等一致風格）。
- ResourceOverview 新頁面已同步更新 `titleMap`（避免標題顯示預設值）。
- 路由懶載入維持集中管理（`src/routes/index.tsx` 頂部）。

