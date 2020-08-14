<template>
  <div class="g-panel" :class="{'g-panel-static': static}">
    <div class="g-panel-wrapper" :class="{'g-panel-wrapper-full': data.panelFull}">
      <div class="g-panel-modal" v-if="data.panelFull" @click="handlePanelFull(data, false)"></div>
      <div class="g-panel-box" ref="panel_box" :class="{'g-panel-full': data.panelFull, 'g-panel-abs': absHeader, 'ww-scrollbar-wrap': data.panelFull}" v-if="!data.reload" v-dragMove="drag ? {header: '.g-panel-header', wrap:'.g-panel-box', excludeClass:'is-fullscreen'} : {}" v-dragLayout="drag ? 'this' : ''">
        <!-- v-scrollBar:hide="{disabled: !data.panelFull}"  -->
        <div class="g-panel-header clearfix" :class="{'g-panel-header-bg': headerBg}" :style="headerStyle">
          <slot name="header" v-if="$slots.header || title">
            <span class="g-panel-title"> {{ title }} </span>
          </slot>
          <span class="g-panel-title" v-else-if="data.title">{{$decodeStr(data.title)}}</span>
          <div class="g-panel-header-tool pull-right" :class="{'hasTabs': hasTabs}" v-if="showTool">
            <!-- <div class="g-panel-tool-item"> {{data.comps}} </div> -->
            <!-- <div class="g-panel-tool-item"> H:{{bodyHeight}} </div> -->
            <slot name="toolItem" v-if="$slots.toolItem"></slot>
            <!-- <div class="g-panel-tool-item" :class="{'panel-tool-search': true, 'active': data.panelSearch}" v-if="componentTree.length > 0">
              <el-tooltip :content="$t('page.addContent')" :open-delay="0" placement="bottom" effect="light">
                <i class="icon-meun_search_o" v-show="!data.panelSearch" @click="togglePanelSearch(data, true)"></i>
              </el-tooltip>
              <el-cascader v-if="data.panelSearch" v-model="data.value" @visible-change="handleClickCurrentData(data)" :ref="`cascader_${panelKey}`" @change="(value)=>{changeComponentTree(value, `cascader_${panelKey}`, data)}" :options="componentTree" size="mini" popper-class="popover-light" filterable>
                <span slot-scope="{ node, data }">{{ $decodeStr(data.label) }}</span>
                <div slot="suffix"></div>
              </el-cascader>
            </div> -->
            <div class="g-panel-tool-item" v-show="!data.panelFull">
              <i class="el-icon-full-screen" @click="handlePanelFull(data, true)"></i>
            </div>
            <div class="g-panel-tool-item" v-show="data.panelFull">
              <i class="el-icon-close" @click="handlePanelFull(data, false)"></i>
            </div>
          </div>
        </div>
        <div class="g-panel-body" :class="{'ww-scrollbar-wrap': data.panelFull}" :style="setBodyStyle">
          <!-- v-scrollBar:hide="{disabled: !data.panelFull && !isGridWrap, wheelPropagation: false}"> -->
          <div v-if="static" class="g-panel-content-wrap">
            <div class="g-panel-content export-img-bg watermark--logo" :ref="`${imgWrapName}_${panelKey}`">
              <slot :height="bodyHeight" :heightPx="bodyHeight + 'px'" :panelFull="data.panelFull"></slot>
            </div>
          </div>
          <div v-else class="g-panel-content-wrap">
            <div class="g-panel-content export-img-bg watermark--logo" :ref="`${imgWrapName}_${panelKey}`">
              <component v-if="hasComponent(app.name)" :ref="`${compWrapName}_${panelKey}`" v-for="(app, i) in data.comps" :key="i" :is="app.name" :data="app.data" :isGridWrap="isGridWrap" :params="app.params"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dragMove, dragLayout } from 'element-ui/src/directives/dragMove';
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
// import saveImg from '@/mixin/saveImg'
// import { closest } from '@/utils/dom';
// // 面板嵌入组件获取高度
// export function changeGridBoxHeight(el) {
//   return new Promise((resolve, reject) => {
//     const oPanelFull = closest(el, '.g-panel-full')
//     el = oPanelFull ? oPanelFull : closest(el, '.gridBoxBody')
//     if (el) {
//       const oHeader = el.querySelector('.g-panel-header')
//       const header_height = (oHeader ? oHeader.offsetHeight : 32) + (oPanelFull ? 12 : 4)
//       if (el.offsetHeight > header_height) {
//         resolve(el.offsetHeight - header_height);
//       } else {
//         reject();
//       }
//     } else {
//       reject();
//     }
//   })
// }
export default {
  name: 'GPanel',
  // mixins: [saveImg],

  directives: {
    dragMove,
    dragLayout
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    header: {},
    bodyStyle: {},
    fullBodyStyle: {},
    headerStyle: {},
    componentTree: {
      type: Array,
      default: () => {
        return [];
      }
    },
    panelKey: {
      type: String,
      default: 'panelKey'
    },
    static: {
      type: Boolean,
      default: true
    },
    absHeader: {
      type: Boolean,
      default: false
    },
    headerBg: {
      type: Boolean,
      default: false
    },
    showTool: {
      type: Boolean,
      default: true
    },
    reload: {
      type: Boolean,
      default: false
    },
    drag: {
      type: Boolean,
      default: true
    },
    tabsGap: {
      type: Number,
      default: 26
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {
        return {
          title: '',
          panelFull: false
        };
      }
    }
  },
  computed: {
    isGridWrap() {
      return !this.static;
    },
    setBodyStyle() {
      return this.data.panelFull ? this.fullBodyStyle : this.bodyStyle;
    }
  },
  data() {
    return {
      currentData: {},
      bodyHeight: '',
      hasTabs: false,
      compWrapName: 'compWrapName',
      imgWrapName: 'imgWrapName'
    };
  },
  created() {
    this.$nextTick(() => {
      addResizeListener(this.$el, this.setHeight);
      this.$once('hook:beforeDestroy', function() {
        if (this.$el) removeResizeListener(this.$el, this.setHeight);
      });
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.initTabsGap();
    });
    document.addEventListener('keydown', this.keydown);
    this.$once('hook:beforeDestroy', function() {
      document.removeEventListener('keydown', this.keydown);
    });
  },
  methods: {
    hasComponent(name) {
      // console.log(this.$root)
      const result = this.$root.$options.components[name];
      if (!result) console.warn('未找到组件！');
      return result;
    },
    keydown(e) {
      if (e.keyCode === 27 && this.closeOnPressEscape) {
        this.handlePanelFull(this.data, false);
      }
    },
    initTabsGap() {
      if (this.tabsGap) {
        const wrap = this.$refs[`${this.imgWrapName}_${this.panelKey}`];
        const panel_tool_tabs = wrap.querySelector('.panel_tool_tabs');
        if (panel_tool_tabs) {
          const header = panel_tool_tabs.querySelector('.el-tabs__header');
          if (header && !this.isGridWrap) {
            this.hasTabs = true;
            header.style.marginRight = this.tabsGap + 'px';
          }
        }
      }
    },
    // 搜索
    togglePanelSearch(data, value) {
      this.$set(data, 'panelSearch', value);
    },
    // 全屏切换
    handlePanelFull(data, val) {
      if (!val) {
        // 清除拖拽样式
        const panel_box = this.$refs.panel_box;
        panel_box.style.width = '';
        panel_box.style.height = '';
        panel_box.style.left = '';
        panel_box.style.top = '';
        panel_box.style.position = '';
        panel_box.style.margin = '';
        const oBody = panel_box.querySelector('.g-panel-body');
        if (oBody) {
          oBody.style.height = '';
        }
      }
      this.$set(data, 'panelFull', val);
      this.$emit('fullscreen', data.panelFull);
      this.handleReload(data);
    },
    // 组件重载
    handleReload(data) {
      if (!this.reload) return;
      // console.log('handleReload', data)
      this.$set(data, 'reload', true);
      // this.$set(data, 'reloadActive', true)
      this.$nextTick(() => {
        this.$set(data, 'reload', false);
        // this.$set(data, 'reloadActive', false)
      });
    },
    handleClickCurrentData(data) {
      // console.log(data)
      this.togglePanelSearch(data, true);
      this.currentData = data;
    },
    changeComponentTree(value, refCode, data) {
      data.value = value;
      // 时值为空，不做处理
      if (!value) return;
      const cascader = this.$refs[refCode];
      const getCheckedNodes = cascader.getCheckedNodes(); // [0].pathLabels
      const oData = getCheckedNodes[0].data;
      // 隐藏选择框
      this.$set(data, 'panelSearch', '');
      // console.log(cascader, getCheckedNodes, getCheckedNodes[0].data)
      // console.log(value, data)
      this.handleCommand({
        title: oData.name,
        comps: [{
          name: oData.componentName,
          params: oData.componentParams
        }]
      });
    },
    setHeight() {
      const el = this.$el;
      const box = el.querySelector('.g-panel-box');
      const header = el.querySelector('.g-panel-header');
      this.bodyHeight = box.offsetHeight - header.offsetHeight;
      // console.log('bodyHeight', this.bodyHeight)
    },
    updateHeight() {
      const compWrap = this.$refs[`${this.compWrapName}_${this.panelKey}`];
      compWrap && compWrap.forEach((vueComp) => {
        vueComp.updateHeight && vueComp.updateHeight();
      });
    },
    handleCommand(data) {
      if (!data) return;
      const { title, comps } = data;
      // 单个组件
      this.currentData.title = title;
      this.currentData.comps = comps;
      // 多个组件
      // comps.forEach(comp => {
      //   this.currentData.comps.push(comp)
      // })
      // console.log(this.currentData, data)
      this.$emit('change', data);
    },
    // 生成图片
    handleSaveImg(refCode) {
      const imgWrap = this.$refs[refCode];
      this.domToImg(imgWrap);
    }
  }
};
</script>