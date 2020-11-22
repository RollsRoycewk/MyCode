import Vue from "vue";
import VueRouter from "vue-router";

import About from "../views/About/index.vue";
import Home from "../views/Home/index.vue";
import Message from "../views/Home/Message/index.vue";
import News from "../views/Home/News/index.vue";
import Detail from "../views/Home/Message/Detail/index.vue";

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
      children: [
        {
          path: "/home/message",
          component: Message,
          children: [
            {
              // 动态路由,能够匹配多个路由,简写,省略 /
              path: "detail/:id",
              component: Detail
            }
          ]
        },
        {
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
