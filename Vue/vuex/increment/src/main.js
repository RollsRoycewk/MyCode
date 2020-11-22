import Vue from "vue";
import App from "./App.vue";
// 在main.js中引入store
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 应用store
  store
}).$mount("#app");
