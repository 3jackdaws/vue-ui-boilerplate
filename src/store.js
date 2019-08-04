import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        message: "Hello, World!"
    },
    mutations:{
        changeMessage(state, message){
            state.message = message;
        }
    }
})

export default store