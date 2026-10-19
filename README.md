# Ling Zhao 个人学术网站

完整的五页静态网站，使用 HTML、CSS 和少量原生 JavaScript，无构建步骤、后端、登录、数据库或联系表单。本次仅在本地制作，未修改或发布任何线上站点。

## 本地查看

直接双击 `index.html` 即可浏览。推荐在本目录运行静态服务器：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

浏览器访问 `http://127.0.0.1:8000/`，终端按 Ctrl+C 关闭。没有 Python 时，可使用编辑器的静态网站预览功能。无需安装任何前端依赖。

## 内容结构

```text
index.html                  身份介绍、研究兴趣与实验室；不展示摄影作品
about.html                  自我介绍、教育与主要工作经历
research.html               研究问题、希望探索的方法、实验室
beyond.html                 9 张摄影作品及点击放大
contact.html                邮箱、学校、实验室链接、CV
assets/css/style.css        统一样式
assets/js/main.js           摄影放大查看器
assets/images/              优化照片、概念示意图与 favicon
assets/files/Ling_Zhao_CV.pdf
.nojekyll
README.md
```

网站采用暖白与蓝灰色系、衬线标题和系统无衬线正文。桌面正文宽度上限 1140px，正文约 18px，长文使用更窄宽度。小窗口可正常使用，无在线字体、外部依赖、分析追踪或自动轮播。

## 修改文字

用文本编辑器修改对应 HTML。正文为英文，维护说明为中文。各页的标题在 `<title>`，简介在 `meta name="description"`，正文位于 `<main id="main">`。

导航栏和页脚直接写在每个 HTML 中，保证本地打开和禁用 JavaScript 时仍然可用。修改导航或页脚时同步五页。当前页面的导航链接使用 `aria-current="page"`。

About 的经历来自用户提供的 CV，仅做精选概述，不包含未提供的学位、奖项或成果。PhD 状态来自用户本人说明；未推断具体入学月份。

Research 的措辞基于 September 2026 Research Statement，区分当前兴趣与未来希望探索的方法，不将研究计划写成已完成发现，也不将 PALM、MINFLUX 或 SPEED 写成已熟练掌握的技术。Research Statement 和研究计划 PDF 没有放入公开目录。

## 更换照片

### 个人照

替换 `assets/images/ling-zhao-portrait.webp`，并同步修改首页和 About 的 `img.width`、`img.height` 与 `alt`。建议保留原始比例，按 EXIF 校正方向后导出 WebP 或 JPEG。首页主图优先加载，不使用 lazy loading。

### 摄影作品

摄影作品仅在 Beyond the Lab 展示，首页没有摄影图片。9 张作品各使用一次，不推断地点和年份。

`beyond.html` 包含三列 `.gallery-column`，每张作品是一个 `.gallery-item`。增减作品时更新：

- `a.href`：放大图路径；
- `data-caption` 和 `figcaption`：画面标题；
- `aria-label`：如 `Enlarge photograph: 标题`；
- `img.src`：缩略图；
- `width`、`height`：实际像素；
- `alt`：准确描述画面的替代文本。

缩略图最多宽 800px，放大图最多宽 1800px，不放大低分辨率原图，不强制裁为正方形。照片使用延迟加载。点击或 Enter 打开放大图，关闭按钮与 Escape 均可退出；关闭后焦点返回原链接。禁用 JavaScript 时链接仍可直接打开大图。

## 研究示意图与原始研究参考图

研究页使用本地 SVG `assets/images/nuclear-pore-schematic.svg`，明确标为 **Conceptual schematic / Not to scale**。其形状、FG 蛋白分布、运输路径均用于概念解释，不能作为实验结果、精确结构或比例关系引用。

用户确认所提供的研究参考图片可公开，但尚未给出原始来源、署名规则及显微图颜色含义。为避免在正式正文中放置未核实图注，本版没有使用这些参考图，也没有将它们放入待上传目录。原件及快照都保留在网站目录外。以后补全来源与图注后，可以完整保留比例尺、标记和色彩再添加到 Research；不要称其为自己的实验结果。

## 更新 CV

用新版原始 PDF 覆盖 `assets/files/Ling_Zhao_CV.pdf`。所有下载链接共用这一份文件，不需要逐页修改，也不应重做或改写 PDF。

本版 CV 是提供文件的逐字节副本。网站显示 Temple 邮箱；PDF 原件中原有电话及其他邮箱保持不变。发布前请核对是否使用该版本，或提供适合公开的新版 PDF。

## 修改颜色与排版

编辑 `assets/css/style.css` 顶部变量：背景 `--paper`，文字 `--ink`，链接 `--accent`，浅色区域 `--pale`。标题字体为 Georgia，正文为系统无衬线字体，均有备用字体。修改时保持文字对比度与可见键盘焦点。

## 原件与版本保留

桌面“照片”内原始四个素材文件夹没有修改。额外原件备份在同级 `_website-review/originals/`，第一轮网站快照在 `_website-review/first-design/`。图片对应关系在 `_website-review/asset-map.json`。这些文件均不在公开网站目录中，不要上传。

## GitHub Pages 发布（本次未执行）

相对路径兼容 `username.github.io/` 和 `username.github.io/repository-name/`。不要把链接改成以 `/` 开头的根路径，不要写本机盘符。

1. 新建专用 GitHub 仓库。若现有 `username.github.io` 已有旧站，优先使用新仓库的项目路径，避免覆盖。
2. **上传 `ling-zhao-academic-preview` 里面的所有文件和 `assets/` 文件夹，直接放在仓库根目录。** 不要把外层目录再嵌套一层。仓库根目录应直接看到五个 HTML、README.md、.nojekyll 和 assets/。
3. 仓库 Settings → Pages → Build and deployment，Source 选择 Deploy from a branch，分支选 main，目录选 `/ (root)`，保存。
4. 等待部署完成，使用 Pages 提供的地址访问；公开网站不设置密码。
5. 逐页检查导航、图片、放大功能、邮箱和 CV。以后提交更新到相同分支即可。

确认点开头的 `.nojekyll` 也已上传。不要上传桌面素材原件、研究计划 PDF、Research Statement 原 PDF、`_website-review` 或其他桌面文件。

分支发布设置参考 [GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。本地检查通过并不代表已经部署，发布阶段仍须获得用户明确指示。

## 事实与素材来源

- 个人身份、学校、实验室和邮箱：用户直接提供。
- 学术背景与经历：用户提供的 CV。
- 研究兴趣和希望探索的方法：用户提供的 September 2026 Research Statement；研究计划不作为已完成成果。
- 实验室环境：[Temple University 官方介绍](https://cst.temple.edu/directory/weidong-yang) 与用户指定的 [Yang Lab](https://yanglab.com/)。
- 摄影和个人照：用户提供的本地素材；图注仅描述画面。
- 概念示意图：为此网站绘制的 SVG，非实验结果。
- 用户指定的四个学术主页仅用于参考内容层次与图文关系，没有复制代码、照片或文字。
