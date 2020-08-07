## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<gj-container>`：外层容器。当子元素中包含 `<gj-header>` 或 `<gj-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<gj-header>`：顶栏容器。

`<gj-aside>`：侧边栏容器。

`<gj-main>`：主要区域容器。

`<gj-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<gj-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<gj-container>`。
:::

### 常见页面布局

:::demo
```html
<gj-container>
  <gj-header>Header</gj-header>
  <gj-main>Main</gj-main>
</gj-container>

<gj-container>
  <gj-header>Header</gj-header>
  <gj-main>Main</gj-main>
  <gj-footer>Footer</gj-footer>
</gj-container>

<gj-container>
  <gj-aside width="200px">Aside</gj-aside>
  <gj-main>Main</gj-main>
</gj-container>

<gj-container>
  <gj-header>Header</gj-header>
  <gj-container>
    <gj-aside width="200px">Aside</gj-aside>
    <gj-main>Main</gj-main>
  </gj-container>
</gj-container>

<gj-container>
  <gj-header>Header</gj-header>
  <gj-container>
    <gj-aside width="200px">Aside</gj-aside>
    <gj-container>
      <gj-main>Main</gj-main>
      <gj-footer>Footer</gj-footer>
    </gj-container>
  </gj-container>
</gj-container>

<gj-container>
  <gj-aside width="200px">Aside</gj-aside>
  <gj-container>
    <gj-header>Header</gj-header>
    <gj-main>Main</gj-main>
  </gj-container>
</gj-container>

<gj-container>
  <gj-aside width="200px">Aside</gj-aside>
  <gj-container>
    <gj-header>Header</gj-header>
    <gj-main>Main</gj-main>
    <gj-footer>Footer</gj-footer>
  </gj-container>
</gj-container>

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
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<gj-container style="height: 500px; border: 1px solid #eee">
  <gj-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <gj-menu :default-openeds="['1', '3']">
      <gj-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <gj-menu-item-group>
          <template slot="title">分组一</template>
          <gj-menu-item index="1-1">选项1</gj-menu-item>
          <gj-menu-item index="1-2">选项2</gj-menu-item>
        </gj-menu-item-group>
        <gj-menu-item-group title="分组2">
          <gj-menu-item index="1-3">选项3</gj-menu-item>
        </gj-menu-item-group>
        <gj-submenu index="1-4">
          <template slot="title">选项4</template>
          <gj-menu-item index="1-4-1">选项4-1</gj-menu-item>
        </gj-submenu>
      </gj-submenu>
      <gj-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <gj-menu-item-group>
          <template slot="title">分组一</template>
          <gj-menu-item index="2-1">选项1</gj-menu-item>
          <gj-menu-item index="2-2">选项2</gj-menu-item>
        </gj-menu-item-group>
        <gj-menu-item-group title="分组2">
          <gj-menu-item index="2-3">选项3</gj-menu-item>
        </gj-menu-item-group>
        <gj-submenu index="2-4">
          <template slot="title">选项4</template>
          <gj-menu-item index="2-4-1">选项4-1</gj-menu-item>
        </gj-submenu>
      </gj-submenu>
      <gj-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <gj-menu-item-group>
          <template slot="title">分组一</template>
          <gj-menu-item index="3-1">选项1</gj-menu-item>
          <gj-menu-item index="3-2">选项2</gj-menu-item>
        </gj-menu-item-group>
        <gj-menu-item-group title="分组2">
          <gj-menu-item index="3-3">选项3</gj-menu-item>
        </gj-menu-item-group>
        <gj-submenu index="3-4">
          <template slot="title">选项4</template>
          <gj-menu-item index="3-4-1">选项4-1</gj-menu-item>
        </gj-submenu>
      </gj-submenu>
    </gj-menu>
  </gj-aside>
  
  <gj-container>
    <gj-header style="text-align: right; font-size: 12px">
      <gj-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <gj-dropdown-menu slot="dropdown">
          <gj-dropdown-item>查看</gj-dropdown-item>
          <gj-dropdown-item>新增</gj-dropdown-item>
          <gj-dropdown-item>删除</gj-dropdown-item>
        </gj-dropdown-menu>
      </gj-dropdown>
      <span>王小虎</span>
    </gj-header>
    
    <gj-main>
      <gj-table :data="tableData">
        <gj-table-column prop="date" label="日期" width="140">
        </gj-table-column>
        <gj-table-column prop="name" label="姓名" width="120">
        </gj-table-column>
        <gj-table-column prop="address" label="地址">
        </gj-table-column>
      </gj-table>
    </gj-main>
  </gj-container>
</gj-container>

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

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |