## Module 组件容器
用于简单组件布局的容器，统一组件布局：

`<g-module>`：扩展组件布局功能。

:::tip
包裹组件，扩展功能。`<g-module name="g-main">`。
:::

### 简单布局

:::demo
```html

<g-module v-for="(item, i) in moduleList" :name="item.name" :props="item.props" :key="item.name + i">
  <g-module v-if="item.children" v-for="(child, k) in item.children" :name="child.name" :key="child.name + k">{{child.name}}</g-module>
</g-module>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
<script>

  export default {
    data() {
      return {
        moduleList: [{
          name: 'g-container',
          props: {direction: 'vertical'},
          children: [{
            name: 'g-header'
          },{
            name: 'g-main'
          }]
        }],
      };
    }
  };
</script>


```
:::

### 实例

:::tip
部分组件存在父子调用关系，可打包成一个组件。例如：`<g-module name="g-table-group"><g-table>...</g-table></g-module>`。
:::

:::demo
```html
<g-module name="g-container" style="height: 500px; border: 1px solid #eee" >
  <g-module name="g-aside" width="200px" style="background-color: rgb(238, 241, 246)">
    <g-module name="g-menu" :default-openeds="['1', '3']">
      <g-submenu index="1">
        <template slot="title"><i class="g-icon-message"></i>导航一</template>
        <g-module name="g-menu-item-group">
          <template slot="title">分组一</template>
          <g-module name="g-menu-item" index="1-1">选项1</g-module>
          <g-module name="g-menu-item" index="1-2">选项2</g-module>
        </g-module>
        <g-module name="g-menu-item-group" title="分组2">
          <g-module name="g-menu-item" index="1-3">选项3</g-module>
        </g-module>
        <g-submenu index="1-4">
          <template slot="title">选项4</template>
          <g-module name="g-menu-item" index="1-4-1">选项4-1</g-module>
        </g-submenu>
      </g-submenu>
      <g-submenu index="2">
        <template slot="title"><i class="g-icon-menu"></i>导航二</template>
        <g-module name="g-menu-item-group">
          <template slot="title">分组一</template>
          <g-module name="g-menu-item" index="2-1">选项1</g-module>
          <g-module name="g-menu-item" index="2-2">选项2</g-module>
        </g-module>
        <g-module name="g-menu-item-group" title="分组2">
          <g-module name="g-menu-item" index="2-3">选项3</g-module>
        </g-module>
        <g-submenu index="2-4">
          <template slot="title">选项4</template>
          <g-module name="g-menu-item" index="2-4-1">选项4-1</g-module>
        </g-submenu>
      </g-submenu>
      <g-submenu index="3">
        <template slot="title"><i class="g-icon-setting"></i>导航三</template>
        <g-module name="g-menu-item-group">
          <template slot="title">分组一</template>
          <g-module name="g-menu-item" index="3-1">选项1</g-module>
          <g-module name="g-menu-item" index="3-2">选项2</g-module>
        </g-module>
        <g-module name="g-menu-item-group" title="分组2">
          <g-module name="g-menu-item" index="3-3">选项3</g-module>
        </g-module>
        <g-submenu index="3-4">
          <template slot="title">选项4</template>
          <g-module name="g-menu-item" index="3-4-1">选项4-1</g-module>
        </g-submenu>
      </g-submenu>
    </g-module>
  </g-module>
  
  <g-module name="g-container">
    <g-header name="g-header" style="text-align: right; font-size: 12px">
      <g-dropdown>
        <i class="g-icon-setting" style="margin-right: 15px"></i>
        <g-dropdown-menu slot="dropdown">
          <g-dropdown-item>查看</g-dropdown-item>
          <g-dropdown-item>新增</g-dropdown-item>
          <g-dropdown-item>删除</g-dropdown-item>
        </g-dropdown-menu>
      </g-dropdown>
      <span>王小虎</span>
    </g-header>
    <g-module name="g-main">
      <g-table :data="tableData">
        <g-table-column prop="date" label="日期" width="140"></g-table-column>
        <g-table-column prop="name" label="姓名" width="120"></g-table-column>
        <g-table-column prop="address" label="地址"></g-table-column>
      </g-table>
    </g-module>
  </g-module>
</g-module>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Module Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| name | 组件名 | string | 	— | 
| props | 组件参数 | object | 	— | 
