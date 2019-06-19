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
      <button class="submit">{{submitText}}</button>
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
    submitText() {
      return this.home ? 'Submit' : 'Add'
    }
  },
  methods: {
    submit() {
      const submission =
      {
        create: this.home ? false : true,
        address: this.address,
        price: this.price,
        description: this.description
      }
      if (this.home) {
        submission.id = this.home.id
        submission.owner = this.home.owner
      }
      this.$emit('submit', submission)

      this.address = ''
      this.price = ''
      this.description = ''
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
