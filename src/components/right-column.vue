<template>
  <section>
    <login v-if="!user"></login>
    <list v-else/>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Login from './login'
import List from './list'

export default {
  components: {
    Login,
    List
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>


<style scoped>
section {
  border-left: 1px solid #bbb;
  display: flex;
  overflow-y: auto;
}
</style>
