<template lang="pug">
.home
  BasicPage
  EditPage
</template>

<script>
import BasicPage from './BasicPage.vue'
import EditPage from './EditPage.vue'

export default {
  name: 'Home',
  components: {
    BasicPage,
    EditPage
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%

}
</style>

