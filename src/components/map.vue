<template>
  <section>
    <GmapMap id="map" ref="mapRef" :center="{lat:40, lng:-112.5}" :zoom="7" map-type-id="terrain">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
import GoogleMaps from 'google-maps'
import api from '../api'

export default {
  computed: {
    markers() {
      return this.$store.state.markers
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs)
      this.$refs.mapRef.$mapPromise.then((map) => {
        this.$store.dispatch('generateMapMarkers', map)
      })
    })
  }
}
</script>

<style scoped>
section {
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
}
#map {
  height: 100%;
  width: 100%;
}
</style>
