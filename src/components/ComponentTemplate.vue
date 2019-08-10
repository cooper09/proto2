<template>
    
</template>

<script>
export default {
    name: 'ComponentTemplate',
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
       
    }
};
</script>

<style scoped>
</style>
