# Academic Homepage Template

这是一个参考 `https://chenxinli001.github.io/` 页面风格重建的静态学术主页模板，适合直接改成你自己的个人主页并部署到 GitHub Pages。

## 怎么改

1. 编辑 `site-data.js`
2. 把里面的姓名、简介、论文、经历、活动、兴趣、链接全部替换成你自己的
3. 把 `assets/avatar-placeholder.svg` 换成你的照片，或者继续沿用占位图
4. 如果你有论文缩略图，可以把每个 work 的 `image` 改成你自己的图片路径

## 文件说明

- `index.html`: 页面骨架
- `styles.css`: 页面样式
- `site-data.js`: 你的个人信息和论文数据
- `script.js`: 根据数据渲染页面
- `assets/avatar-placeholder.svg`: 默认头像占位图

## 本地预览

如果本机装了 Python，可以在当前目录运行：

```bash
python -m http.server 8000
```

然后打开 `http://localhost:8000/`

## GitHub Pages 部署

把这些文件推到仓库根目录，然后在 GitHub Pages 里选择从默认分支部署即可。
