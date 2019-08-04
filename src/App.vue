<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/login'>Login</router-link>
    </nav>
    <router-view />
    <div class="counter">{{ count }}</div>
  </div>
</template>

<script>
export default {
  
  computed:{
      count(){
          return this.$store.state.count;
      }
  }
}
</script>