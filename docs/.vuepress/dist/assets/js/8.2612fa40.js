(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{380:function(a,t,s){"use strict";s.r(t);var r=s(44),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"组件开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件开发"}},[a._v("#")]),a._v(" 组件开发")]),a._v(" "),s("h2",{attrs:{id:"项目运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目运行"}},[a._v("#")]),a._v(" 项目运行")]),a._v(" "),s("h3",{attrs:{id:"_1-下载仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载仓库"}},[a._v("#")]),a._v(" （1）下载仓库")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git clone https://gitlab.yewifi.com/cloud-product/arch/research/frontend/gd-weui\n")])])]),s("br"),a._v(" "),s("h3",{attrs:{id:"_2-目录说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录说明"}},[a._v("#")]),a._v(" （2）目录说明")]),a._v(" "),s("p",[a._v("├── miniprogram_dev ------------ 开发打包目录，需要用开发工具单独打开此目录查看模拟器")]),a._v(" "),s("p",[a._v("├── miniprogram_dist ------------ build目录，实际npm publish的文件")]),a._v(" "),s("p",[a._v("├── src ------------ 组件库源码目录")]),a._v(" "),s("p",[a._v("├── tools ------------ 打包配置代码和demo")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("miniprogram_dev 目录：tools中demo代码会被打包生成（通过watch命令）在此目录，是一个需要用开发工具独立打开的小程序项目。")])]),a._v(" "),s("h3",{attrs:{id:"_3-基于master拉取开发分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-基于master拉取开发分支"}},[a._v("#")]),a._v(" （3）基于master拉取开发分支")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout -b feature/***\n")])])]),s("h3",{attrs:{id:"_4-安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装依赖"}},[a._v("#")]),a._v(" （4）安装依赖")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm run init\n")])])]),s("h3",{attrs:{id:"_5-执行运行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-执行运行命令"}},[a._v("#")]),a._v(" （5）执行运行命令")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm run watch\n")])])]),s("h3",{attrs:{id:"_6-打开微信开发工具新窗口-导入miniprogram-dev-目录-查看demo界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-打开微信开发工具新窗口-导入miniprogram-dev-目录-查看demo界面"}},[a._v("#")]),a._v(" （6）打开微信开发工具新窗口，导入miniprogram_dev 目录，查看demo界面")]),a._v(" "),s("p",[s("br"),s("br")]),a._v(" "),s("h2",{attrs:{id:"组件开发-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件开发-2"}},[a._v("#")]),a._v(" 组件开发")]),a._v(" "),s("h3",{attrs:{id:"_1-组件代码编写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-组件代码编写"}},[a._v("#")]),a._v(" （1）组件代码编写")]),a._v(" "),s("p",[a._v("在src目录下，新增组件目录，目录命名：gd-***")]),a._v(" "),s("h3",{attrs:{id:"_2-静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-静态资源"}},[a._v("#")]),a._v(" （2）静态资源")]),a._v(" "),s("p",[a._v("如果组件要使用图片，静态资源统一在 src/static/")]),a._v(" "),s("h3",{attrs:{id:"_3-增加配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-增加配置"}},[a._v("#")]),a._v(" （3）增加配置")]),a._v(" "),s("p",[a._v("组件代码完成后，需要在src/index.json中增加该组件的配置，如")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"usingComponents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gd-popup-daterange"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./gd-popup-daterange/gd-popup-daterange"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gd-popup-selector"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./gd-popup-selector/gd-popup-selector"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("p",[s("br"),s("br")]),a._v(" "),s("h2",{attrs:{id:"编写组件demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写组件demo"}},[a._v("#")]),a._v(" 编写组件demo")]),a._v(" "),s("h3",{attrs:{id:"_1-demo代码开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-demo代码开发"}},[a._v("#")]),a._v(" （1）demo代码开发")]),a._v(" "),s("p",[a._v("在 tools/demo/example/ 新增demo目录，命名规范和组件名相对应，具体实现参照其它已有demo")]),a._v(" "),s("h3",{attrs:{id:"_2-增加demo首页目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-增加demo首页目录"}},[a._v("#")]),a._v(" （2）增加demo首页目录")]),a._v(" "),s("p",[a._v("在 tools/demo/example/index.js 中做配置，增加demo页面目录")]),a._v(" "),s("p",[s("br"),s("br")]),a._v(" "),s("h2",{attrs:{id:"编写pc端文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写pc端文档"}},[a._v("#")]),a._v(" 编写PC端文档")]),a._v(" "),s("p",[a._v("待定")]),a._v(" "),s("FooterGd")],1)}),[],!1,null,null,null);t.default=e.exports}}]);