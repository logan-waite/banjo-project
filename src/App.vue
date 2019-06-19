<template>
  <div id="app">
    <navbar :user="user" @logout="logout"></navbar>
    <google-map/>
    <right-column @login="login" :user="user"/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import GoogleMap from './components/map'
import RightColumn from './components/right-column'
import { UsersApi } from './api';

export default {
  name: 'app',
  components: {
    Navbar,
    GoogleMap,
    RightColumn
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    login(userInfo) {
      if (userInfo.create) {
        UsersApi.post('', {
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
          confirmPassword: userInfo.confirmPassword
        })
          .then(user => this.user = user)
      } else {
        // login action
        UsersApi.get('', { email: userInfo.email })
          .then(users => this.user = users[0])
      }
    },
    logout() {
      this.user = null
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: grid;
  grid-template-columns: auto 30%;
  grid-template-rows: 50px auto;
}
</style>
