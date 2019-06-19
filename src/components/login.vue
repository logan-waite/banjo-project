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
      <button @click="loggingIn = false" class="back">Back</button>
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="login()" class="submit">Login</button>
    </div>
    <div v-else-if="creating" class="create">
      <button @click="creating = false" class="back">Back</button>
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password">
      <button @click="create()" class="submit">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creating: false,
      loggingIn: false,
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    login() {

    },
    create() {

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
input {
  width: 85%;
  padding: 5px;
  margin: 5px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 14px;
}
button {
  padding: 0.5rem 0.75rem;
  background: #ededed;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid lightgrey;
  margin: 10px;
  border-radius: 4px;
}
button:hover {
  background: #ddd;
}
button.back {
  align-self: flex-start;
  font-size: 10px;
  padding: 0.25rem 0.5rem;
  font-weight: normal;
}
button.submit {
  align-self: flex-end;
  background: deepskyblue;
  color: white;
}
</style>
