<template>
    <div class="skills" ref="skillsContainer">
        <section-header>
            {{ title }}
            <h6 class="section-subheader">{{ subtitle }}</h6>
            <span class="proficiency-header">Experience</span>
        </section-header>
        <div class="skill-list">
            <draggable :list="skills" group="skills" handle=".skill">
            <div v-for='skill in skills' :class='{"sub-section":true, "visible":!calculating}' :key="skill.name" :ref="skill.name">
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
            </draggable>
        </div>
    </div>
</template>
<script>
import SectionHeader from '../layout/SectionHeader' 
import draggable from "vuedraggable";

export default {
    components:{
        SectionHeader,
        draggable
    },
    props:{
        skills:Array,
        title:{
            default:"Skills",
            type:String
        },
        subtitle:String
    },
    data(){
        return {
            calculating:false
        }
    },

    methods:{
        getFooterTop(){
            let footer = document.querySelector("#p1-footer");
            return footer.getBoundingClientRect().top;
        },
        calcSkills(){
            this.calculating = true;
            
        

            let overflowSkills = [];

            this.skills.forEach(function(skill, index){
                let footerTop = this.getFooterTop()
                let node = this.$refs[skill.name][0];
                let skillBottom = node.getBoundingClientRect().bottom;
                let visible = skillBottom < footerTop;

                console.log(skill.name, `${skillBottom} < ${footerTop}`);

                // console.log(skill.name, visible);

                if(!visible){
                    overflowSkills.push(skill);
                }
            }.bind(this))
            this.$emit("update:overflow", overflowSkills);
            this.calculating = false;
        },
        
    },
    
    watch:{
        // skills(n){
        //     this.$nextTick(this.calcSkills);
        // },
    },
    mounted(){
        // this.$nextTick(this.calcSkills);
    },
    
}
</script>

<style scoped>

    .sortable-ghost{
        color: var(--main-color);
    }

    .desc{
        margin-bottom: 10px;
    }

    .skill{
        cursor: grab;
    }

    .skill:hover{
        color: var(--main-color);
        /* text-decoration: underline; */
    }

    .skill-list{
        overflow-y: hidden;
        
    }

    .sub-section{
        transition-duration: 0.2s;
        transition-property: opacity;
        opacity: 0;
    }

    .visible{
        opacity: 1;
    }

    .subskill-list{
        padding-left: 20px;
        
        border-left: 1px solid #2cdefd;
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
        margin-top: 10px;
        margin-bottom: 0px;
    }

    .section-subheader{
        display: inline-block;
        font-size: 0.5em;
    }
</style>