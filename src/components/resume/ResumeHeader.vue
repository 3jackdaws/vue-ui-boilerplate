<template>
<div class="resume-header">
    <i-circle :size="100">IM</i-circle>
    <div class="right-header">
        <h1>{{ data.applicant }}</h1>
        <h3 class="">{{ data.role }}</h3>
        <h3 class=""><a class="no-decorate" :href="data.website">{{ data.website }}</a></h3>
    </div>
</div>
</template>

<script>
import ICircle from './decorations/ICircle'
export default {

    props:{data:Object},
    components:{
        ICircle
    }
}
</script>

<style scoped>
    h1,h2,h3,h4,h5,h6{
        text-transform: uppercase;
        font-family: var(--headings-font);
        margin-top:0;
    }

    a.no-decorate{
        text-decoration: none;
        color: black;
    }

    a.no-decorate:hover{
        text-decoration: underline;
        color: black;
    }

    h3{
        line-height: 0.9em;
    }

    .right-header{
        float: right;
        display: inline;
        text-align: right;
    }

    .resume-header{
        margin-bottom: 15px;
    }
</style>