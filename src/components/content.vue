<template>
  <div class="content">
    <google-map/>
    <list/>
  </div>
</template>

<script>
import GoogleMap from './map'
import List from './list'

export default {
  components: {
    GoogleMap,
    List
  }
}
</script>

<style>
.content {
  display: grid;
  grid-template-columns: auto, auto;
  margin-top: -53px;
  padding-top: 53px;
}
</style>
