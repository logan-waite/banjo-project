<template>
  <section>
    <login></login>
  </section>
</template>

<script>
import Login from './login'

export default {
  components: {
    Login
  }
}
</script>


<style scoped>
section {
  border-left: 1px solid #bbb;
  display: flex;
}
</style>
