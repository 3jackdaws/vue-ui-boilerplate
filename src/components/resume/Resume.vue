<template>
    <div id="resume">
        <page>
            <div class="header">
                <i-circle :size="100">IM</i-circle>
                <resume-header :data="headerData"></resume-header>
            </div>
            <div class="page-content">
                <column :width="columnWidth">
                    <basic-section label="Profile" :text="data.profile"></basic-section>
                    <skills :data="data.skills" />
                </column>
                <column :width="100 - columnWidth">
                    <experience :data="data.experience" />
                    <education :data="data.education" />
                </column>
            </div>
        </page>
    </div>
</template>

<script>
import Page from './Page'
import ICircle from './decorations/ICircle'
import ResumeHeader from './ResumeHeader'

import Column from './layout/Column'
import SectionHeader from './layout/SectionHeader'
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
    },
    props:{
        data:Object,
       
    },
    data(){
        return {
             columnWidth:35
        }
    },
    computed:{
        headerData(){
            let { applicant, role, website } = this.data;
            return {
                applicant,
                role,
                website
            }
        },
        initials(){
            let name = this.data.applicant.split(" ");
            return name[0][0] + name[1][0];
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

    #resume{
        all: unset;
    }

    #resume h5{
        font-size: 1em;
        line-height: 1em;
    }

    .header{
        margin-bottom: 15px;
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

    h5{
        margin-top: 10px;
    }

    p,span{
        font-family: var(--primary-font);
        /*font-weight: 300;*/
        font-size: 0.9em;
    }

    p{
        margin-top: 0;
        margin-bottom: 0;
    }

    body{
        margin-top: -15px !important;
        padding: 15px;
    }

    @media print{
        
        body{
            padding: 0px;
        }
    }
</style>