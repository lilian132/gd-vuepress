## 底部弹窗—选择时间

底部弹窗选择时间 <br/>

<div style="display:inline-block">
<img src="./images/popup-time.png" style="width:320px;float:left" />
<div style="float:left; margin:160px 0 0 100px">
联系李凌云加体验权限
<br />
<img src="./images/time-code.jpg" style="width:160px;height:160px" />
</div>
</div>


### 代码用法 

```js
"usingComponents": {
  "gd-popup-time": "@gd/weui/gd-popup-time/gd-popup-time",
}
```

#### （1）年月日

```html
<gd-popup-time type="date" title="请选择时间" show="{{showDate}}" bind:confirm="onConfirm1" />
```
```javascript
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showDate: false
  },
  onTap1() {
    this.setData({
      showDate: true
    })
  }
  onConfirm1(e) {
    // 时间值：e.detail
    this.setData({
      showDate: false
    })
  }
  ...
})
```

#### （2）年月

```html
<gd-popup-time type="year-month" title="请选择年月" show="{{showYearMonth}}" bind:confirm="onConfirm2" />
```
```javascript
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showYearMonth: false
  },
  onTap2() {
    this.setData({
      showYearMonth: true
    })
  }
  onConfirm2(e) {
    // 时间值：e.detail
    this.setData({
      showYearMonth: false
    })
  }
  ...
})
```

#### （3）分秒
```html
<gd-popup-time type="time" title="请选择分秒" show="{{showTime}}" value="09:10" bind:confirm="onConfirm3" />
```
```javascript
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showTime: false
  },
  onTap3() {
    this.setData({
      showTime: true
    })
  }
  onConfirm3(e) {
    // 时间值：e.detail
    this.setData({
      showTime: false
    })
  }
  ...
})
```

### Attributes

| 参数      | 说明            | 类型      | 必须 | 可选值                           | 默认值    |
| --------- | -------------- | -------- | --- | -------------------------------- | -------- |
| show | 是否显示 | Boolean | ✔ | - | false |
| title | 标题文案 | String | - | - | '请选择' |
| type | 时间类型 | String | - | date year-month time datetime | 'date' |
| value | 默认值 | Number，String | - | - | new Date().getTimes(), type为time时为'00:00' |

### Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| confirm     | 点击确定执行函数返回结果 | e.detail当前数据 |


<FooterGd/>