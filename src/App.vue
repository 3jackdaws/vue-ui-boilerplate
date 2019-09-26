<template>
  <router-view>

  </router-view>
</template>

<script>
import EditableResume from './components/pages/EditableResume.vue'

export default {
  name: 'LayoutDefault',

  components: {
    EditableResume
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
body{
  background-color: whitesmoke;
}
</style>
