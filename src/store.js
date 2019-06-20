import Vue from 'vue'
import Vuex from 'vuex'
import { UsersApi, HomesApi } from './api'
import { gmapApi } from 'vue2-google-maps'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    homes: [],
    mapMarkers: []
  },
  mutations: {
    setHomes (state, homes) {
      state.homes = homes
    },
    setUser (state, user) {
      state.user = user
    },
    setMapMarkers (state, markers) {
      state.mapMarkers = markers
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
      console.log({ changedHome })
      if (state.homes.filter(home => home.id === changedHome.id).length > 0) {
        console.log('patching')
        return HomesApi.patch(`/${changedHome.id}`, changedHome).then(() => {
          dispatch('getHomes')
        })
      } else {
        console.log('posting')
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
    },
    generateMapMarkers ({ commit, state }, map) {
      const google = gmapApi()
      const geocoder = new google.maps.Geocoder()
      let positions
      state.homes.map(home => {
        return geocoder.geocode(
          {
            address: home.address
          },
          result => {
            return result.map(place => place.geometry.location)
          }
        )
      })
      console.log(positions)
      const markers = positions.map(position => {
        return new google.maps.Marker({
          position,
          map
        })
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
