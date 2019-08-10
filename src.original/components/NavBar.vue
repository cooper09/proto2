<template>
    <nav>
      <v-toolbar flat dark class="blue">
        <v-icon class="hidden-md-and-up" @click="drawer=!drawer">menu</v-icon>
        <v-toolbar-title>B+C Conversions</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="black" to="/menu" data-cy="menuBtn" class="hidden-sm-and-down">
            <span>Menu</span>
            <v-icon right></v-icon>
        </v-btn>

      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" class="blue accent-2" dark disable-resize-watcher>
          <p>B+C</p>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-action>
                            <v-icon class="white--text">menu</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
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
                { title: 'Menu' },
                { title: 'Profile' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        }
    }//data
}//end export 
</script>
<style scope>
.v-navigation-drawer {
    padding: 1em;
}
</style>