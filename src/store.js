import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        resume:null
    },
    mutations:{
        
    },
    actions:{
        async loadResume(url){
            try{
                let response = await axios.get(url);
            }catch(e){
                
            }
        }
    }
})

export default store