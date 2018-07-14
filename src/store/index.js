import Vue from "vue";
import Vuex from "vuex";
import types from "./types";
import { request } from "@/utils";
import counter from "@/store/modules/counter";
import todo from "@/store/modules/todo";
import com from "@/store/modules/com";
Vue.use(Vuex);

// const state = {
//   count: 10
// };
// const actions = {
//   increaseCount({ commit }, count) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//         commit(types.INCREASE_COUNT, count);
//       }, 500);
//     });
//   },
//   getPosts({ commit }) {
//     return request;
//   }
// };
// const mutations = {
//   [types.INCREASE_COUNT](state, num) {
//     if (num) {
//       state.count = state.count + num;
//     } else {
//       state.count++;
//     }
//   }
// };
// const getters = {
//   count: state => state.count
// };
// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// });
export default new Vuex.Store({
  modules: {
    counter,
    todo,
    com
  }
});
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// // root state object.
// // each Vuex instance is just a single state tree.
// const state = {
//   count: 0
// }

// // mutations are operations that actually mutates the state.
// // each mutation handler gets the entire state tree as the
// // first argument, followed by additional payload arguments.
// // mutations must be synchronous and can be recorded by plugins
// // for debugging purposes.
// const mutations = {
//   increment (state) {
//     state.count++
//   },
//   decrement (state) {
//     state.count--
//   }
// }

// // actions are functions that cause side effects and can involve
// // asynchronous operations.
// const actions = {
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment')
//     }
//   },
//   incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment')
//         resolve()
//       }, 1000)
//     })
//   }
// }

// // getters are functions
// const getters = {
//   // countttttt: state => state.count,
//   count: state => state.count
// }

// // A Vuex instance is created by combining the state, mutations, actions,
// // and getters.
// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// })
