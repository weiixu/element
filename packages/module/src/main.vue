<template>
  <component :is="getName" v-bind="props">
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'GjModule',
  componentName: 'GjModule',
  props: {
    props: {
      type: Object
    },
    name: {
      type: String
    }
  },
  computed: {
    getName() {
      return this.getCompName(this.name);
    }
  },
  // mounted() {
  //   this.init();
  // },
  methods: {
    // init() {
    //   console.log(this, this.$attrs, this.$slots);
    // },
    getCompName(name) {
      // 指向对应组件
      const oName = {
        input: 'ElInput',
        select: 'ElSelect',
        option: 'ElOption',
        radio: 'ElRadioGroup',
        radioOpt: 'ElRadio',
        checkbox: 'ElCheckboxGroup',
        checkboxOpt: 'ElCheckbox',
        date: 'ElDatePicker',
        time: 'ElTimePicker',
        cascader: 'ElCascader',
        button: 'ElButton'
      };
      return oName[name] ? oName[name] : name ? name : 'div';
    }
  }
};
</script>