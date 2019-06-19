<template>
  <div class="layout">
    <navbar></navbar>
    <slot/>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.layout {
  height: 100%;
}
</style>
