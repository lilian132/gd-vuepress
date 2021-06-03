# 快速上手


<br/>

### （1）引入样式包

在项目app.wxss中引入此样式包后，就可以在项目中使用全局样式类，同时Vant Weapp部分组件样式被UI定制
  
```css
@import '/miniprogram_npm/@gd/weui/static/index.wxss';
```

<br/>

### （2）如何使用组件
* 2.1 引入组件
```javascript
  "usingComponents": {
    "gd-popup-timerange": "@gd/weui/gd-popup-timerange/gd-popup-timerange"
  }
```

* 2.2 使用组件
```html
  <gd-popup-timerange ... />
```
<FooterGd/>