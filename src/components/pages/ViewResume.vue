<template>
    <Resume v-bind="resume"/>
</template>

<script>
import Resume from '../resume/Resume'
import DATA from '../../data.js'
export default {
    components:{
        Resume
    },
    data(){
        return {resume:this.$store.resume};
    },
    mounted(){
        this.$store.commit("setResume", DATA);
    }
}
</script>