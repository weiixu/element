## Module 组件容器
用于简单组件布局的容器，统一组件布局：

`<gj-module>`：扩展组件布局功能。

:::tip
包裹组件，扩展功能。`<gj-module name="el-main">`。
:::

### 简单布局

:::demo
```html

<gj-module v-for="item in moduleList" :name="item.name" :props="item.props">
  <gj-module v-if="item.children" v-for="child in item.children" :name="child.name">{{child.name}}</gj-module>
</gj-module>

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
          name: 'el-container',
          props: {direction: 'vertical'},
          children: [{
            name: 'el-header'
          },{
            name: 'el-main'
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
部分组件存在父子调用关系，可打包成一个组件。例如：`<gj-module name="gj-table-group"><el-table>...</el-table></gj-module>`。
:::

:::demo
```html
<gj-module name="el-container" style="height: 500px; border: 1px solid #eee" >
  <gj-module name="el-aside" width="200px" style="background-color: rgb(238, 241, 246)">
    <gj-module name="el-menu" :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <gj-module name="el-menu-item-group">
          <template slot="title">分组一</template>
          <gj-module name="el-menu-item" index="1-1">选项1</gj-module>
          <gj-module name="el-menu-item" index="1-2">选项2</gj-module>
        </gj-module>
        <gj-module name="el-menu-item-group" title="分组2">
          <gj-module name="el-menu-item" index="1-3">选项3</gj-module>
        </gj-module>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <gj-module name="el-menu-item" index="1-4-1">选项4-1</gj-module>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <gj-module name="el-menu-item-group">
          <template slot="title">分组一</template>
          <gj-module name="el-menu-item" index="2-1">选项1</gj-module>
          <gj-module name="el-menu-item" index="2-2">选项2</gj-module>
        </gj-module>
        <gj-module name="el-menu-item-group" title="分组2">
          <gj-module name="el-menu-item" index="2-3">选项3</gj-module>
        </gj-module>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <gj-module name="el-menu-item" index="2-4-1">选项4-1</gj-module>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <gj-module name="el-menu-item-group">
          <template slot="title">分组一</template>
          <gj-module name="el-menu-item" index="3-1">选项1</gj-module>
          <gj-module name="el-menu-item" index="3-2">选项2</gj-module>
        </gj-module>
        <gj-module name="el-menu-item-group" title="分组2">
          <gj-module name="el-menu-item" index="3-3">选项3</gj-module>
        </gj-module>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <gj-module name="el-menu-item" index="3-4-1">选项4-1</gj-module>
        </el-submenu>
      </el-submenu>
    </gj-module>
  </gj-module>
  
  <gj-module name="el-container">
    <el-header name="el-header" style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <gj-module name="el-main">
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </gj-module>
  </gj-module>
</gj-module>

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
