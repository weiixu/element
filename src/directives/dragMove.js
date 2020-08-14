/* jshint esversion: 6 */
import { hasClass, setStyle } from 'element-ui/src/utils/dom';
const scope = 'dragMove';
export const dragMove = {
  bind(el, binding) {
    const { header, wrap, excludeClass } = binding.value;
    const oDragHeader = el.querySelector(header);
    const oDragWrap = wrap ? el.querySelector(wrap) : el;
    // oDragHeader.style.cursor = 'move';
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = oDragWrap.currentStyle || window.getComputedStyle(oDragWrap, null);
    const dragMousedown = (e) => {
      // dialog全屏不允许拖动;
      // 当前是panel，则放大前不允许拖动  || (hasClass(oDragWrap, 'g-panel-box') && !hasClass(oDragWrap, 'g-panel-full'))
      if (hasClass(oDragWrap, excludeClass)) return;
      // 绝对定位
      if (oDragWrap.style.position !== 'absolute') {
        oDragWrap.style.left = `${oDragWrap.offsetLeft}px`;
        oDragWrap.style.top = `${oDragWrap.offsetTop}px`;
        oDragWrap.style.position = 'absolute';
        oDragWrap.style.margin = 0;
      }
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - oDragHeader.offsetLeft;
      const disY = e.clientY - oDragHeader.offsetTop;

      // 获取到的值带px 正则匹配替换
      let styL, styT;

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
      } else {
        styL = +sty.left.replace(/\px/g, '');
        styT = +sty.top.replace(/\px/g, '');
      }

      const dragMove = function(e) {
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX;
        const t = e.clientY - disY;
        let finallyL = l + styL;
        let finallyT = t + styT;

        // 边界值判定 注意clientWidth scrollWidth区别 要减去之前的top left值
        // oDragWrap.offsetParent表示弹窗阴影部分
        if (finallyL < 0) {
          finallyL = 0;
        } else if (finallyL > oDragWrap.offsetParent.offsetWidth - oDragWrap.offsetWidth - oDragWrap.offsetParent.offsetLeft) {
          finallyL = oDragWrap.offsetParent.offsetWidth - oDragWrap.offsetWidth - oDragWrap.offsetParent.offsetLeft;
        }

        if (finallyT < 0) {
          finallyT = 0;
        } else if (finallyT > oDragWrap.offsetParent.offsetHeight - oDragWrap.offsetHeight - oDragWrap.offsetParent.offsetTop) {
          finallyT = oDragWrap.offsetParent.offsetHeight - oDragWrap.offsetHeight - oDragWrap.offsetParent.offsetTop;
        }

        // 移动当前元素, 清除边距
        oDragWrap.style.left = `${finallyL}px`;
        oDragWrap.style.top = `${finallyT}px`;
        // 使用绝对定位
        oDragWrap.style.position = 'absolute';
        oDragWrap.style.marginBottom = 0;
        oDragWrap.style.marginTop = 0;
        oDragWrap.style.marginLeft = 0;
        oDragWrap.style.marginRight = 0;

        // 将此时的位置传出去
        // binding.value({x:e.pageX,y:e.pageY})
      };
      const dragMouseup = function(e) {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragMouseup);
      };
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragMouseup);
    };
    el[scope] = { el, oDragHeader, oDragWrap, dragMousedown};
    oDragHeader.addEventListener('mousedown', dragMousedown);
  },
  unbind(el, binding, vnode, oldVnode) {
    const { oDragHeader, dragMousedown } = el[scope];
    oDragHeader.removeEventListener('mousedown', dragMousedown);
  }
};

