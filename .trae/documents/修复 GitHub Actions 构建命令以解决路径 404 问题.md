# 修复 GitHub Pages 部署 404 问题

## 问题根源
部署流程中使用了错误的构建命令（默认为 `vite build`），导致 `vite.config.js` 中的 `base` 路径被设置为 `/`，而非 GitHub Pages 所需的 `/SCA_Website/`。这使得所有静态资源（JS/CSS）的请求路径错误。

## 解决方案
修改 GitHub Actions 的工作流配置，强制使用专门为 GitHub Pages 配置的构建命令。

## 执行步骤

### 1. 修改 `.github/workflows/deploy.yml`
- 读取该文件以确认当前配置。
- 将构建步骤中的 `pnpm build` 修改为 `pnpm build:github`。
- `pnpm build:github` 会执行 `vite build --mode github`，从而激活 `vite.config.js` 中 `base: '/SCA_Website/'` 的配置。

### 2. 验证（无需代码变更）
- 确认 `vite.config.js` 和 `package.json` 的配置已就绪（之前的步骤已确认）。
- 提交更改后，GitHub Actions 将自动触发新的构建，生成的 `index.html` 将包含正确的 `<script src="/SCA_Website/assets/...">` 引用。

## 预期结果
- 网站重新部署后，资源请求将指向 `https://yukariyukaro.github.io/SCA_Website/assets/...`。
- 404 错误消失，页面正常加载。
