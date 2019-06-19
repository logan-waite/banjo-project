import Vue from 'vue'
import Vuex from 'vuex'
import { UsersApi, HomesApi } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    homes: []
  },
  mutations: {
    setHomes (state, homes) {
      state.homes = homes
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login ({ commit }, userInfo) {
      // login action
      UsersApi.get('', { email: userInfo.email }).then(users => {
        commit('setUser', users[0])
      })
    },
    logout ({ commit }) {
      commit('setUser', null)
    },
    createUser ({ commit }, userInfo) {
      UsersApi.post('', {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        confirmPassword: userInfo.confirmPassword
      }).then(user => commit('setUser', user))
    },
    addHome ({ commit }, home) {
      return HomesApi.post('', { owner: this.userId, ...home })
    },
    getHomes ({ commit }) {
      HomesApi.get().then(homes => commit('setHomes', homes))
    }
  },
  getters: {
    userHomes: state => {
      return state.user
        ? state.homes.filter(home => home.owner === state.user.id)
        : []
    }
  }
})
