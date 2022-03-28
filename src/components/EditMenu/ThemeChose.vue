<template>
  <div class="ThemeChose">
    <div class="themeBlock" 
      v-for="(item, index) in themes" 
      :key="item.index"
      @click="picker(index)"
      :id="item.actived ? 'avtived' : ''"
    >
      <img src="https://fakeimg.pl/100/">
      <div class="name">
        <span>{{item.name}} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import * as myConst from '@/varibles.js'
import { themes } from '@/varibles.js'
export default {
  name: 'ThemeChose',
  setup() {
    // const themes = ref([
    //   {'id': 'a', 'name': '可愛風' , 'actived': false},
    //   {'id': 'b', 'name': '龐克風', 'actived': false},
    //   {'id': 'c', 'name': '現代風格', 'actived': false},
    //   {'id': 'd', 'name': '工業風格', 'actived': false},
    //   {'id': 'e', 'name': '鄉村風格', 'actived': false},
    //   {'id': 'f', 'name': '地中海風', 'actived': false},
    //   {'id': 'g', 'name': '地中海風', 'actived': false},
    //   {'id': 'h', 'name': '古典風格', 'actived': false},
    //   {'id': 'i', 'name': '奢華風格', 'actived': false},
    //   {'id': 'j', 'name': '美式海風', 'actived': false},
    //   {'id': 'k', 'name': '復古海風', 'actived': false},
    // ])
 
    const picker = (id) => {
      console.log("id on",id)
      themes.value.forEach(element => {
        element.actived = false
      });
      themes.value[id].actived = !themes.value[id].active
      myConst.choseTheme.value = themes.value[id]
    }
    
    onMounted(() => {
      picker(myConst.nowTheme.value)
    })

    return {
      themes,
      picker
    }
  }  
}
</script>

<style lang="scss" scoped>
.ThemeChose {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  .themeBlock {
    width: 20%;
    height: 25%;
    border: 3px solid #a35c68;
    margin: .5rem .5rem; 
    img{
      width: 100%;
      height: 80%
    }
    .name{
      text-align: center
    }
  }
  #avtived {
    border: 3px solid #490099;
  }
}
</style>
