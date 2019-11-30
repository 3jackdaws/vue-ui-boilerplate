<template>
    <Resume :data="data"/>
</template>

<script>
import Resume from '../resume/Resume'
import DATA from '../../data.js'
export default {
    components:{
        Resume
    },
    data(){
        return {
            data:null,
        }
    },
    mounted(){
        setTimeout(_=>{
            this.data = DATA;
        }, 2000)
        
    }
}
</script>