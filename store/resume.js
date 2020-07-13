import axios from 'axios'

export const state = () => ({
  resume:{},
  resumeLoaded:false,

})

export const mutations = {
  set(state, data){
    console.info("SET RESUME: ", data.resumeName);
    state.resume = {...state.resume, ...data};
  },
  setSkills(state, skills){
    state.skills = {...state.skills, ...skills }
  }
}

export const actions = {
  async load({commit}, slug){
    let response = await axios.get("/api/resume/" + slug)
    commit("set", response.data)
  }
}


