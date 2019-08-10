<template>
    <span>
        <v-menu  id="mydatepicker">
            <v-text-field :value="start" slot="activator" label="Start Date" prepend-icon="date_range" >Menu Field</v-text-field>
            <v-date-picker v-model="start" v-on:change="onChange('start')"></v-date-picker>
        </v-menu>
        <v-menu  id="mydatepicker">
            <v-text-field :value="end" slot="activator" label="End Date" prepend-icon="date_range" >Menu Field</v-text-field>
            <v-date-picker v-model="end" v-on:change="onChange('end')"></v-date-picker>
        </v-menu>
    </span>
</template>

<script>
export default {
    name: 'DatePicker',
    data() {
        return {
            start: null,
            end: null
        }
    },
    components: {
    },
    computed: {
        date() {
            //return this.$store.state.date;
        }//end date
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
};//end export default
</script>

<style scoped>
    #mydatepicker {
        padding: 1em;
        margin: 1em;
        border: 1px solid rgb(17, 0, 255);
    }
</style>
