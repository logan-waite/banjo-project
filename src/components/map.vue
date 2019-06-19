<template>
  <section>
    <div id="map"></div>
  </section>
</template>

<script>
import GoogleMaps from 'google-maps'
import api from '../api'

export default {
  data() {
    return {
      map: null
    }
  },
  mounted() {
    GoogleMaps.load(function (google) {
      console.log({ google })
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 40.777, lng: -111.888 }
      })
    })
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }
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
