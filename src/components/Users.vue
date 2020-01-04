<template>
    <div class="home">
    <h3>Users</h3>
    <input label="firstname" value="First name" /><br/>
    <input label="lastname" value="Last name"/><br/>
    <input label="email" value="Email" /><br/>
    <input label="company" value="Company name" /><br/>
    <br/><br/>
    <v-select 
        label="User Type"
        @input="test()" 
        :options="test"
        :value="test"
    ></v-select>
  <br/><br/>
    <button @click="billing()">Billing</button>
  </div>
</template>
<script>

export default {
   methods: {
       test(){
           console.log("select event thingy")
       },
       billing() {
           console.log("Set up billing goodies here...")
       }
   } 
}//end export 
</script>