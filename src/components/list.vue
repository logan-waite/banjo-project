<template>
  <section>
    <login
      v-if="!user"
      @login="$emit('login', {create: false, ...$event})"
      @create="$emit('login', {create: true, ...$event})"
    ></login>
  </section>
</template>

<script>
import Login from './login'

export default {
  components: {
    Login
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  methods: {
    login({ email, password }) {
      console.log({ email, password })
      // perform login action
      this.$emit('login', { create: false, email, password })

    },
    create(info) {
      this.$emit('login', { create: true, ...info })
    }
  }
}
</script>


<style scoped>
section {
  border-left: 1px solid #bbb;
  display: flex;
}
</style>
