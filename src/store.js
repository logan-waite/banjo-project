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
    editHome ({ commit, state, dispatch }, changedHome) {
      if (state.homes.filter(home => home.id === changedHome.id)) {
        return HomesApi.patch(`/${changedHome.id}`, changedHome).then(() => {
          dispatch('getHomes')
        })
      } else {
        return HomesApi.post('', { ...changedHome, owner: state.user.id }).then(
          home => {
            commit('setHomes', state.homes.concat(home))
          }
        )
      }
    },
    getHomes ({ commit }) {
      HomesApi.get().then(homes => commit('setHomes', homes))
    },
    deleteHome ({ commit, state }, id) {
      HomesApi.delete(`/${id}`).then(() => {
        commit('setHomes', state.homes.filter(home => home.id !== id))
      })
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
