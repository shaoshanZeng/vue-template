import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 加载样式初始化
import 'normalize.css/normalize.css';

// 加载路由权限
import './permission';

// 加载element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 加载过滤函数
import * as filters from './filters';
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");