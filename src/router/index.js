import Vue from "vue";
import Router from "vue-router";
import Counter from "@/containers/Counter";
import Todo from "@/containers/Todo";
import index from "@/containers/index";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "vue demo",
      component: index,
      meta: {
        title: "vue demo"
      }
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter,
      meta: {
        title: "Couner!"
      }
    },
    {
      path: "/todo",
      name: "Todo",
      component: Todo,
      meta: {
        title: "Todo!"
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    //如果设置标题，拦截后设置标题
    document.title = to.meta.title;
  }
  next();
});

export default router;
