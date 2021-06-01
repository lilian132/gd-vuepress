module.exports = {
  dest: "docs/pages",
  base: "/gd-vuepress/pages/",
  themeConfig: {
    lastUpdated: "Last Updated",
    // 平滑滚动
    smoothScroll: true,
    // 让时间格式符合国内习惯
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    navbar: false,
    // 为以下路由添加侧边栏
    sidebar: [
      {
        title: "开发指南", // 必要的
        sidebarDepth: 0,
        children: ["/start/installation", "/start/quickstart"],
      },
      {
        title: "组件",
        sidebarDepth: 0,
        children: [
          "/components/custom-dialog",
          "/components/gd-popup-selector",
          "/components/gd-popup-picker",
          "/components/gd-popup-time",
          "/components/gd-popup-daterange",
          "/components/gd-digit-keyboard",
        ],
      },
      {
        title: "参与组件库开发",
        sidebarDepth: 0,
        children: ["/dev/quickstart"],
      },
    ],
  },
};
