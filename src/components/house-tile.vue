<template>
  <div class="house-tile">
    <h4>{{house.address}}</h4>
    <h5>For sale for {{house.price}}</h5>
    <p>{{house.description}}</p>
    <font-awesome-icon icon="pencil-alt" class="edit" @click="edit()"/>
  </div>
</template>

<script>
export default {
  props: {
    house: {
      type: Object,
      required: true
    }
  }
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
