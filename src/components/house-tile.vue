<template>
  <div class="house-tile">
    <h4>{{home.address}}</h4>
    <h5>For sale for ${{home.price}}</h5>
    <p>{{home.description}}</p>
    <font-awesome-icon icon="pencil-alt" class="edit" @click="$emit('edit', home)"/>
  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>
.house-tile {
  padding: 15px;
  border: 1px solid #bebebe;
}
h4,
h5 {
  margin: 0px;
  padding: 0px;
}
p {
  font-size: 14px;
}
.edit {
  border: 1px solid #6a6a6a;
  border-radius: 4px;
  padding: 4px;
}
.edit:hover {
  background: #dadada;
}
</style>
