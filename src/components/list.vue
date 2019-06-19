<template>
  <div id="list">
    <div class="top">
      <h3>My Homes</h3>
      <font-awesome-icon v-if="!showEditHome" icon="plus" @click="showEditHome = true"/>
      <font-awesome-icon v-else icon="times" @click="showEditHome = false; homeToEdit = null"/>
    </div>
    <edit-house-tile
      v-if="showEditHome"
      @submit="submitHome"
      :home="homeToEdit"
      @remove="removeHome"
    />
    <house-tile v-for="(home, index) in homes" :key="index" :home="home" @edit="editHome"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HouseTile from './house-tile'
import EditHouseTile from './edit-house-tile'
import { HomesApi } from '../api'

export default {
  components: {
    HouseTile,
    EditHouseTile
  },
  data() {
    return {
      showEditHome: false,
      homeToEdit: null
    }
  },
  computed: {
    ...mapGetters({
      homes: 'userHomes'
    })
  },
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
