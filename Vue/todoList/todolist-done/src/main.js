import Vue from "vue";
import App from "./App.vue";
//  引入公共样式
import "./assets/css/common.css";

new Vue({
  render: h => h(App)
}).$mount("#app");
