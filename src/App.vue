<template>
  <div id="nav">
    <Home />
  </div>
</template>


<script>
import Home from '@/views/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app, #nav {
  height: 100vh;

}


</style>
