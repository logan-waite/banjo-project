<template>
  <div id="app">
    <navbar :user="user"></navbar>
    <google-map/>
    <list @login="login" :user="user"/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import GoogleMap from './components/map'
import List from './components/list'
import { UserApi } from './api';

export default {
  name: 'app',
  components: {
    Navbar,
    GoogleMap,
    List
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    login(userInfo) {
      if (userInfo.create) {
        UserApi.post('', {
          name: userInfo.name,
          email: userInfo.password,
          password: userInfo.password,
          confirmPassword: userInfo.confirmPassword
        })
          .then(user => this.user = user)
      } else {
        // login action
        UserApi.get('', { email: userInfo.email })
          .then(users => this.user = users[0])
      }
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
