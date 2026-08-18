# 杨两只 Portfolio

杨两只的个人品牌内容顾问 Portfolio。使用 Astro 构建，案例通过 Markdown 管理，可发布至 GitHub Pages。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 新增案例

复制 `src/content/cases/` 中任意 Markdown 文件，修改文件名和 Frontmatter 信息，再替换正文即可。案例会自动出现在 Case Studies 页面。

## 发布

推送到 GitHub 的 `main` 分支后，GitHub Actions 会自动构建并发布网站。首次发布时，需要在仓库 Settings → Pages 中将 Source 设为 GitHub Actions。

正式上线前，请在 `astro.config.mjs` 中把 `site` 修改为实际网站地址，并在 Contact 页面补充邮箱与小红书账号。
