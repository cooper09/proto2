<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-1 font-weight-bold white--text text-xs-center">Boucher+Co Conversion Reporting. Scroll for instructions </div>
            <v-btn fab class="mt-5 blue accent-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://source.unsplash.com/45FJgZMXCK8');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
