import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "zhangsan",
    age: 18,
    value: ""
  },
  mutations: {
    changeName(state, msg) {
      state.name = msg
    },
    changeVal(state, msg) {
      state.value = msg
    }
  },
  actions: {

  },
  getters: {

  }
})
