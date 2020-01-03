import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';

Vue.use(Vuex);

import setCategories from './helpers/setCategories'

export default new Vuex.Store({
    state: {
//        apiUrl: 'https://api.edamam.com/search',
        campaignsUrl: 'https://sleepy-everglades-99189.herokuapp.com/sales',
        conversionsUrl:
            'https://sleepy-everglades-99189.herokuapp.com/conversions',
        campaigns: [],
        conversions: [],
        // determine which conversion window is open
        startdate: new Date(),
        enddate: new Date()
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setCampaigns(state, payload) {
            //alert('store - setCampaigns: ' + payload);
            state.campaigns = payload;
        }, //end set Campaignsgit 
        setConversions(state, payload) {
            //alert('store - setConversions: ' + payload);
            state.conversions = payload;
        } //end set Campaigns
    },
    actions: {
        userLogin({ commit }, { email, password }) {
          /*  firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/'); 
                }); */
        },
        userJoin({ commit }, { email, password }) {
          /*  firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                }); */
        },
        userSignOut({ commit }) {
          /*  firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                }); */
        },
        async getCampaigns({ state, commit }) {
            //alert("store - getCampaigns:  " )
            try {
                let response = await axios.get(`${state.campaignsUrl}`);
                commit('setCampaigns', response.data);
            } catch (error) {
                //commit('setCampaigns', \[\]);
                alert('Campaigns error: ' + error);
            }
        },
        async getConversions({ state, commit }) {
            //alert("store - getConversions:  " )
            try {
                let response = await axios.get(`${state.conversionsUrl}`);
                commit('setConversions', response.data);
            } catch (error) {
                //commit('setCampaigns', \[\]);
                alert('Conversions error: ' + error);
            }
        },
        checkConversions({commit},plan) {
            alert('checkConversions - Action: ' + plan );
            commit('checkConversions', plan);
        },
        setStartDate({state}, date) {
            //alert('Store - Set Date: '+ date )
            state.startdate = date;
        }
    }, //end actions
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        },
        ourCampaigns(state) {
            return state.campaigns;
        },
        ourConversions(state) {
            return state.conversions;
        },
        getBoucherConversions(state) {
            return state.conversions;
        },
        
        getFacebookConversions(state) {
            var facebookArr = [];
            facebookArr = state.conversions;
            facebookArr.shift();
            facebookArr.shift();
            return facebookArr;
        },
        getGoogleConversions(state) {
            var googleArr = [];
            googleArr = state.conversions;
            googleArr.shift();
            googleArr.shift();
            googleArr.shift();
            googleArr.shift();
            //alert("Google Conversions: " + googleArr.length )
            return googleArr;
        },
        getCategories(state) {

            //var stinky = state.categories;
            var stinky = state.campaigns;
            stinky = stinky.slice(0);
             console.log("I'm numb: " , state.campaigns );
            return stinky
        }//end getCategories
    }//end getters
});
