<template>
  <div id="app">
    <navbar></navbar>
    <google-map/>
    <list/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import GoogleMap from './components/map'
import List from './components/list'

export default {
  name: 'app',
  components: {
    Navbar,
    GoogleMap,
    List
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
