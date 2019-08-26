<template>
<div id='mydatepicker'>
<v-row>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="start"
            label="Start Date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable on:change="onChange('start')">
          <div class="flex-grow-1"></div>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <div class="flex-grow-1"></div>
    <v-col cols="12" sm="6" md="4">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        full-width
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="end"
            label="End Date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <!-- <v-date-picker v-model="start" v-on:change="onChange('start')"></v-date-picker>  -->
        <v-date-picker v-model="date" scrollable on:change="onChange('start')">
          <div class="flex-grow-1"></div>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-col>
    
    <div class="flex-grow-1"></div>
  </v-row>
  </div><!-- end mydatepicker -->
</template>

<script>
export default {
    name: 'Datepicker',
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        start: null,
        end: null
        }),
    computed: {
    /*    date() {
            return this.$store.state.date;
        }//end date */
    },//end compute
    methods: {
        onChange(menu){
            //alert("DatePicker onChange: " + menu )
            switch (menu) {
                case 'start':
                    this.$store.dispatch('setStartDate', this.start )
                break;
                case 'end':
                    this.$store.dispatch('setEndDate', this.end )
                break;
            }//end swith
        }//end onChange
    }//end methods
};
</script>
<style scope>
    #mydatepicker {
        margin: 1em;
        border: 1px solid #ccc;
        padding: 0.5em;
    }
</style>
