<<template>
    <div>
        <home-plans></home-plans>
        <date-picker></date-picker> 
        <boucher-conversions></boucher-conversions>
        <google-conversions>Google</google-conversions>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import DatePicker from '@/components/DatePicker';
import BoucherConversions from '@/components/BoucherConversions';
import GoogleConversions from '@/components/GoogleConversions';

export default {
    name: 'Menu',
    components: {
        HomePlans,
        DatePicker,
        BoucherConversions,
        GoogleConversions
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
