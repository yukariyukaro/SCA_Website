# 背景
文件名：root_deploy.md
创建于：2026-01-04
创建者：AI Assistant
Yolo模式：Off

# 任务描述
用户希望将项目部署在域名根路径，同时保留在 GitHub Pages (子路径 `/SCA_Website/`) 部署的能力。
策略采用“同一套代码，多次构建”，即通过构建时的配置（如环境变量）来决定资源的基础路径（base path）。
同时需要修复代码中可能存在的硬编码绝对路径问题。

# 项目概览
- 之前的 Vite 配置硬编码了 `/SCA_Website/` 作为 base。
- 组件中使用了 `${import.meta.env.BASE_URL}` 拼接路径。
- 目标是使构建产物既能适应根路径（`/`），也能适应子路径（`/SCA_Website/`），并使用相对路径引用资源。

⚠️ 警告：永远不要修改此部分 ⚠️
1. 系统思维：从整体架构到具体实现进行分析
2. 辩证思维：评估多种解决方案及其利弊
3. 创新思维：打破常规模式，寻求创造性解决方案
4. 批判性思维：从多个角度验证和优化解决方案
5. 测试驱动开发：进行开发任务前，首先制定好详细的测试方案
⚠️ 警告：永远不要修改此部分 ⚠️

# 分析
- `vite.config.js` 硬编码了 base，导致根路径部署时资源路径错误。
- `src` 中的组件使用了 `${import.meta.env.BASE_URL}`，这在一定程度上是动态的，但用户希望使用更清晰的相对路径。
- 项目使用 `HashRouter`，这使得相对路径引用（相对于 index.html）非常安全且兼容性好。

# 提议的解决方案
1. 修改 `vite.config.js`，根据 `mode` 动态设置 `base`。
   - `mode === 'github'` -> `/SCA_Website/`
   - 默认 -> `/`
2. 添加 `build:github` 脚本到 `package.json`。
3. 全局替换 `${import.meta.env.BASE_URL}img/...` 为 `img/...`。

# 当前执行步骤："[步骤编号和名称]"
- 已完成所有步骤。

# 任务进度
- [x] 创建任务文件
- [x] 修改 `vite.config.js`
- [x] 修改 `package.json`
- [x] 替换组件中的绝对路径引用

# 最终审查
- `vite.config.js` 已正确配置动态 base。
- `package.json` 包含 `build:github`。
- `HomeHeader.tsx`, `Footer.tsx`, `LeftSidebar.tsx`, `Home.tsx` 以及 `ResourceOverview` 相关页面均已更新。
- 实施与计划一致。
