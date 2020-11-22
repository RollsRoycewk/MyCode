import Vue from "vue";
// 引入路由
import router from "./router/index";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 应用路由
  router
}).$mount("#app");
