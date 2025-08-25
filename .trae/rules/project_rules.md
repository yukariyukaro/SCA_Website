# React 组件开发规范与最佳实践

## 1. 组件结构
- 所有组件必须为函数组件，禁止新建class组件。
- 组件必须顶层定义，禁止在组件内部再定义子组件。
- 组件文件命名采用大驼峰，如`MyComponent.tsx`。

## 2. Props与类型
- 必须为props定义TypeScript类型或接口。
- 组件props应支持`className`扩展，便于样式定制。
- 禁止直接修改props，props只读。

## 3. Hooks使用
- 必须遵循Hooks规则（只能在顶层、只能在函数组件/自定义Hook中调用）。
- 复杂副作用拆分为多个useEffect，避免副作用混用。
- useMemo/useCallback仅用于性能瓶颈场景，依赖项必须准确。

## 4. 状态管理
- 局部状态优先用useState，跨组件用Context或第三方库（如Zustand）。
- 禁止将副作用逻辑混入render流程。

## 5. 性能优化
- 组件props复杂对象/函数建议用useMemo/useCallback包裹。
- 复用组件建议用React.memo包裹。
- 禁止无意义的useEffect依赖抑制（如eslint-disable-next-line）。

## 6. 可维护性
- 组件职责单一，拆分粒度适中。
- 组件内逻辑复杂建议拆分自定义Hook。
- 组件导出默认export，必要时命名导出辅助类型/方法。

## 7. 与Tailwind结合
- className拼接建议用classnames库或模板字符串。
- 动态样式用条件拼接className实现。
- 组件暴露className，支持外部样式扩展。

## 8. 参考文档
- [React官方文档](https://react.dev/learn/your-first-component)
- [Hooks规则](https://react.dev/reference/rules/rules-of-hooks)
- [组件最佳实践](https://react.dev/learn/component-design)
alwaysApply: true
---
# Tailwind CSS 代码规范与响应式设计指南

## 1. 核心理念
- 强调“原子化”/“工具类优先”开发，所有样式优先用Tailwind原生utility class实现。
- 禁止冗余自定义CSS，除非Tailwind无法覆盖。
- 推荐使用`@apply`仅在复用场景下抽象组件样式。

## 2. 响应式设计
- 必须使用Tailwind的断点前缀（如`sm: md: lg: xl:`）实现响应式布局。
- 推荐优先使用flex/grid等布局工具类，结合gap、justify、items等实现自适应。
- 图片、容器等宽高建议用`w-`、`h-`、`max-w-`、`min-h-`等类，必要时用`object-fit`、`aspect-ratio`。
- 复杂场景可用`@container`和容器查询变体。

## 3. 状态与变体
- 鼠标悬停、聚焦、禁用等状态必须用Tailwind的变体（如`hover:`、`focus:`、`disabled:`等）。
- 支持深色模式时，统一用`dark:`前缀。
- 组合变体时，顺序建议：`dark:md:hover:`。

## 4. 主题与定制
- 统一在`tailwind.config.js`中扩展主题色、间距、字体等。
- 组件/页面如需特殊色值，优先通过theme扩展，不直接写hex。
- 推荐使用`prettier-plugin-tailwindcss`自动排序class。

## 5. 组件化与可维护性
- 复用UI建议封装React组件，样式通过props传递className拼接。
- 禁止在组件内直接写style属性覆盖Tailwind样式，除非实现复杂动画或特殊场景。
- 复杂布局优先用Tailwind的grid、flex、gap等组合实现。

## 6. 与React结合
- className建议用模板字符串或classnames库拼接，避免冗长拼接。
- 动态样式推荐用条件渲染拼接className。
- 组件props暴露className，便于外部扩展。

## 7. 参考文档
- [官方核心概念](https://tailwindcss.com/docs/utility-first)
- [响应式设计](https://tailwindcss.com/docs/responsive-design)
- [状态变体](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [主题定制](https://tailwindcss.com/docs/theme)
- [组件化最佳实践](https://tailwindcss.com/docs/styling-with-utility-classes)
alwaysApply: true