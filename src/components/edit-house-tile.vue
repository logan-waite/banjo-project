<template>
  <div class="edit-house-tile">
    <form @submit.prevent="submit">
      <div>
        <label for="address">Address</label>
        <input id="address" v-model="address">
      </div>
      <div>
        <label for="price">Price</label>
        <input id="price" v-model="price">
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" v-model="description"/>
      </div>
      <button class="submit" v-if="!editing">Add</button>
      <button class="submit" v-else>Submit</button>
      <button type="button" class="danger" v-if="editing" @click="remove">Delete</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      address: '',
      price: '',
      description: '',
    }
  },
  computed: {
    editing() {
      return this.home !== null
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('editHome', {
        ...this.home,
        address: this.address,
        price: this.price,
        description: this.description
      }).then(() => {
        this.$emit('hide')
      })
    },
    remove() {
      this.$store.dispatch('deleteHome', this.home.id)
      this.$emit('hide')
    }
  },
  mounted() {
    if (this.home) {
      this.address = this.home.address
      this.price = this.home.price
      this.description = this.home.description
    }
  }
}
</script>

<style>
.edit-house-tile {
  display: flex;
  flex-direction: column;
  border: 1px solid #bababa;
  margin-bottom: 15px;
  padding: 15px;
}
</style>
