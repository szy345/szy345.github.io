# DB>AI 技术博客

一个数据库运维老兵的个人博客，主题是「AI 时代的数据库运维与转型」。使用 Astro 构建的纯静态站点，暗色科技风，支持 Mermaid 动态流程图与客户端路由（切页不刷新、音乐不中断）。

## 特性

- **暗色科技风**：网格背景 + 青蓝渐变 + 终端主视觉
- **终端打字机**：首页终端窗口逐行打印自我介绍
- **动态流程图**：文章内 `mermaid` 代码块自动渲染为带流光动画的流程图
- **竖排毛笔字**：首页左侧「莫道桑榆晚，为霞尚满天」书法装饰，逐字浮现，随滚动固定
- **背景音乐**：右上角播放器，多曲目循环、音量/曲目记忆，切页不中断
- **客户端路由**：页面切换不整页刷新，动画平滑过渡
- **自动部署**：push 到 main 后 GitHub Actions 自动构建并发布到 Pages

## 技术栈

- [Astro](https://astro.build) 7（静态站点）
- [Mermaid](https://mermaid.js.org) 11（流程图渲染）
- 无前端框架，纯 HTML/CSS/原生 JS

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 本地开发，默认 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建产物
```

## 目录结构

```
src/
├── layouts/
│   └── BaseLayout.astro      # 基础布局：导航 + 页脚 + 音乐播放器
├── pages/
│   ├── index.astro           # 首页：终端 + 最新文章 + 能力卡片
│   ├── blog.astro            # 文章列表：按分类分组
│   ├── blog/[...slug].astro  # 文章详情页
│   └── about.astro           # 关于页
├── components/
│   ├── TerminalHero.astro    # 终端打字机主视觉
│   ├── Calligraphy.astro     # 首页左侧竖排毛笔字
│   ├── MusicPlayer.astro     # 背景音乐播放器
│   ├── Mermaid.astro         # 流程图渲染
│   └── Reveal.astro          # 滚动浮现动画
├── content/posts/            # 文章（Markdown）
├── data/categories.js        # 分类配置（可自定义）
└── styles/global.css         # 全局样式与主题变量
```

## 如何写文章

1. 在 `src/content/posts/` 新建 `日期-slug.md` 文件
2. 填写 frontmatter（见下方）
3. 正文用 Markdown，流程图用 mermaid 代码块

```markdown
---
title: 文章标题
description: 一句话摘要，显示在卡片上
pubDate: 2026-08-03
category: db-ops
tags:
  - MySQL
  - 慢SQL
featured: true
---

正文内容…

```mermaid
flowchart LR
  A --> B
```
```

### frontmatter 字段

| 字段 | 必填 | 说明 |
|:-----|:----:|:-----|
| title | 是 | 文章标题 |
| description | 是 | 一句话摘要 |
| pubDate | 是 | 发布日期，新日期排前 |
| category | 是 | 分类 key，见 `src/data/categories.js` |
| tags | 否 | 标签列表 |
| featured | 否 | 是否精选，暂用于后续扩展 |

## 分类自定义

所有分类定义集中在 `src/data/categories.js` 一个文件。想加分类、改名称、调图标、换顺序，只改这个文件的 `categories` 数组即可，首页卡片、列表页、详情页会自动同步。

```js
// 新增一个分类示例
{ key: 'life', icon: '🌱', name: '生活随笔', desc: '工作之外的随笔与想法' }
```

然后文章的 `category` 字段填对应 key 即可。

## 部署

站点通过 GitHub Actions 自动部署到 GitHub Pages：

- 推送代码到 `main` 分支触发 `.github/workflows/deploy.yml`
- 自动执行 `npm ci && npm run build`，产物上传到 Pages
- 部署完成后站点自动更新，约 1 分钟生效

首次使用需在 GitHub 仓库的 Settings → Pages 中，将 Source 设置为 GitHub Actions。

## 常用自定义

- **背景音乐**：把 mp3 放进 `public/music/`，编辑 `MusicPlayer.astro` 顶部的 `tracks` 数组即可增删曲目
- **书法字**：文案与字形在 `Calligraphy.astro`，字体为子集化后的 woff2（`public/fonts/`），如更换需用 fontTools 重新子集化
- **主题色**：`src/styles/global.css` 顶部的 `:root` CSS 变量

## 许可

内容与代码仅供学习交流，商用请自行确认字体授权（演示夏行楷为免费商用字体）。
