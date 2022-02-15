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
    "custom": true,
    "color": "#000000",
    "selectedColor": "#000000",
    "backgroundColor": "#000000",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "组件"
    }, {
      "pagePath": "pages/wd/index",
      "text": "接口"
    }]
  },
  // lazyCodeLoading: "requiredComponents"
})
