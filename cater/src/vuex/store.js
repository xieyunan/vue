import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    musicList:[],
}

const mutations = {
    setmusicList(state,status){
        state.musicList=status;
    }
}

const getters = {}

const actions =  {
    actionmusicList({commit},status){
        commit('setmusicList',status);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})