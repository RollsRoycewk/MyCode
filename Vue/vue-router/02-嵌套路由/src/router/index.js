import Vue from "vue";
import VueRouter from "vue-router";

import About from "../views/About/index.vue";
import Home from "../views/Home/index.vue";
import Message from "../views/Home/Message/index.vue";
import News from "../views/Home/News/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      // 子路由,即使只有一个值也应该是数组
      children: [
        {
          path: "/home/message",
          component: Message
        },
        {
          // 当路径不是 / 开头,就会已父路由路径补全,也是一种简写
          // 注意,简写一定不要再加 /
          path: "news",
          component: News
        }
      ]
    },
    {
      path: "/",
      redirect: "/about"
    }
  ]
});

export default router;
