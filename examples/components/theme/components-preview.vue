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
    <g-row class="demo-line">
      <g-button>Default</g-button>
      <g-button type="primary">Primary</g-button>
      <g-button type="success">Success</g-button>
      <g-button type="info">Info</g-button>
      <g-button type="warning">Warning</g-button>
      <g-button type="danger">Danger</g-button>
    </g-row>
    <g-row class="demo-line">
      <g-button plain>Plain</g-button>
      <g-button type="primary" plain>Primary</g-button>
      <g-button type="success" plain>Success</g-button>
      <g-button type="info" plain>Info</g-button>
      <g-button type="warning" plain>Warning</g-button>
      <g-button type="danger" plain>Danger</g-button>
    </g-row>
    <g-row class="demo-line">
      <g-button round>Round</g-button>
      <g-button type="primary" round>Primary</g-button>
      <g-button type="success" round>Success</g-button>
      <g-button type="info" round>Info</g-button>
      <g-button type="warning" round>Warning</g-button>
      <g-button type="danger" round>Danger</g-button>
    </g-row>
    <g-row class="demo-line">
      <g-button icon="el-icon-search" circle></g-button>
      <g-button type="primary" icon="el-icon-edit" circle></g-button>
      <g-button type="success" icon="el-icon-check" circle></g-button>
      <g-button type="info" icon="el-icon-message" circle></g-button>
      <g-button type="warning" icon="el-icon-star-off" circle></g-button>
      <g-button type="danger" icon="el-icon-delete" circle></g-button>
    </g-row>
    <g-row class="demo-line">
      <g-button>Default</g-button>
      <g-button size="medium">Medium</g-button>
      <g-button size="small">Small</g-button>
      <g-button size="mini">Mini</g-button>
    </g-row>
    <h4>Radio</h4>
    <g-row class="demo-line">
      <g-radio v-model="radio" label="1">Option A</g-radio>
      <g-radio v-model="radio" label="2">Option B</g-radio>
    </g-row>
    <g-row class="demo-line">
      <g-radio-group v-model="radio1">
        <g-radio-button label="New York"></g-radio-button>
        <g-radio-button label="Washington"></g-radio-button>
        <g-radio-button label="Los Angeles"></g-radio-button>
        <g-radio-button label="Chicago"></g-radio-button>
      </g-radio-group>
    </g-row>
    <g-row class="demo-line">
      <g-radio v-model="radio2" label="1" border>Option A</g-radio>
      <g-radio v-model="radio2" label="2" border>Option B</g-radio>
    </g-row>
    <h4>Checkbox</h4>
    <g-row class="demo-line">
      <g-checkbox v-model="checked">Option</g-checkbox>
    </g-row>
    <g-row class="demo-line">
      <g-checkbox-group v-model="checked1">
        <g-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</g-checkbox-button>
      </g-checkbox-group>
    </g-row>
    <g-row class="demo-line">
      <g-checkbox v-model="checked2" label="Option1" border></g-checkbox>
    </g-row>
    <h4>Input</h4>
    <g-row style="width: 180px">
      <g-input placeholder="Please input" v-model="input"></g-input>
    </g-row>
    <h4>InputNumber</h4>
    <g-row>
      <g-input-number v-model="inputNumber" :min="1" :max="10"></g-input-number>
    </g-row>
    <h4>Select</h4>
    <g-row>
      <g-select v-model="selectValue" placeholder="Select">
        <g-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></g-option>
      </g-select>
    </g-row>
    <h4>Cascader</h4>
    <g-row>
      <g-cascader :options="cascadeOptions" v-model="cascaderValue"></g-cascader>
    </g-row>
    <h4>Switch</h4>
    <g-row>
      <g-switch v-model="switchValue"></g-switch>
      <g-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </g-switch>
    </g-row>
    <h4>Slider</h4>
    <g-row style="width: 380px">
      <g-slider v-model="slider"></g-slider>
    </g-row>
    <h4>DatePicker</h4>
    <g-row>
      <g-date-picker v-model="datePicker" type="date"></g-date-picker>
    </g-row>
    <h4>Rate</h4>
    <g-row>
      <g-rate class="demo-line" v-model="rate"></g-rate>
      <g-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </g-rate>
    </g-row>
    <h4>Transfer</h4>
    <g-row>
      <g-transfer v-model="transfer" filterable :data="transferData">
        <g-button class="transfer-footer" slot="left-footer" size="small">Operation</g-button>
        <g-button class="transfer-footer" slot="right-footer" size="small">Operation</g-button>
      </g-transfer>
    </g-row>
    <h4>Table</h4>
    <g-row>
      <g-table :data="tableData" style="width: 70%">
        <g-table-column prop="date" label="Date" width="180"></g-table-column>
        <g-table-column prop="name" label="Name" width="180"></g-table-column>
        <g-table-column prop="address" label="Address"></g-table-column>
      </g-table>
    </g-row>
    <h4>Tag</h4>
    <g-row>
      <g-tag class="demo-item" closable>Tag One</g-tag>
      <g-tag class="demo-item" closable type="success">Tag Two</g-tag>
      <g-tag class="demo-item" closable type="info">Tag Three</g-tag>
      <g-tag class="demo-item" closable type="warning">Tag Four</g-tag>
      <g-tag class="demo-item" closable type="danger">Tag Five</g-tag>
    </g-row>
    <h4>Progress</h4>
    <g-row style="width: 380px">
      <g-progress :percentage="20"></g-progress>
      <g-progress :percentage="60" status="exception"></g-progress>
      <g-progress :percentage="100" status="success"></g-progress>
    </g-row>
    <h4>Tree</h4>
    <g-row style="width: 380px">
      <g-tree :data="treeData" :props="defaultTreeProps" ></g-tree>
    </g-row>
    <h4>Pagination</h4>
    <g-row>
      <g-pagination layout="prev, pager, next" :total="1000"></g-pagination>
    </g-row>
    <h4>Badge</h4>
    <g-row>
      <g-badge :value="12" class="demo-item">
        <g-button size="small">comments</g-button>
      </g-badge>
      <g-badge :value="3" class="demo-item">
        <g-button size="small">replies</g-button>
      </g-badge>
      <g-badge :value="1" class="demo-item" type="primary">
        <g-button size="small">comments</g-button>
      </g-badge>
      <g-badge :value="2" class="demo-item" type="warning">
        <g-button size="small">replies</g-button>
      </g-badge>
    </g-row>
    <h4>Alert</h4>
    <g-row style="width: 380px;">
      <g-alert class="demo-item" title="success alert" type="success" show-icon></g-alert>
      <g-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></g-alert>
      <g-alert class="demo-item" title="warning alert" type="warning" show-icon></g-alert>
      <g-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </g-alert>
    </g-row>
    <h4>Loading</h4>
    <g-row>
      <g-table :data="tableData" style="width: 90%" v-loading="true">
        <g-table-column prop="date" label="Date" width="180"></g-table-column>
        <g-table-column prop="name" label="Name" width="180"></g-table-column>
        <g-table-column prop="address" label="Address"></g-table-column>
      </g-table>
    </g-row>
    <h4>Message</h4>
    <g-row>
      <div role="alert" class="demo-item el-message el-message--success el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-success"></i><p class="el-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--warning el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-warning"></i><p class="el-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--info el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-info"></i><p class="el-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--error is-closable el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-error"></i><p class="el-message__content">Oops, this is a error message.</p><i class="el-message__closeBtn el-icon-close"></i></div>
    </g-row>
    <h4>MessageBox</h4>
    <g-row>
      <div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="el-message-box__headerbtn"><i class="el-message-box__close el-icon-close"></i></button></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning"></div><div class="el-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="el-message-box__input" style="display: none;"><div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" class="el-input__inner"><!----><!----><!----></div><div class="el-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="el-message-box__btns"><button type="button" class="el-button el-button--default el-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="el-button el-button--default el-button--small el-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </g-row>
    <h4>Notification</h4>
    <g-row>
      <div role="alert" class="el-notification right" style="position: relative; left: 0;"><!----><div class="el-notification__group"><span class="el-notification__title">Notification</span><div class="el-notification__content"><div>This is a message </div></div><div class="el-notification__closeBtn el-icon-close"></div></div></div>
    </g-row>
    <h4>Menu</h4>
    <g-row>
      <g-menu :default-active="menu" class="el-menu-demo" mode="horizontal">
        <g-menu-item index="1">Processing Center</g-menu-item>
        <g-submenu index="2">
          <template slot="title">Workspace</template>
          <g-menu-item index="2-1">item one</g-menu-item>
          <g-menu-item index="2-2">item two</g-menu-item>
          <g-menu-item index="2-3">item three</g-menu-item>
          <g-submenu index="2-4">
            <template slot="title">item four</template>
            <g-menu-item index="2-4-1">item one</g-menu-item>
            <g-menu-item index="2-4-2">item two</g-menu-item>
            <g-menu-item index="2-4-3">item three</g-menu-item>
          </g-submenu>
        </g-submenu>
        <g-menu-item index="3" disabled>Info</g-menu-item>
        <g-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </g-menu-item>
      </g-menu>
      <g-menu
        default-active="2"
        class="demo-line"
      >
        <g-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <g-menu-item-group title="Group One">
            <g-menu-item index="1-1">item one</g-menu-item>
            <g-menu-item index="1-2">item one</g-menu-item>
          </g-menu-item-group>
          <g-menu-item-group title="Group Two">
            <g-menu-item index="1-3">item three</g-menu-item>
          </g-menu-item-group>
          <g-submenu index="1-4">
            <template slot="title">item four</template>
            <g-menu-item index="1-4-1">item one</g-menu-item>
          </g-submenu>
        </g-submenu>
        <g-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>Navigator Two</span>
        </g-menu-item>
        <g-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span>Navigator Three</span>
        </g-menu-item>
        <g-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>Navigator Four</span>
        </g-menu-item>
      </g-menu>
    </g-row>
    <h4>Tabs</h4>
    <g-row>
      <g-tabs v-model="tab" class="demo-item">
        <g-tab-pane label="User" name="first">User</g-tab-pane>
        <g-tab-pane label="Config" name="second">Config</g-tab-pane>
        <g-tab-pane label="Role" name="third">Role</g-tab-pane>
        <g-tab-pane label="Task" name="fourth">Task</g-tab-pane>
      </g-tabs>
      <g-tabs type="card" class="demo-item">
        <g-tab-pane label="User">User</g-tab-pane>
        <g-tab-pane label="Config">Config</g-tab-pane>
        <g-tab-pane label="Role">Role</g-tab-pane>
        <g-tab-pane label="Task">Task</g-tab-pane>
      </g-tabs>
    </g-row>
    <h4>Dialog</h4>
    <g-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="el-dialog" style="margin: 0"><div class="el-dialog__header"><span class="el-dialog__title">Tips</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div><div class="el-dialog__body"><span>This is a message</span> </div><div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="el-button el-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </g-row>
    <h4>Tooltip</h4>
    <g-row>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </g-row>
    <h4>Popover</h4>
    <g-row>
      <div role="tooltip" x-placement="top" id="el-popover-2936" aria-hidden="true" class="el-popover el-popper el-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="el-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </g-row>
    <h4>Card</h4>
    <g-row>
      <g-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </g-card>
    </g-row>
    <h4>Carousel</h4>
    <g-row>
      <g-carousel height="150px">
        <g-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </g-carousel-item>
      </g-carousel>
    </g-row>
    <h4>Collapse</h4>
    <g-row>
      <g-collapse v-model="collapse">
        <g-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </g-collapse-item>
        <g-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </g-collapse-item>
      </g-collapse>
    </g-row>
    <h4>Avatar</h4>
    <g-row class="demo-line avatar-demo">
      <g-avatar icon="el-icon-user-solid"/>
      <g-avatar> avatar </g-avatar>
      <g-avatar shape="square" fit="contain" :src="avatarData.url"></g-avatar>
      <g-avatar size="large"> large </g-avatar>
      <g-avatar size="medium"> medium </g-avatar>
      <g-avatar size="small"> small </g-avatar>
    </g-row>
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
