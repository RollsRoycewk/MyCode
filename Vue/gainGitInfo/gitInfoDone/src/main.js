import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    // 添加全局事件总线对象
    Vue.prototype.$bus = this;
  },
  render: h => h(App)
}).$mount("#app");
