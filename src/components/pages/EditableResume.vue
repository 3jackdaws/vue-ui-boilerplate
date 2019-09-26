<template>
    <q-page>
        <resume :data="data"/>
    </q-page>
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
            data:DATA,
        }
    },
    mounted(){
        this.data = DATA;
    }

        
    
}

</script>
