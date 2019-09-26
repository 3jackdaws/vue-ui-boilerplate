<template>
    <div class='page'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .page{
        width: 8.5in;
        height: 11in;
        position: relative;
        margin: 15px auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        padding: 20px;
        background-color: white;
        margin-top: 20px;
        overflow: hidden;
    }


    /* .page > *{
        transition-duration: 1s;
        transition-property: opacity;
        opacity: 0;

    }

    .page.loaded > *{
        opacity: 1;
    } */

    .page:first-child{
        margin-top:15px;
    }
</style>