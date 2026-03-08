# SpecFlow Showcase

这是一个为 `AI 驱动端到端开发` 面试作业准备的独立静态站点。

## 文件

- `index.html`：单页结构
- `styles.css`：浅色 OpenAI 风格 UI
- `main.js`：竞品交互与 SpecFlow MVP 原型逻辑

## 本地预览

```powershell
cd C:\Users\cyh\Documents\ai-e2e-showcase
python -m http.server 4300
```

打开 `http://localhost:4300`

## 推荐部署

- 即时公网预览：`cloudflared tunnel --url http://localhost:4300`
- 更稳定正式版：建议部署到国内可访问的静态托管平台，例如 `EdgeOne Pages` 或 GitHub Pages / 腾讯云静态站点
