export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/cart/index'
  ],
  subPackages: [
    {
      "root": "subpkg-1",
      "pages": [
        "goods/index"
      ]
    },
    {
      "root": "subpkg-pages",
      "pages": [
        "cart/index",
        "my/index",
      ]
    }
  ],
  preloadRule: {
    'pages/index/index': {
      'network': 'all',
      'packages': ['subpkg-1', 'subpkg-pages']
    },
    'pages/cart/index': {
      'network': 'all',
      'packages': ['subpkg-1', 'subpkg-pages']
    },
    'pages/my/index': {
      'network': 'all',
      'packages': ['subpkg-1', 'subpkg-pages']
    }
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
      }
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
