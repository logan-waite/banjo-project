<template>
  <div id="account-options">
    <div v-if="!creating && !loggingIn" class="default">
      Login to view your homes!
      <div class="buttons">
        <button @click="loggingIn = true">Login</button>
        <button @click="creating = true">Create Account</button>
      </div>
    </div>
    <div v-else-if="loggingIn" class="login">
      <button @click="loggingIn = false" class="back">
        <font-awesome-icon icon="chevron-left" class="icon"/>Back
      </button>
      <form @submit.prevent="login()">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit" class="submit">Login</button>
      </form>
    </div>
    <div v-else-if="creating" class="create">
      <button @click="creating = false" class="back">
        <font-awesome-icon icon="chevron-left" class="icon"/>Back
      </button>
      <form @submit.prevent="create()">
        <input type="text" v-model="name" placeholder="Name" required>
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required>
        <button type="submit" class="submit">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creating: false,
      loggingIn: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', { email: this.email, password: this.password })
      this.$emit('hide')
    },
    create() {
      this.$store.dispatch('createUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
      this.$emit('hide')
    }
  }
}
</script>

<style>
#account-options {
  align-self: center;
  width: 100%;
}
#account-options > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
