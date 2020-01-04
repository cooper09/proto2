<template>
    <div class="home">
    <h3>New Campaign</h3>
    <input label="companyname" value="Company name" /><br/>
    <select label="type" value="type"/><br/>
    <input label="googleua" value="Google UA" /><br/>
    <input label="facebook" value="Facebook Pixel" /><br/>
    <br/><br/>
    <button @click="reset()">Reset</button>
    <button @click="create()">Create</button>

    </div>

</template>
<script>

export default {
    methods: {
        reset() {
            console.log("Reset Create Campaign screen")
        },
        create() {
            console.log("Create Campaign")
        }

   } //end methods
}//end export 
</script>