<template>
    <div id="resume">
        <page>  
            <resume-header :data="headerData"></resume-header>
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
             columnWidth:36
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

    p,span{
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
        /* margin-top: -15px !important; */
        /* padding: 15px; */
    }

    a.no-decorate{
        text-decoration: none;
        color: black;
    }

    @media print{
        body{
            padding: 0px;
        }
    }
</style>