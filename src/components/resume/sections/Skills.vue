<template>
    <div class="skills" ref="skillsContainer">
        <section-header>
            Skills
            <span class="proficiency-header">Experience</span>
        </section-header>
        <div class="skill-list">
            <div v-for='skill in data' class='sub-section' :key="skill.name" :ref="skill.name">
                <h5 class="skill">
                    {{ skill.name }} 
                    <span v-if="skill.level" class="proficiency-level">
                        <span class="proficiency-bar" :style="{width:(skill.level*20)+'%'}"></span>
                    </span>
                </h5>
                <div class="subskill-list">
                    <div class="subskill text" v-for="sub in skill.sub">
                        {{ sub }}
                    </div>
                </div>
            </div>
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
        data:Array,
        overflow:Array
    },
    data(){
        return {
            _visibleSkills:[],
        }
    },
    
    watch:{
        data(skills){
            this.$nextTick(() => {
                let containerBottom = this.$refs["skillsContainer"].getBoundingClientRect().bottom;
                let overflowSkills = [];
                let refs = this.$refs;
                // console.info("Bottom: ", containerBottom)
                this.data.forEach(function(skill, index){
                    let node = refs[skill.name][0];
                    let rect = node.getBoundingClientRect();
                    let visible = rect.bottom < containerBottom;

                    // console.log(skill.name, visible);

                    if(!visible){
                        overflowSkills.push(skill);
                    }
                })
                this.$emit("update:overflow", overflowSkills);
            }, this);
            
        }
    },
    miunted(){
        
    }
}
</script>

<style scoped>

    .desc{
        margin-bottom: 10px;
    }

    .skill{
        cursor: pointer;
    }

    .skill:hover{
        color: var(--main-color);
        text-decoration: underline;
    }

    .skill-list{
        overflow-y: hidden;
        max-height: 7in;
        border-bottom: 1px solid #ddd;
        
    }

    .subskill-list{
        padding-left: 20px;
        
        border-left: 1px solid #ddd;
    }

    .subskill{
        text-transform: uppercase;
        font-size: 0.8em;
        line-height: 1.2em;
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
        margin-top: 5px;
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