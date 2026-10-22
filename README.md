# 记账（iPhone 网页版 / PWA）

无广告、无需账号，适配 iPhone 屏幕与安全区域，跟随系统浅色/深色外观。数据保存在浏览器 `localStorage`。提供多账户余额管理（微信、支付宝、银行卡、现金及自定义账户）、每笔收支选择账户、CSV 导出、包含账户的 JSON 备份和恢复、分类统计、月份切换。

## 文件
- `index.html`：完整 UI、CSS 和业务逻辑
- `manifest.webmanifest`：可安装网页应用信息
- `sw.js`：Service Worker，缓存静态资源以支持离线打开
- `icon-192.png` / `icon-512.png`：主屏幕图标

## 最省事的部署方法（只用 iPhone 也能完成）
需要把这些文件放到一个支持 HTTPS 的静态网站托管服务。以下示例使用 GitHub Pages；GitHub 网页在 iPhone Safari 上可操作，但首次创建仓库/上传文件可能比较麻烦。

1. 在 Safari 打开 https://github.com 并登录/注册。
2. 创建一个新的 **Public** 仓库，例如 `jizhang-app`。
3. 使用仓库页面的 **Add file → Upload files** 上传本 ZIP 解压后的全部文件（请上传文件本身，不要只上传 ZIP）；也可在电脑上一次性上传。
4. 提交（Commit）文件。
5. 进入仓库 **Settings → Pages**。
6. 在 **Build and deployment** 里选 **Deploy from a branch**，分支选 `main`，目录选 `/(root)`，保存。
7. 等待部署完成，网址一般为 `https://你的用户名.github.io/jizhang-app/`。请以 GitHub Pages 显示的实际 URL 为准。
8. 用 iPhone 的 Safari 打开部署网址。首次联网打开后，等页面载入完成。
9. 点 Safari 的分享按钮 → **添加到主屏幕** → 添加。之后从主屏幕图标打开体验接近 App 的全屏界面。

## 重要说明
- 这是 PWA/网页应用，不是原生 iOS App，也不是 TestFlight；它不会出现在 App Store。
- 需要通过 HTTPS 访问，Service Worker 才能可靠工作。直接从 `file://` 打开 ZIP 内的 HTML 不支持完整离线安装能力。
- 所有账单仅保存在当前浏览器/网页的本机存储中。清除 Safari 网站数据、切换不同浏览器或设备可能导致数据不可用；请定期使用设置页的 JSON 备份或 CSV 导出。
- GitHub 仓库若为公开仓库，上传的源码会公开；本项目不包含用户账单数据。切勿把自己的账单备份文件上传到公开仓库。
- 当前离线缓存版本号为 `jizhang-web-v1`；更新资源后如客户端仍显示旧版本，关闭已打开页面再重新打开，必要时清除网站数据后重新访问。
- 部署 URL 取决于你实际的 GitHub 用户名与仓库名，不能提前代为生成真实 URL。


## 缩放支持
页面 viewport 已明确允许用户缩放（user-scalable=yes，maximum-scale=5）。在 Safari 中可用双指捏合缩放；如果以“添加到主屏幕”的独立模式打开，iOS 对网页缩放的支持可能与 Safari 标签页不同，建议用 Safari 标签页打开体验缩放。
