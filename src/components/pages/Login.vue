<template>
    <div class="login-container">

        <h1>Login</h1>
        <input :value="$store.state.message" @input="changeMessage"/>
    </div>
</template>


<script>

export default {
    methods:{
        changeMessage(e){
            this.$store.commit("changeMessage", e.target.value);
        }
    }

}

</script>
