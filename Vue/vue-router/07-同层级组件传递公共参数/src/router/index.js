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
              path: "detail/:id",
              component: Detail,
              // 增加props方法
              props(routeQuery) {
                // console.log(routeQuery);
                // 会发返回到$attrs上,然后props直接解构接收即可
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
