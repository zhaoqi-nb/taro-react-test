export default defineAppConfig({
  pages: [
    'pages/imagepage/index',
    'pages/index/index',
    'pages/wd/index',
    'pages/musicpage/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#31e938',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#2ab94a',
  },
  tabBar: {
    list: [{
      // 'iconPath': 'resource/latest.png',
      // 'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '最新'
    }, {
      // 'iconPath': 'resource/hotest.png',
      // 'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/wd/index',
      text: '热门'
    }, {
      // 'iconPath': 'resource/node.png',
      // 'selectedIconPath': 'resource/node_on.png',
      pagePath: 'pages/musicpage/index',
      text: '节点'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'pink'
  },
  lazyCodeLoading: "requiredComponents"
})
