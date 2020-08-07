## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```html
<gj-badge :value="12" class="item">
  <gj-button size="small">评论</gj-button>
</gj-badge>
<gj-badge :value="3" class="item">
  <gj-button size="small">回复</gj-button>
</gj-badge>
<gj-badge :value="1" class="item" type="primary">
  <gj-button size="small">评论</gj-button>
</gj-badge>
<gj-badge :value="2" class="item" type="warning">
  <gj-button size="small">回复</gj-button>
</gj-badge>

<gj-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <gj-dropdown-menu slot="dropdown">
    <gj-dropdown-item class="clearfix">
      评论
      <gj-badge class="mark" :value="12" />
    </gj-dropdown-item>
    <gj-dropdown-item class="clearfix">
      回复
      <gj-badge class="mark" :value="3" />
    </gj-dropdown-item>
  </gj-dropdown-menu>
</gj-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 最大值
可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```html
<gj-badge :value="200" :max="99" class="item">
  <gj-button size="small">评论</gj-button>
</gj-badge>
<gj-badge :value="100" :max="10" class="item">
  <gj-button size="small">回复</gj-button>
</gj-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 自定义内容
可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```html
<gj-badge value="new" class="item">
  <gj-button size="small">评论</gj-button>
</gj-badge>
<gj-badge value="hot" class="item">
  <gj-button size="small">回复</gj-button>
</gj-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 小红点
以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`is-dot`属性，它接受一个`Boolean`。

```html
<gj-badge is-dot class="item">数据查询</gj-badge>
<gj-badge is-dot class="item">
  <gj-button class="share-button" icon="el-icon-share" type="primary"></gj-button>
</gj-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| value        | 显示值           | string, number  |          —            |    —    |
| max          | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| is-dot       | 小圆点           | boolean         |         —             |  false  |
| hidden       | 隐藏 badge       | boolean         |         —             |  false  |
| type         | 类型             | string          | primary / success / warning / danger / info |    —    |
