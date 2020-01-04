<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/b+c_logo.png">
    <h3>Login</h3>
    <input label="Username" value="Username" /><br/>
    <input label="Password" value="Password"/>
    <br/><br/>
    <button @click="submit()">Login</button>
    <button>Sign Up</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  methods: {
    submit() {
      this.$router.push('/main')
    }
  }
}//export default
</script>

