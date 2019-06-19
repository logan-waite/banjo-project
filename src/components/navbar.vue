<template>
  <nav>
    <span>Yonder Homes</span>
    <span v-if="user">{{user.name}}</span>
  </nav>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
nav {
  border-bottom: 1px solid #ddd;
  /* padding: 15px; */
  box-shadow: 0px 0px 5px #bbb;
  z-index: 1;
  background-color: white;
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
}
</style>
