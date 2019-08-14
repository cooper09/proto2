<<template>
    <div>
        <home-plans></home-plans>
        <date-picker></date-picker> 
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import DatePicker from '@/components/DatePicker';
import GoogleReport from './GoogleReport';
import BoucherReport from './BoucherReport';

export default {
    name: 'Menu',
    data () {
        return {
            open: false
        }
    }, 
    components: {
        HomePlans,
        DatePicker,
        //BoucherConversions,
        //BoucherReport,
        //GoogleConversions
    },
    computed:{

        //cooper s - I don't think I need either of these
        recipes() {
            return this.$store.state.recipes;
        },
        date() {
            return this.$store.state.date
        }
    },
    created() {
    this.property = 'Example property update.'
    

  }
};//end scripts
</script>

<style scoped>
</style>
