<template>
    <div class="skills">
        <section-header>
            Skills
            <span v-if="skillsHaveExperience" class="proficiency-header">Experience</span>
        </section-header>
        <div v-for='skill in data' class='sub-section' :key="skill.name">
            <h5>
                {{ skill.name }} 
                <span v-if="skill.level" class="proficiency-level">
                    <span class="proficiency-bar" :style="{width:(skill.level*20)+'%'}"></span>
                </span>
            </h5>
            <p class="desc">{{ skill.desc }}</p>
        </div>
    </div>
</template>
<script>
import SectionHeader from '../layout/SectionHeader'
export default {
    components:{
        SectionHeader
    },
    props:{
        data:Array
    },
    computed:{
        skillsHaveExperience() {
            if(this.data){
                for(let i = 0;i<this.data.length;i++) {
                    if (this.data[i].level) return true;
                }
            }
            return false;
        },
    }
}
</script>

<style scoped>
    h5{
        font-size: 1em;
    }
    .desc{
        margin-bottom: 10px;
    }

    .proficiency-level{
        background-color: white;
        display: inline;
        border: 1px solid var(--main-color);
        border-radius: 500em;
        float:right;
        width: 60px;
        position: relative;
        padding: 1px;
        margin-top: 10px;
    }

    .proficiency-bar{
        float: left;
        background-color: var(--main-color);
        height: 6px;
        border-radius: 500em;
        position: relative;
    }


    .proficiency-header{
        text-transform: uppercase;
        font-family: var(--headings-font);
        font-size: 0.5em;
        float:right;
        margin-top: 5px;
        margin-bottom: 0px;
    }
</style>