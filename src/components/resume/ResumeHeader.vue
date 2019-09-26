<template>
    <div class="resume-header">
        <h1 class="">{{ data.applicant }}</h1>
        <h3 class="">{{ data.role }}</h3>
        <h3 class=""><a class="no-decorate" :href="data.website">{{ data.website }}</a></h3>
    </div>
</template>

<script>
export default {
    props:{data:Object},

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

    h1{
        font-size: 50px;
        font-family: var(--headings-font);
        font-weight: 800;
        line-height: initial;
    }

    h3{
        font-size: 20px;
        line-height: initial;
    }

    .resume-header{
        float: right;
        display: inline;
        text-align: right;
    }

    .resume-header h1{
        margin-bottom:-20px;
    }

    .resume-header *:not(h1){
        margin-bottom: -6px;
    }
</style>