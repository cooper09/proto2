import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search',
        campaignsUrl: 'https://sleepy-everglades-99189.herokuapp.com/sales',
        conversionsUrl:
            'https://sleepy-everglades-99189.herokuapp.com/conversions',
        isAuthenticated: true,
        userRecipes: [],
        campaigns: [],
        conversions: [],
        b_confirmed: 0,
        f_confirmed: 0,
        g_confirmed: 0,
        // determine which conversion window is open
        startdate: new Date(),
        enddate: new Date(),
        campaignTest: [
            { id: "01",name: "Campaign 1", data: "cool beans"},
            { id: "02",name: "Campaign 2", data: "cheezy cheese"},
            { id: "03",name: "Campaign 3", data: "hey there"},
          ], 
        campaignId: "00"   
    },
    mutations: {
        setCampaignId(state, payload) {
            state.campaignId = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setUserRecipes(state, payload) {
            state.userRecipes = payload;
        },
        setCampaigns(state, payload) {
            //alert('store - setCampaigns: ' + payload);
            state.campaigns = payload;
        }, //end set Campaigns
        setConversions(state, payload) {
            //alert('store - setConversions: ' + payload);
            state.conversions = payload;
        } //end set Campaigns
    },
    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: '5b6623d5',
                        app_key: '46674aa2193dbb7b88ffd897331e661a',
                        from: 0,
                        to: 9
                    }
                });
                // sbdinc keys
                // let response = await axios.get(`${state.apiUrl}`, {
                //     params: {
                //         q: plan,
                //         app_id: '903de977',
                //         app_key: '1b5fbf78de2db637b392f141c524222c\t',
                //         from: 0,
                //         to: 9
                //     }
                // });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        },
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
        addRecipe({ state }, payload) {
          /*  firebase
                .database()
                .ref('users')
                .child(state.user.user.uid)
                .push(payload.recipe.label); */
        },
        getUserRecipes({ state, commit }) {
          /*  return firebase
                .database()
                .ref('users/' + state.user.user.uid)
                .once('value', snapshot => {
                    commit('setUserRecipes', snapshot.val());
                }); */
        }, //end getUserRecipes
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
        },
        setCampaignId({ commit }, id ) {
            //alert("Update Campaign ID: " +  id);
            commit('setCampaignId', id);
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
        }
    }//end getters
});
