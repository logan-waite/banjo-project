<template>
  <div id="list">
    <div class="top">
      <h3>My Homes</h3>
      <font-awesome-icon v-if="!showEditHome" icon="plus" @click="showEditHome = true"/>
      <font-awesome-icon v-else icon="times" @click="showEditHome = false; homeToEdit = null"/>
    </div>
    <edit-house-tile v-if="showEditHome" @submit="submitHome" :home="homeToEdit"/>
    <house-tile v-for="(home, index) in homes" :key="index" :home="home" @edit="editHome"/>
  </div>
</template>

<script>
import HouseTile from './house-tile'
import EditHouseTile from './edit-house-tile'
import { HomesApi } from '../api'

export default {
  components: {
    HouseTile,
    EditHouseTile
  },
  props: {
    userId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      homes: [],
      showEditHome: false,
      homeToEdit: null
    }
  },
  methods: {
    submitHome(home) {
      let action;
      if (home.create) {
        action = () => HomesApi.post('', { owner: this.userId, ...home })
      } else {
        action = () => HomesApi.patch(`/${home.id}`, home)
      }
      action()
        .then(home => {
          this.showEditHome = false
          this.homeToEdit = null
          HomesApi.get('', { owner: this.userId })
            .then(homes => this.homes = homes)
        })
    },
    editHome(home) {
      this.homeToEdit = home;
      this.showEditHome = true
    }
  },
  mounted() {
    HomesApi.get('', { owner: this.userId })
      .then(homes => {
        this.homes = homes
      })
  }
}
</script>


<style scoped>
#list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
}
</style>
