<template>
  <div id="list">
    <div class="top">
      <h3>My Homes</h3>
      <font-awesome-icon icon="plus"/>
    </div>
    <house-tile v-for="(home, index) in homes" :key="index" :house="home"/>
  </div>
</template>

<script>
import HouseTile from './house-tile'
import { HomesApi } from '../api'

export default {
  components: {
    HouseTile
  },
  props: {
    userId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      homes: []
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
