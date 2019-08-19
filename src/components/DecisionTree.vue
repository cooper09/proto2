<template>
    <span>
        Find Conversions
        <v-btn @click="decisionTreeConversions">Calculate Conversions</v-btn>
        <vue-csv-import v-model="csv" :map-fields="['name', 'age']">CSV</vue-csv-import>
        <p></p>
                <div class="form-group csv-import-file">
                    <input ref="csv" type="file" @change.prevent="validFileMimeType" :class="inputClass" name="csv">
                    <slot name="error" v-if="showErrorMessage && !isValidFileMimeType">
                        File type is invalid
                    </slot>
                </div>
                    <tbody>
                        <tr v-for="(field, key) in fieldsToMap" :key="key">
                            <td>{{ field.label }}</td>
                            <td>
                                <select class="form-control" v-model="map[field.key]">
                                    <option v-for="(column, key) in firstRow" :key="key" :value="key">{{ column }}</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
     </span>
     
</template>

<script>
import DecisionTree from "decision-tree";
import makeaDecision from '@/helpers/makeaDecision';
import Papa from 'papaparse';
import _ from 'lodash';

export default {
    name: 'DecisionTree',
    components: {
        DecisionTree
    },
    props: {
         value: Array,
            url: {
                type: String
            },
            mapFields: {
                required: true
            },
            callback: {
                type: Function,
                default: () => {
                }
            },
            catch: {
                type: Function,
                default: () => {
                }
            },
            finally: {
                type: Function,
                default: () => {
                }
            },
            parseConfig: {
                type: Object,
                default() {
                    return {};
                }
            },
            headers: {
                default: null
            },
            loadBtnText: {
                type: String,
                default: "Next"
            },
            submitBtnText: {
                type: String,
                default: "Submit"
            },
            tableClass: {
                type: String,
                default: "table"
            },
            checkboxClass: {
                type: String,
                default: "form-check-input"
            },
            buttonClass: {
                type: String,
                default: "btn btn-primary"
            },
            inputClass: {
                type: String,
                default: "form-control-file"
            },
            fileMimeTypes: {
                type: Array,
                default: () => {
                    return ["text/csv"];
                }
            }
    },
    data() {
        return {
            decisionData: [
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Fri Aug 2 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Tue Jul 30 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Sum Jul 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Fri Aug 2 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Tue Jul 30 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Sum Jul 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Fri Aug 2 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Tue Jul 30 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Sum Jul 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
            ],
            csv: null,
            fieldsToMap: [],
            map: {},
            isValidFileMimeType: false,
            hasHeaders: true
        }//end return
    },//data
    computed: {
    //    conversions() {
    //        return this.$store.state.conversions;
    //    },
     firstRow() {
                return _.get(this, "sample.0");
            },
            showErrorMessage() {
                return this.fileSelected;
            },
            disabledNextButton() {
                return !this.isValidFileMimeType;
            }
    },
    methods: {
         readFile(callback) {
                //let file = "./csvsample.csv" ;//this.$refs.csv.files[0];

                let file = this.$refs.csv.files[0];

                console.log("DecisionTree - readFile: ",  file )

                if (file) {
                    let reader = new FileReader();
                    reader.readAsText(file, "UTF-8");
                    reader.onload = function (evt) {
                        alert("Result: " + evt.target.result );
                        callback(evt.target.result);
                    };
                    reader.onerror = function () {
                    };
                }
            },
        decisionTreeConversions() {
        /*    var conversions = makeaDecision.doYourThing(this.decisionData, this.conversions );  
            alert("Confirmed-decisionTreeConversions: " + conversions );
            console.log("Confirmed - conversion: ",  conversions ) */

            const _this = this;

                this.readFile((output) => {
                   // _this.sample = _.get(Papa.parse(output, { preview: 2, skipEmptyLines: true }), "data");
                    _this.csv = _.get(Papa.parse(output, { skipEmptyLines: true }), "data");
                });
        },
         buildMappedCsv() {
                const _this = this;

                let csv = this.hasHeaders ? _.drop(this.csv) : this.csv;

                return _.map(csv, (row) => {
                    let newRow = {};

                    _.forEach(_this.map, (column, field) => {
                        _.set(newRow, field, _.get(row, column));
                    });

                    return newRow;
                });
            }, 
           validFileMimeType() {
                let file = this.$refs.csv.files[0];
                if (file) {
                    this.isValidFileMimeType = (this.fileMimeTypes.indexOf(file.type) > -1);
                    this.fileSelected = true;
                } else {
                    this.isValidFileMimeType = false;
                    this.fileSelected = false;
                }
            },
    }, //end methods
    created() {
            this.hasHeaders = this.headers;

            if (_.isArray(this.mapFields)) {
                this.fieldsToMap = _.map(this.mapFields, (item) => {
                    return {
                        key: item,
                        label: item
                    };
                });
            } else {
                this.fieldsToMap = _.map(this.mapFields, (label, key) => {
                    return {
                        key: key,
                        label: label
                    };
                });
            }
        },
}; //end export default
</script>

<style scoped>
</style>
