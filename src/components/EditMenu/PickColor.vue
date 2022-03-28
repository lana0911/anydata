<template lang="">
  <div class="PickColor">
    <div class="top">
      <span>Theme Chosed : {{myConst.choseTheme}}</span>
    </div>
    
    <div class="edit-area">
    </div>

    

  </div>
</template>

<script>
import * as myConst from '@/varibles.js'

export default {
  name: 'PickColor',
  setup(){
    return {
      myConst
    }
  }
}
</script>
