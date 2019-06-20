<template>
  <div id="app">
    <navbar></navbar>
    <google-map/>
    <right-column :user="user"/>
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
  mounted() {
    this.$store.dispatch('getHomes')
      .then(() => {
        // this.$store.dispatch('generateMapMarkers')
      })
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
input,
textarea {
  width: 85%;
  padding: 5px;
  margin: 5px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 14px;
}
button {
  padding: 0.5rem 0.75rem;
  background: #ededed;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid lightgrey;
  margin: 10px;
  border-radius: 4px;
}
button:hover {
  background: #ddd;
}
button.back {
  align-self: flex-start;
  font-size: 10px;
  padding: 0.25rem 0.5rem;
  font-weight: normal;
}
button.submit {
  float: right;
  background: deepskyblue;
  color: white;
}
button.danger {
  color: white;
  background: red;
  float: right;
}
button .icon {
  margin-right: 5px;
}
</style>
