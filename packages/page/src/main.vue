<script>
import { isString, isObject } from 'element-ui/src/utils/types';
import GModule from 'element-ui/packages/module';
import { template } from 'lodash';

export default {
  name: 'GPage',
  componentName: 'GPage',
  components: {
    GModule
  },
  data() {
    return {
      data: {}
    };
  },
  created() {
    if (this.$attrs.data) {
      this.$set(this, 'data', { ...this.data, ...this.$attrs.data });
    }
    this.initApi();
  },
  render(h) {
    // console.log(this.$attrs);
    return (
      <div className="g-Page">
        <div className="g-Page-content">
          <div className="g-Page-main">{this.getBody()}</div>
        </div>
      </div>
    );
  },
  // computed: {
  //   getData() {
  //     return this.data;
  //   },
  // },
  methods: {
    initApi() {
      // ajax
      setTimeout(() => {
        const { initApi } = this.$attrs;
        this.apiAjax(initApi).then((res) => {
          this.data = { ...this.data, ...res };
        });
      }, 800);
    },
    apiAjax(params) {
      return new Promise((resolve, reject) => {
        resolve({ ajax: { date: new Date() } });
        // this.$fetch.http(params).then(res => {
        //   resolve(res);
        // }).catch((e) => {
        //   if (e && e.message) {
        //     this.$message({
        //       type: 'error',
        //       message: e.message
        //     });
        //   }
        //   reject();
        // });
      });
    },
    getBody() {
      const { type, body } = this.$attrs;
      let result = '';
      if (type === 'page') {
        if (isString(body)) {
          result = this.renderDom(body);
          return <div className="g-Page-body" domPropsInnerHTML={result}></div>;
        } else if (isObject(body)) {
          result = this.renderModule(body);
          return <div className="g-Page-body">{result}</div>;
        }
      }
    },
    renderDom(params) {
      // 使用 ES 分隔符代替默认的 "interpolate" 分隔符
      const compiled = template(params);
      return compiled(this.data);
    },
    // 层级组件
    renderModule(params) {
      // console.log('params', params);
      const initModule = (params) => {
        const children = params.children;
        let list = [];
        if (children && children.length > 0) {
          list = children.map((item) => initModule(item));
        }
        return (
          <GModule
            name={this.getCompName(params)}
            params={params}
            props={params.props}
          >
            {list}
            {params.text}
          </GModule>
        );
      };
      return initModule(params);
    },
    getCompName(param) {
      const name = isObject(param) ? param.type : param;
      // 指向对应组件
      const oName = {
        // form
        form: 'GForm',
        input: 'GInput',
        select: 'GSelect',
        option: 'GOption',
        radio: 'GRadioGroup',
        radioOpt: 'GRadio',
        checkbox: 'GCheckboxGroup',
        checkboxOpt: 'GCheckbox',
        date: 'GDatePicker',
        time: 'GTimePicker',
        cascader: 'GCascader',
        button: 'GButton'
      };
      return oName[name] ? oName[name] : name ? name : 'div';
    }
  }
};
</script>
