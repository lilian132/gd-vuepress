## 发送验证码

### 贡献者

陈孟兰

### 体验

<div style="display:inline-block;margin-top:30px">
<img src="./images/yzm.gif" style="width:320px;float:left" />
<div style="float:left; margin:0px 0 0 100px">
联系李凌云加体验权限
<br />
<img src="./images/keyboard.jpg" style="width:160px;height:160px" />
</div>
</div>


### 代码用法 

```js
"usingComponents": {
  "gd-countdown": "@gd/weui/gd-countdown/gd-countdown",
}
```
```html
<gd-countdown id="countdown" bind:sendSms="onSendSms" countdown="{{30}}"></gd-countdown>
```
```javascript
Page({
  onSendSms() {
    this.selectComponent('#countdown').openCountdown();
  },
  ...
})
```
`


### Attributes

| 参数      | 说明            | 类型      | 必须 | 可选值                           | 默认值    |
| --------- | -------------- | -------- | --- | -------------------------------- | -------- |
| countdown | 倒计时时间 | Number | - | - | 60 |
| default-tips | 获取验证码文字 | String | - | - | '获取验证码' |
| past-tips | 发送验证码后展示文字 | String | - | - | '重新获取' |
| ext-class | 倒计时区域类名 | String | - | - | '' |

### Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| sendSms     | 点击触发发送验证码 | - |

<FooterGd/>