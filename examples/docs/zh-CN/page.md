## Page 页面容器

Page 组件是`JSON配置页面`中，`唯一的` 顶级容器组件，是整个页面配置的入口组件。

### 基本用法

:::demo 我们这里在内容区中简单渲染一段文字。

```html
<g-page v-bind="pageData"></g-page>

<script>
  export default {
    data() {
      return {
        pageData: {
          type: "page",
          body: "Hello World!",
        },
      };
    },
  };
</script>
```

:::

### 文本中获取变量

:::demo 可以支持在普通文本中，使用数据映射语法：\${xxx} 获取数据域中变量的值，如下

```html
<g-page v-bind="pageData"></g-page>

<script>
  export default {
    data() {
      return {
        pageData: {
          type: "page",
          body: "date is ${date}.",
          data: {
            date: new Date(),
          },
        },
      };
    },
  };
</script>
```

:::

### 渲染 html

:::demo 可以支持在普通文本中，使用数据映射语法：\${xxx} 获取数据域中变量的值，如下

```html
<g-page v-bind="pageData"></g-page>

<script>
  export default {
    data() {
      return {
        pageData: {
          type: "page",
          body: "<h1>Hello</h1> <span>${text}</span>",
          data: {
            text: "World!",
          },
        },
      };
    },
  };
</script>
```

:::

### 添加初始化接口

:::tip
API 接口返回格式：{
"status": 0,
"msg": "",
"data": {
...
}
}。
:::

:::demo 异步请求数据显示。

```html
<g-page v-bind="pageData"></g-page>

<script>
  export default {
    data() {
      return {
        pageData: {
          type: "page",
          initApi: "/api/page/initData",
          body: "Date is ${ajax.date}",
          data: {
            ajax: {
              date: "",
            },
          },
        },
      };
    },
  };
</script>
```

:::

### 组件层级显示渲染

:::tip
渲染组件，存在异常状况时，需自定义调整。
:::

:::demo 内容区同样可以渲染各种组件，这里我们渲染一个表单。

```html
<g-page v-bind="pageData"></g-page>

<script>
  export default {
    data() {
      return {
        input: "",
        pageData: {
          type: "page",
          body: {
            type: "form",
            props: {
              inline: true,
              labelWidth: "80px",
              model: {
                name: "",
              },
            },
            // api: "/api/form/saveForm",
            children: [
              {
                type: "g-form-item",
                props: { label: "名称" },
                children: [
                  {
                    type: "input",
                    props: {
                      value: "",
                      type: "text",
                    },
                    change: function(val) {
                      console.log("change", val, this);
                    },
                  },
                ],
              },
              {
                type: "g-form-item",
                props: { label: "日期" },
                children: [
                  {
                    type: "date",
                    props: {
                      value: new Date(),
                      placeholder: "选择日期",
                    },
                  },
                ],
              },
              {
                type: "g-form-item",
                children: [
                  {
                    type: "button",
                    text: "查询",
                    actionType: "submit",
                    props: {
                      type: "primary",
                    },
                    click: function(prop) {
                      console.log(prop, this);
                    },
                  },
                ],
              },
            ],
          },
        },
      };
    },
  };
</script>
```

:::

### Attributes

| 参数      | 说明       | 类型   | 可选值 | 默认值 |
| --------- | ---------- | ------ | ------ | ------ |
| propsData | 显示的数据 | object | —      |
