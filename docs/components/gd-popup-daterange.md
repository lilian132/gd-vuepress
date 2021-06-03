## 底部弹窗—选择时间区域

底部弹窗选择时间区域<br/>

<div style="display:inline-block">
<img src="./images/daterange.gif" style="width:320px;float:left" />
<div style="float:left; margin:160px 0 0 100px">
联系李凌云加体验权限
<br />
<img src="./images/daterange-code.jpg" style="width:160px;height:160px" />
</div>
</div>


### 代码用法 

```js
"usingComponents": {
  "gd-popup-daterange": "@gd/weui/gd-popup-daterange/gd-popup-daterange",
}
```
```html
<van-button type="primary" size="small" bindtap="onShowTimeRanges">
  {{selectedStartTime + '-' + selectedEndTime}}
</van-button>
<gd-popup-daterange show="{{showTimeRanges}}" min-date="{{minDate}}" max-date="{{maxDate}}" bind:confirm="confirm" format/>
```
```javascript
function getDateString(time) {
  var date = new Date(parseInt(time));
  var year = date.getFullYear();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  return year + '/' + (mon < 10 ? '0' + mon : mon) + '/' + day;
}

Page({  
  data: {
    showTimeRanges: false,
    selectedStartTime: getDateString(new Date().getTime()),
    selectedEndTime: getDateString(new Date().getTime()),
    minDate: new Date().getTime() - 2626560000 * 6,
    maxDate: new Date().getTime(),
  },
  onShowTimeRanges(){
    this.setData({
      showTimeRanges: true
    })
  },
  getSelectedTime(data) {
    this.setData({
      selectedStartTime: data.detail[0],
      selectedEndTime: data.detail[1],
    })
  },
  ...
})
```


### Attributes

| 参数      | 说明            | 类型      | 必须 | 可选值                           | 默认值    |
| --------- | -------------- | -------- | --- | -------------------------------- | -------- |
| show | 是否显示 | Boolean | ✔ | - | false |
| start-date | 起始时间 | Number | - | - | 当前时间戳 |
| end-date | 截至时间 | Number | - | - | 当前时间戳 |
| min-date | 可选最小时间 | Number | - | - | 前十年时间戳 |
| max-date | 可选最大时间 | Number | - | - | 后十年时间戳 |
| format | 返回时间是否格式化 | Boolean | - | - | false |

### Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| confirm     | 点击确定执行函数返回结果 | e.detail当前数据 |


<FooterGd/>