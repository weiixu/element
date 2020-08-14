## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<g-container>`：外层容器。当子元素中包含 `<g-header>` 或 `<g-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<g-header>`：顶栏容器。

`<g-aside>`：侧边栏容器。

`<g-main>`：主要区域容器。

`<g-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<g-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<g-container>`。
:::

### 常见页面布局

:::demo
```html
<g-container>
  <g-header>Header</g-header>
  <g-main>Main</g-main>
</g-container>

<g-container>
  <g-header>Header</g-header>
  <g-main>Main</g-main>
  <g-footer>Footer</g-footer>
</g-container>

<g-container>
  <g-aside width="200px">Aside</g-aside>
  <g-main>Main</g-main>
</g-container>

<g-container>
  <g-header>Header</g-header>
  <g-container>
    <g-aside width="200px">Aside</g-aside>
    <g-main>Main</g-main>
  </g-container>
</g-container>

<g-container>
  <g-header>Header</g-header>
  <g-container>
    <g-aside width="200px">Aside</g-aside>
    <g-container>
      <g-main>Main</g-main>
      <g-footer>Footer</g-footer>
    </g-container>
  </g-container>
</g-container>

<g-container>
  <g-aside width="200px">Aside</g-aside>
  <g-container>
    <g-header>Header</g-header>
    <g-main>Main</g-main>
  </g-container>
</g-container>

<g-container>
  <g-aside width="200px">Aside</g-aside>
  <g-container>
    <g-header>Header</g-header>
    <g-main>Main</g-main>
    <g-footer>Footer</g-footer>
  </g-container>
</g-container>

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
<g-container style="height: 500px; border: 1px solid #eee">
  <g-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <g-menu :default-openeds="['1', '3']">
      <g-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <g-menu-item-group>
          <template slot="title">分组一</template>
          <g-menu-item index="1-1">选项1</g-menu-item>
          <g-menu-item index="1-2">选项2</g-menu-item>
        </g-menu-item-group>
        <g-menu-item-group title="分组2">
          <g-menu-item index="1-3">选项3</g-menu-item>
        </g-menu-item-group>
        <g-submenu index="1-4">
          <template slot="title">选项4</template>
          <g-menu-item index="1-4-1">选项4-1</g-menu-item>
        </g-submenu>
      </g-submenu>
      <g-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <g-menu-item-group>
          <template slot="title">分组一</template>
          <g-menu-item index="2-1">选项1</g-menu-item>
          <g-menu-item index="2-2">选项2</g-menu-item>
        </g-menu-item-group>
        <g-menu-item-group title="分组2">
          <g-menu-item index="2-3">选项3</g-menu-item>
        </g-menu-item-group>
        <g-submenu index="2-4">
          <template slot="title">选项4</template>
          <g-menu-item index="2-4-1">选项4-1</g-menu-item>
        </g-submenu>
      </g-submenu>
      <g-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <g-menu-item-group>
          <template slot="title">分组一</template>
          <g-menu-item index="3-1">选项1</g-menu-item>
          <g-menu-item index="3-2">选项2</g-menu-item>
        </g-menu-item-group>
        <g-menu-item-group title="分组2">
          <g-menu-item index="3-3">选项3</g-menu-item>
        </g-menu-item-group>
        <g-submenu index="3-4">
          <template slot="title">选项4</template>
          <g-menu-item index="3-4-1">选项4-1</g-menu-item>
        </g-submenu>
      </g-submenu>
    </g-menu>
  </g-aside>
  
  <g-container>
    <g-header style="text-align: right; font-size: 12px">
      <g-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <g-dropdown-menu slot="dropdown">
          <g-dropdown-item>查看</g-dropdown-item>
          <g-dropdown-item>新增</g-dropdown-item>
          <g-dropdown-item>删除</g-dropdown-item>
        </g-dropdown-menu>
      </g-dropdown>
      <span>王小虎</span>
    </g-header>
    
    <g-main>
      <g-table :data="tableData">
        <g-table-column prop="date" label="日期" width="140">
        </g-table-column>
        <g-table-column prop="name" label="姓名" width="120">
        </g-table-column>
        <g-table-column prop="address" label="地址">
        </g-table-column>
      </g-table>
    </g-main>
  </g-container>
</g-container>

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