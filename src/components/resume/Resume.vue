<template>
    <div id="resume">
        <page :loaded="!!data">  
            <resume-header :data="headerData"></resume-header>
            <div class="page-content">
                <column :width="columnWidth">
                    <basic-section v-if="data && data.profile" label="Profile" :text="data?data.profile : null"></basic-section>
                    <basic-section v-if="data && !data.profile" label="Objective" :text="data?data.objective : null"></basic-section>
                    <skills :data="data?data.skills:null" :overflow.sync="overflowSkills"/>
                </column>
                <column :width="100 - columnWidth">
                    <experience :data="data?data.experience:null" />
                    <education :data="data?data.education:null" />
                </column>
            </div>
            <resume-footer>
                
            </resume-footer>
        </page>
    </div>
</template>

<script>
import Page from './Page'
import ICircle from './decorations/ICircle'
import ResumeHeader from './ResumeHeader'

import Column from './layout/Column'
import SectionHeader from './layout/SectionHeader'
import ResumeFooter from './layout/ResumeFooter'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import BasicSection from './sections/BasicSection'


export default {
    components:{
        Page,
        ICircle,
        ResumeHeader,
        BasicSection,
        Column,
        SectionHeader,
        Skills,
        Experience,
        Education,
        ResumeFooter,
    },
    props:{
        data:Object,
       
    },
    data(){
        return {
             columnWidth:27,
             loaded:false,
             overflowSkills:[]
        }
    },
    computed:{
        headerData(){
            if(this.data){
                let { applicant, role, website } = this.data;
                return {
                    applicant,
                    role,
                    website
                }
            }
            
        },
        initials(){
            let name = this.data.applicant.split(" ");
            return name[0][0] + name[1][0];
        },
       
    },
    watch:{
        data(newData){
            if(newData.resumeName){
                document.title = newData.resumeName;
            }
        },
        overflowSkills(skills){
            console.log(skills);
        }
    }
}
</script>

<style >

    :root {
    /* --main-color: #f88575; */
        --main-color: #2cdefd;
        --headings-font: 'Poppins', sans-serif;
        --primary-font: 'Titillium Web', serif;
    }

    .page-content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    h1,h2,h3,h4,h5,h6{
        text-transform: uppercase;
        font-family: var(--headings-font);
        margin-top:0;
        margin-bottom: 5px;
    }

    h1{
        font-size: 3em;
        line-height: 0.9em;
    }

    h3{
        font-size:1.25em;
    }

    h5{
        font-size: 0.9em;
        margin-top: 10px;
        margin-bottom: 0px;
    }

    p,span,.text{
        font-family: var(--primary-font);
        /*font-weight: 300;*/
        font-size: 0.9em;
    }

    p{
        margin-top: 0;
        margin-bottom: 0;
    }

    .section{
        margin-bottom: 15px;
    }

    body{
        margin: 0 !important;
    }

    a.no-decorate{
        text-decoration: none;
        color: black;
    }

    a.no-decorate:hover{
        text-decoration: underline;
        color: black;
    }

    @media print{
        body{
            padding: 0px;
        }
    }
</style>