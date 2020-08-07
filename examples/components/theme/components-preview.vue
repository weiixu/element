<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <gj-row class="demo-line">
      <gj-button>Default</gj-button>
      <gj-button type="primary">Primary</gj-button>
      <gj-button type="success">Success</gj-button>
      <gj-button type="info">Info</gj-button>
      <gj-button type="warning">Warning</gj-button>
      <gj-button type="danger">Danger</gj-button>
    </gj-row>
    <gj-row class="demo-line">
      <gj-button plain>Plain</gj-button>
      <gj-button type="primary" plain>Primary</gj-button>
      <gj-button type="success" plain>Success</gj-button>
      <gj-button type="info" plain>Info</gj-button>
      <gj-button type="warning" plain>Warning</gj-button>
      <gj-button type="danger" plain>Danger</gj-button>
    </gj-row>
    <gj-row class="demo-line">
      <gj-button round>Round</gj-button>
      <gj-button type="primary" round>Primary</gj-button>
      <gj-button type="success" round>Success</gj-button>
      <gj-button type="info" round>Info</gj-button>
      <gj-button type="warning" round>Warning</gj-button>
      <gj-button type="danger" round>Danger</gj-button>
    </gj-row>
    <gj-row class="demo-line">
      <gj-button icon="el-icon-search" circle></gj-button>
      <gj-button type="primary" icon="el-icon-edit" circle></gj-button>
      <gj-button type="success" icon="el-icon-check" circle></gj-button>
      <gj-button type="info" icon="el-icon-message" circle></gj-button>
      <gj-button type="warning" icon="el-icon-star-off" circle></gj-button>
      <gj-button type="danger" icon="el-icon-delete" circle></gj-button>
    </gj-row>
    <gj-row class="demo-line">
      <gj-button>Default</gj-button>
      <gj-button size="medium">Medium</gj-button>
      <gj-button size="small">Small</gj-button>
      <gj-button size="mini">Mini</gj-button>
    </gj-row>
    <h4>Radio</h4>
    <gj-row class="demo-line">
      <gj-radio v-model="radio" label="1">Option A</gj-radio>
      <gj-radio v-model="radio" label="2">Option B</gj-radio>
    </gj-row>
    <gj-row class="demo-line">
      <gj-radio-group v-model="radio1">
        <gj-radio-button label="New York"></gj-radio-button>
        <gj-radio-button label="Washington"></gj-radio-button>
        <gj-radio-button label="Los Angeles"></gj-radio-button>
        <gj-radio-button label="Chicago"></gj-radio-button>
      </gj-radio-group>
    </gj-row>
    <gj-row class="demo-line">
      <gj-radio v-model="radio2" label="1" border>Option A</gj-radio>
      <gj-radio v-model="radio2" label="2" border>Option B</gj-radio>
    </gj-row>
    <h4>Checkbox</h4>
    <gj-row class="demo-line">
      <gj-checkbox v-model="checked">Option</gj-checkbox>
    </gj-row>
    <gj-row class="demo-line">
      <gj-checkbox-group v-model="checked1">
        <gj-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</gj-checkbox-button>
      </gj-checkbox-group>
    </gj-row>
    <gj-row class="demo-line">
      <gj-checkbox v-model="checked2" label="Option1" border></gj-checkbox>
    </gj-row>
    <h4>Input</h4>
    <gj-row style="width: 180px">
      <gj-input placeholder="Please input" v-model="input"></gj-input>
    </gj-row>
    <h4>InputNumber</h4>
    <gj-row>
      <gj-input-number v-model="inputNumber" :min="1" :max="10"></gj-input-number>
    </gj-row>
    <h4>Select</h4>
    <gj-row>
      <gj-select v-model="selectValue" placeholder="Select">
        <gj-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></gj-option>
      </gj-select>
    </gj-row>
    <h4>Cascader</h4>
    <gj-row>
      <gj-cascader :options="cascadeOptions" v-model="cascaderValue"></gj-cascader>
    </gj-row>
    <h4>Switch</h4>
    <gj-row>
      <gj-switch v-model="switchValue"></gj-switch>
      <gj-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </gj-switch>
    </gj-row>
    <h4>Slider</h4>
    <gj-row style="width: 380px">
      <gj-slider v-model="slider"></gj-slider>
    </gj-row>
    <h4>DatePicker</h4>
    <gj-row>
      <gj-date-picker v-model="datePicker" type="date"></gj-date-picker>
    </gj-row>
    <h4>Rate</h4>
    <gj-row>
      <gj-rate class="demo-line" v-model="rate"></gj-rate>
      <gj-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </gj-rate>
    </gj-row>
    <h4>Transfer</h4>
    <gj-row>
      <gj-transfer v-model="transfer" filterable :data="transferData">
        <gj-button class="transfer-footer" slot="left-footer" size="small">Operation</gj-button>
        <gj-button class="transfer-footer" slot="right-footer" size="small">Operation</gj-button>
      </gj-transfer>
    </gj-row>
    <h4>Table</h4>
    <gj-row>
      <gj-table :data="tableData" style="width: 70%">
        <gj-table-column prop="date" label="Date" width="180"></gj-table-column>
        <gj-table-column prop="name" label="Name" width="180"></gj-table-column>
        <gj-table-column prop="address" label="Address"></gj-table-column>
      </gj-table>
    </gj-row>
    <h4>Tag</h4>
    <gj-row>
      <gj-tag class="demo-item" closable>Tag One</gj-tag>
      <gj-tag class="demo-item" closable type="success">Tag Two</gj-tag>
      <gj-tag class="demo-item" closable type="info">Tag Three</gj-tag>
      <gj-tag class="demo-item" closable type="warning">Tag Four</gj-tag>
      <gj-tag class="demo-item" closable type="danger">Tag Five</gj-tag>
    </gj-row>
    <h4>Progress</h4>
    <gj-row style="width: 380px">
      <gj-progress :percentage="20"></gj-progress>
      <gj-progress :percentage="60" status="exception"></gj-progress>
      <gj-progress :percentage="100" status="success"></gj-progress>
    </gj-row>
    <h4>Tree</h4>
    <gj-row style="width: 380px">
      <gj-tree :data="treeData" :props="defaultTreeProps" ></gj-tree>
    </gj-row>
    <h4>Pagination</h4>
    <gj-row>
      <gj-pagination layout="prev, pager, next" :total="1000"></gj-pagination>
    </gj-row>
    <h4>Badge</h4>
    <gj-row>
      <gj-badge :value="12" class="demo-item">
        <gj-button size="small">comments</gj-button>
      </gj-badge>
      <gj-badge :value="3" class="demo-item">
        <gj-button size="small">replies</gj-button>
      </gj-badge>
      <gj-badge :value="1" class="demo-item" type="primary">
        <gj-button size="small">comments</gj-button>
      </gj-badge>
      <gj-badge :value="2" class="demo-item" type="warning">
        <gj-button size="small">replies</gj-button>
      </gj-badge>
    </gj-row>
    <h4>Alert</h4>
    <gj-row style="width: 380px;">
      <gj-alert class="demo-item" title="success alert" type="success" show-icon></gj-alert>
      <gj-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></gj-alert>
      <gj-alert class="demo-item" title="warning alert" type="warning" show-icon></gj-alert>
      <gj-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </gj-alert>
    </gj-row>
    <h4>Loading</h4>
    <gj-row>
      <gj-table :data="tableData" style="width: 90%" v-loading="true">
        <gj-table-column prop="date" label="Date" width="180"></gj-table-column>
        <gj-table-column prop="name" label="Name" width="180"></gj-table-column>
        <gj-table-column prop="address" label="Address"></gj-table-column>
      </gj-table>
    </gj-row>
    <h4>Message</h4>
    <gj-row>
      <div role="alert" class="demo-item el-message el-message--success el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-success"></i><p class="el-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--warning el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-warning"></i><p class="el-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--info el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-info"></i><p class="el-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--error is-closable el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-error"></i><p class="el-message__content">Oops, this is a error message.</p><i class="el-message__closeBtn el-icon-close"></i></div>
    </gj-row>
    <h4>MessageBox</h4>
    <gj-row>
      <div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="el-message-box__headerbtn"><i class="el-message-box__close el-icon-close"></i></button></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning"></div><div class="el-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="el-message-box__input" style="display: none;"><div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" class="el-input__inner"><!----><!----><!----></div><div class="el-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="el-message-box__btns"><button type="button" class="el-button el-button--default el-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="el-button el-button--default el-button--small el-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </gj-row>
    <h4>Notification</h4>
    <gj-row>
      <div role="alert" class="el-notification right" style="position: relative; left: 0;"><!----><div class="el-notification__group"><span class="el-notification__title">Notification</span><div class="el-notification__content"><div>This is a message </div></div><div class="el-notification__closeBtn el-icon-close"></div></div></div>
    </gj-row>
    <h4>Menu</h4>
    <gj-row>
      <gj-menu :default-active="menu" class="el-menu-demo" mode="horizontal">
        <gj-menu-item index="1">Processing Center</gj-menu-item>
        <gj-submenu index="2">
          <template slot="title">Workspace</template>
          <gj-menu-item index="2-1">item one</gj-menu-item>
          <gj-menu-item index="2-2">item two</gj-menu-item>
          <gj-menu-item index="2-3">item three</gj-menu-item>
          <gj-submenu index="2-4">
            <template slot="title">item four</template>
            <gj-menu-item index="2-4-1">item one</gj-menu-item>
            <gj-menu-item index="2-4-2">item two</gj-menu-item>
            <gj-menu-item index="2-4-3">item three</gj-menu-item>
          </gj-submenu>
        </gj-submenu>
        <gj-menu-item index="3" disabled>Info</gj-menu-item>
        <gj-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </gj-menu-item>
      </gj-menu>
      <gj-menu
        default-active="2"
        class="demo-line"
      >
        <gj-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <gj-menu-item-group title="Group One">
            <gj-menu-item index="1-1">item one</gj-menu-item>
            <gj-menu-item index="1-2">item one</gj-menu-item>
          </gj-menu-item-group>
          <gj-menu-item-group title="Group Two">
            <gj-menu-item index="1-3">item three</gj-menu-item>
          </gj-menu-item-group>
          <gj-submenu index="1-4">
            <template slot="title">item four</template>
            <gj-menu-item index="1-4-1">item one</gj-menu-item>
          </gj-submenu>
        </gj-submenu>
        <gj-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>Navigator Two</span>
        </gj-menu-item>
        <gj-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span>Navigator Three</span>
        </gj-menu-item>
        <gj-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>Navigator Four</span>
        </gj-menu-item>
      </gj-menu>
    </gj-row>
    <h4>Tabs</h4>
    <gj-row>
      <gj-tabs v-model="tab" class="demo-item">
        <gj-tab-pane label="User" name="first">User</gj-tab-pane>
        <gj-tab-pane label="Config" name="second">Config</gj-tab-pane>
        <gj-tab-pane label="Role" name="third">Role</gj-tab-pane>
        <gj-tab-pane label="Task" name="fourth">Task</gj-tab-pane>
      </gj-tabs>
      <gj-tabs type="card" class="demo-item">
        <gj-tab-pane label="User">User</gj-tab-pane>
        <gj-tab-pane label="Config">Config</gj-tab-pane>
        <gj-tab-pane label="Role">Role</gj-tab-pane>
        <gj-tab-pane label="Task">Task</gj-tab-pane>
      </gj-tabs>
    </gj-row>
    <h4>Dialog</h4>
    <gj-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="el-dialog" style="margin: 0"><div class="el-dialog__header"><span class="el-dialog__title">Tips</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div><div class="el-dialog__body"><span>This is a message</span> </div><div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="el-button el-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </gj-row>
    <h4>Tooltip</h4>
    <gj-row>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </gj-row>
    <h4>Popover</h4>
    <gj-row>
      <div role="tooltip" x-placement="top" id="el-popover-2936" aria-hidden="true" class="el-popover el-popper el-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="el-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </gj-row>
    <h4>Card</h4>
    <gj-row>
      <gj-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </gj-card>
    </gj-row>
    <h4>Carousel</h4>
    <gj-row>
      <gj-carousel height="150px">
        <gj-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </gj-carousel-item>
      </gj-carousel>
    </gj-row>
    <h4>Collapse</h4>
    <gj-row>
      <gj-collapse v-model="collapse">
        <gj-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </gj-collapse-item>
        <gj-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </gj-collapse-item>
      </gj-collapse>
    </gj-row>
    <h4>Avatar</h4>
    <gj-row class="demo-line avatar-demo">
      <gj-avatar icon="el-icon-user-solid"/>
      <gj-avatar> avatar </gj-avatar>
      <gj-avatar shape="square" fit="contain" :src="avatarData.url"></gj-avatar>
      <gj-avatar size="large"> large </gj-avatar>
      <gj-avatar size="medium"> medium </gj-avatar>
      <gj-avatar size="small"> small </gj-avatar>
    </gj-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Element',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  }
};
</script>
