import Vue from "vue";
import Vuex from "vuex";

// 安装插件,Vuex也是vue的一个插件所以需要安装
Vue.use(Vuex);

/* 集中管理所有数据的对象 */
const state = {
  // 数据的初始化,只有在这定义的才是响应式的
  count: 0
};

/* 间接更新数据的方法对象  包含n个方法来间接更新数据 */
// 通常会做异步操作,将操作完成的数据交给mutations函数更新
const actions = {
  // actions函数第一个参数是一个对象,内部有dispatch/commit/state等
  // actions函数第二个参数是外面dispatch传递过来的数据
  increment(store, num) {
    console.log(store, num);
    // 触发某一个mutation函数
    // store.commit(触发的mutation函数名称,mutation函数要接收的数据)
    store.commit("INCREMENT", num);
  },
  decrement({ commit }, num) {
    commit("DECREMENT", num);
  },
  // 对state再次解构
  incrementIfOdd({ commit, state: { count } }, num) {
    if (count % 2 === 1) {
      commit("INCREMENT", num);
    }
  },
  incrementAsvnc({ commit }, num) {
    setTimeout(() => {
      commit("INCREMENT", num);
    }, 3000);
  }
};

/* 用来直接更新数据的方法对象 */
// 直接对数据进行操作(数据操作后会更新state,从而组件会重新渲染)
// mutation函数的数量:看对数据更新的操作的几种方式
const mutations = {
  // mutations函数第一个参数:state  ----> 所有 状态数据
  // mutations函数第二个参数:num  ----> 就由上一步actions负责传递过来
  INCREMENT(state, num) {
    state.count += num;
  },
  DECREMENT(state, num) {
    state.count -= num;
  }
};

// store对象中包含读取数据和更新数据的方法
const store = new Vuex.Store({
  state,
  actions,
  mutations
});

// 最终组件要用的就是store
export default store;
