<template>
  <div class="BasicPage">
    <Lava />
  </div>
</template>

<script>
import Lava from '@/components/Styles/Lava.vue'

export default {
  name: 'BasicPage',
  components: {
    Lava,
  }

}
</script>

<style lang="scss">
.BasicPage {
  background:  linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%);
  z-index: 5;
  height: 100vh;
  
}
</style>
