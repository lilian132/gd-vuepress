# 组件开发


## 项目运行

### （1）下载仓库

  
```cmd
git clone https://gitlab.yewifi.com/cloud-product/arch/research/frontend/gd-weui
```

<br/>

### （2）目录说明


├── miniprogram_dev ------------ 开发打包目录，需要用开发工具单独打开此目录查看模拟器

├── miniprogram_dist ------------ build目录，实际npm publish的文件

├── src ------------ 组件库源码目录

├── tools ------------ 打包配置代码和demo


:::tip
miniprogram\_dev 目录：tools中demo代码会被打包生成（通过watch命令）在此目录，是一个需要用开发工具独立打开的小程序项目。
:::


### （3）基于master拉取开发分支

```cmd
git checkout -b feature/***
```

### （4）安装依赖

```cmd
npm run init
```

### （5）执行运行命令

```cmd
npm run watch
```

### （6）打开微信开发工具新窗口，导入miniprogram\_dev 目录，查看demo界面

<br/><br/>

## 组件开发

### （1）组件代码编写

在src目录下，新增组件目录，目录命名：gd-***


### （2）静态资源

如果组件要使用图片，静态资源统一在 src/static/

### （3）增加配置

组件代码完成后，需要在src/index.json中增加该组件的配置，如

```js
"usingComponents": {
    "gd-popup-daterange": "./gd-popup-daterange/gd-popup-daterange",
    "gd-popup-selector": "./gd-popup-selector/gd-popup-selector"
  }

```

<br/><br/>

## 编写组件demo

### （1）demo代码开发

在 tools/demo/example/ 新增demo目录，命名规范和组件名相对应，具体实现参照其它已有demo

### （2）增加demo首页目录

在 tools/demo/example/index.js 中做配置，增加demo页面目录

<br/><br/>

## 编写PC端文档

待定




<FooterGd/>