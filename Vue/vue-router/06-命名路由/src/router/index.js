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
              // 名称,和组件名称一样,一定要有
              name: "Detail",
              path: "detail/:id",
              component: Detail,
              props(routeQuery) {
                return {
                  ...routeQuery.params,
                  ...routeQuery.query
                };
              }
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
