## 底部弹窗—选择器-点击选择

底部弹窗点击选择内容 <br/>

<div style="display:inline-block">
<img src="./images/popup-selector.png" style="width:320px;float:left" />
<div style="float:left; margin:160px 0 0 100px">
联系李凌云加体验权限
<br />
<img src="./images/popup-selector-code.jpg" style="width:160px;height:160px" />
</div>
</div>


### 代码用法 

```js
"usingComponents": {
  "gd-popup-selector": "@gd/weui/gd-popup-selector/gd-popup-selector"
}
```

#### （1）基本类型数据源

```html
<gd-popup-selector
  title="基本类型数据源"  
  show="{{show0}}" 
  data="{{data0}}"
  selected="{{selected0}}"
  bind:change="change0"
>
  <view slot="titleRight">新增</view>
</gd-popup-selector>
```
```javascript
Page({
  data: {
    show0: false,
    data0: ['aaa','bbb','ccc'],
    selected0: 'bbb'
  },
  change0(e) {
    this.setData({
      selected0: e.detail,
      show0: false
    })
  },
  ...
})
```

#### （2）对象数据源

```html
<gd-popup-selector
  title="对象类型数据源"  
  show="{{show1}}" 
  data="{{data1}}"
  label-key="name"
  label-value="id"
  selected="{{selected1}}"
  bind:change="change1"
>
  <view slot="titleRight">新增</view>
</gd-popup-selector>
```
```javascript
Page({
  data: {
    show1: false,
    data1: [{name: '选项1', id: 1},{name: '选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2', id: 2},{name: '选项3', id: 3},{name: '选项4', id: 4},{name: '选项5', id: 5},{name: '选项6', id: 6},{name: '选项7', id: 7}],
    selected1: 2,
  },
  change1(e) {
    this.setData({
      selected1: e.detail.id,
      show1: false
    })
  },
  ...
})
```

#### （3）多选
```html
<gd-popup-selector
  title="多选"  
  show="{{show2}}" 
  data="{{data2}}"
  label-key="name"
  label-value="id"
  selected="{{selected2}}"
  bind:change="change2"
  bind:multipleConfirm="multipleConfirm"
  multiple
>
</gd-popup-selector>
```
```javascript
Page({
  data: {
    show2: false,
    data2: [{name: '选项1', id: 1},{name: '选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2', id: 2},{name: '选项3', id: 3},{name: '选项4', id: 4},{name: '选项5', id: 5},{name: '选项6', id: 6},{name: '选项7', id: 7}],
    selected2: [4,5]
  },
  change2(e) {
    const val = typeof(e.detail) === 'object' ? e.detail.id : e.detail
    let selected = this.data.selected2
    if(selected.includes(val)) {
      selected.splice(selected.indexOf(val), 1)
    }else{
      selected.push(val)
    }
    this.setData({
      selected2: selected
    })
  },
  multipleConfirm(e) {
    console.log(e.detail)
    this.setData({
      show2: false
    })
  },
  ...
})
```

### Attributes

| 参数      | 说明            | 类型      | 必须 | 可选值                           | 默认值    |
| --------- | -------------- | -------- | --- | -------------------------------- | -------- |
| show | 是否显示 | Boolean | ✔ | - | false |
| title | 标题文案 | String | - | - | '' |
| data | 数据源 | Array | - | - | [] |
| label-key | 当data中元素为对象时，对应数据源中需要显示的字段名 | String | - | - | 'label' |
| label-value | 当data中元素为对象时，对应数据源中能够标识数据唯一的字段 | String | - | - | 'value' |
| selected | 当前选中的数据，单选时为字符串类型，多选为数组类型；数据源为对象时，值对应labelValue | String,Array | - | - | '' |

### Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| change     | 点击项数据 | e.detail当前数据 |
| confirm     | 多选确定事件 | e.detail当前数据 |

### Slot

| name    | 说明     |
| ------ | -------- |
| titleRight | 标题栏右侧按钮，多选无效 |




<FooterGd/>