// v-dragMove: 拖拽移动
const updateLayout = (wrap, h) => {
  // dialog 更新高度
  if (wrap.__updateLayout) wrap.__updateLayout();
  // todo 组件滚动溢出
  const oBody = wrap.querySelector('.g-panel-body');
  if (oBody) {
    oBody.style.height = h + 'px';
  }
  // todo 组件未更新高度
  const oContent = wrap.querySelector('.g-panel-content');
  if (oContent) {
    const oComp = oContent.firstElementChild;
    if (oComp.__updateLayout) oComp.__updateLayout();
  }
};
const scopeLayout = 'dragLayout';
// v-dragLayout: 拖拽大小
export const dragLayout = {
  bind(el, binding, vnode, oldVnode) {
    // console.log(binding, el)
    const { value } = binding;
    const mouseStart = {};
    const rightStart = {};
    const bottomStart = {};
    const divStart = {};
    if (value === '') return;
    const oWrap = el.querySelector(value);
    const oDragWrap = oWrap ? oWrap : el;
    // add dom
    function addDragDom(clsName) {
      const oDiv = document.createElement('div');
      oDiv.classList.add(clsName);
      oDragWrap.append(oDiv);
      return oDiv;
    }

    const oR = addDragDom('drag--r');
    setStyle(oR, {
      width: '6px',
      height: '100%',
      position: 'absolute',
      right: '0',
      top: '0',
      cursor: 'e-resize',
      opacity: '0',
      zIndex: '1'
    });
    const oB = addDragDom('drag--b');
    setStyle(oB, {
      width: '100%',
      height: '6px',
      position: 'absolute',
      left: '0',
      bottom: '0',
      cursor: 'n-resize',
      opacity: '0',
      zIndex: '1'
    });
    const oRB = addDragDom('drag--rb');
    setStyle(oRB, {
      width: '8px',
      height: '8px',
      position: 'absolute',
      right: '0',
      bottom: '0',
      cursor: 'nw-resize',
      zIndex: '3'
    });

    vnode.context.$nextTick(() => {
      const mousedown_r = function(e) {
        mousedownBefore(e, 'right');
      };
      const mousedown_b = function(e) {
        mousedownBefore(e, 'down');
      };
      const mousedown_rb = function(e) {
        mousedownBefore(e, 'rightBottom');
      };
      // add event
      oR.addEventListener('mousedown', mousedown_r);
      oB.addEventListener('mousedown', mousedown_b);
      oRB.addEventListener('mousedown', mousedown_rb);
      el[scopeLayout] = { el, oR, oB, oRB, mousedown_r, mousedown_b, mousedown_rb };

      function removeDrag(mousemove, mouseup) {
        document.removeEventListener('mousemove', mousemove, true);
        document.removeEventListener('mouseup', mouseup, true);
      }

      function mousedownBefore(e, direction) {
        // 当前是panel，则放大前不允许拖动
        if (hasClass(oDragWrap, 'g-panel-box') && !hasClass(oDragWrap, 'g-panel-full')) return;
        mouseStart.x = e.clientX;
        mouseStart.y = e.clientY;
        let mousemove = '';
        let mouseup = '';
        if (direction === 'right') {
          rightStart.x = oR.offsetLeft;
          mousemove = doDrag1;
          mouseup = stopDrag1;
        } else if (direction === 'down') {
          bottomStart.y = oB.offsetTop;
          mousemove = doDrag2;
          mouseup = stopDrag2;
        } else if (direction === 'rightBottom') {
          divStart.x = oRB.offsetLeft;
          divStart.y = oRB.offsetTop;
          mousemove = doDrag;
          mouseup = stopDrag;
        }
        document.addEventListener('mousemove', mousemove, true);
        document.addEventListener('mouseup', mouseup, true);
      }

      // right
      function doDrag1(e) {
        var l = e.clientX - mouseStart.x + rightStart.x;
        var w = l + oRB.offsetWidth;
        if (w < oRB.offsetWidth) {
          w = oRB.offsetWidth;
        } else if (w > document.documentElement.clientWidth - oDragWrap.offsetLeft) {
          w = document.documentElement.clientWidth - oDragWrap.offsetLeft - 2;
        }
        oDragWrap.style.width = w + 'px';
      }

      function stopDrag1() {
        removeDrag(doDrag1, stopDrag1);
      }
      // down
      function doDrag2(e) {
        var t = e.clientY - mouseStart.y + bottomStart.y;
        var h = t + oRB.offsetHeight;

        if (h < oRB.offsetHeight) {
          h = oRB.offsetHeight;
        } else if (h > document.documentElement.clientHeight - oDragWrap.offsetTop) {
          h = document.documentElement.clientHeight - oDragWrap.offsetTop - 2;
        }
        oDragWrap.style.height = h + 'px';
        updateLayout(oDragWrap, h);
      }

      function stopDrag2() {
        removeDrag(doDrag2, stopDrag2);
      }
      // 左右同时拽
      function doDrag(e) {
        var l = e.clientX - mouseStart.x + divStart.x;
        var t = e.clientY - mouseStart.y + divStart.y;

        var w = l + oRB.offsetWidth;
        var h = t + oRB.offsetHeight;

        if (w < oRB.offsetWidth) {
          w = oRB.offsetWidth;
        } else if (w > document.documentElement.clientWidth - oDragWrap.offsetLeft) {
          w = document.documentElement.clientWidth - oDragWrap.offsetLeft - 2;
        }
        if (h < oRB.offsetHeight) {
          h = oRB.offsetHeight;
        } else if (h > document.documentElement.clientHeight - oDragWrap.offsetTop) {
          h = document.documentElement.clientHeight - oDragWrap.offsetTop - 2;
        }
        oDragWrap.style.width = w + 'px';
        oDragWrap.style.height = h + 'px';
        updateLayout(oDragWrap, h);
      }

      function stopDrag() {
        removeDrag(doDrag, stopDrag);
      }
    });
  },
  unbind(el, binding, vnode, oldVnode) {
    const { oR, oB, oRB, mousedown_r, mousedown_b, mousedown_rb } = el[scopeLayout];
    oR.removeEventListener('mousedown', mousedown_r);
    oB.removeEventListener('mousedown', mousedown_b);
    oRB.removeEventListener('mousedown', mousedown_rb);
  }
};
