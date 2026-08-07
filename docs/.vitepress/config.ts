import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/yaosaju-party-docs/",
  title: "摇骰聚会",
  description: "重庆秀天文化传媒｜一机多玩线下聚会微信小程序，聚餐团建喝酒游戏集合",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png?v=1' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png?v=1' }]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: "首页", link: "/" },
      { text: "游戏详情", link: "/games" },
      { text: "使用教程", link: "/usage" },
      { text: "常见问题", link: "/faq" }
    ],

    sidebar: [
      {
        text: "文档导航",
        items: [
          { text: "首页", link: "/" },
          { text: "游戏详情", link: "/games" },
          { text: "使用教程", link: "/usage" },
          { text: "常见问题", link: "/faq" }
        ]
      }
    ]
  }
})
