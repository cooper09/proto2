<template>
    <nav>
      <v-toolbar flat dark class="blue">
        <v-icon class="hidden-md-and-up mr-5" @click="drawer=!drawer">menu</v-icon>
            <router-link to="/">
                <v-toolbar-title data-cy="titleBtn">B+C Conversions</v-toolbar-title>
            </router-link>
        <v-spacer></v-spacer>
        <v-btn color="black" to="/menu" data-cy="menuBtn" class="hidden-sm-and-down">
            <span>Menu</span>
            <v-icon right></v-icon>
        </v-btn>

      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" class="blue accent-2" dark disable-resize-watcher>
            <div class="mb-5">
              <v-icon  class="mr-2">dashboard</v-icon><v-card-title class="white--text">B+C Conversions</v-card-title>
            </div>
            <v-list>
                <div class="mb-2">
                    <v-btn to="/menu" class="transparent" >
                        <v-icon  class="mr-2" >menu</v-icon><v-card-title class="white--text text-center">Menu</v-card-title>
                    </v-btn>
                </div>
                <div class="mb-2">
                    <v-btn to="/"  class="transparent" >
                        <v-icon  class="mr-2" >people</v-icon><v-card-title class="white--text">Profile</v-card-title>
                    </v-btn>
                </div>
                <div class="mb-2">
                    <v-btn to="/sign-in" class="transparent" >
                        <v-icon  class="mr-2" >verified_user</v-icon><v-card-title class="white--text">Sign In</v-card-title>
                    </v-btn>
                </div>
                <div class="mb-2">
                    <v-btn to="/join" class="transparent">
                        <v-icon  class="mr-2" >open_in_new</v-icon><v-card-title class="white--text">Join</v-card-title>
                    </v-btn>
                </div>
                
            </v-list>
      </v-navigation-drawer>    
    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Menu', icon: "menu", route: "/menu"},
                { title: 'Profile', icon: "people", route: "/" },
                { title: 'Sign In', icon: "verified_user", route: "/sign-in" },
                { title: 'Join', icon: "open_in_new", route: "/join" }
            ]
        }
    }//data
}//end export 
</script>
<style scope>
.v-navigation-drawer {
    padding: 1em;
}
a .v-toolbar__title {
    color: white;
    text-decoration: none;
}
.transparent {
    background: transparent;
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
}
</style>