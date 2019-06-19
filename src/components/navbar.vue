<template>
  <nav>
    <span>Yonder Homes</span>
    <span v-if="name" @click.stop="showMenu = !showMenu">
      {{name}}
      <font-awesome-icon icon="chevron-down"/>
      <div class="menu" v-if="showMenu">
        <ul>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </span>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    ...mapState({
      name: state => state.user && state.user.name
    })
  },
  methods: {
    logout() {
      this.showMenu = false;
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
nav {
  position: relative;
  border-bottom: 1px solid #ddd;
  box-shadow: 0px 0px 5px #bbb;
  z-index: 1;
  background-color: white;
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
}
.menu {
  position: absolute;
  top: 49px;
  right: 0;
  background: white;
  padding: 15px;
  border: 1px solid lightgrey;
}
.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.menu ul li {
  cursor: pointer;
}
</style>
