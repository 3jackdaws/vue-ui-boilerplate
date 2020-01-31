import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        resume:{},
        resumeLoaded:false
    },
    mutations:{
        setResume({resume}, data){
            console.info("SET RESUME: ", data.resumeName);
            this.state.resume = data;
            this.state.resumeLoaded = true;
        }
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