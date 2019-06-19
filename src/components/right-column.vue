<template>
  <section>
    <login
      v-if="!user"
      @login="$emit('login', {create: false, ...$event})"
      @create="$emit('login', {create: true, ...$event})"
    ></login>
    <list v-else @login="$emit('login', $event)" :user-id="user.id"/>
  </section>
</template>

<script>
import Login from './login'
import List from './list'

export default {
  components: {
    Login,
    List
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
}
</script>


<style scoped>
section {
  border-left: 1px solid #bbb;
  display: flex;
  overflow-y: auto;
}
</style>
