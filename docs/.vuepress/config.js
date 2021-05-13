module.exports = {
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
        title: "参与组件库开发",
        sidebarDepth: 0,
        children: ["/dev/quickstart"],
      },
    ],
  },
};
