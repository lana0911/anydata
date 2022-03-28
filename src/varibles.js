import { ref } from 'vue'
//Theme
export const nowTheme = ref(0)
export const choseTheme = ref(0)
export const themes = ref([
    {'id': 'a', 'name': '可愛風' , 'actived': false},
    {'id': 'b', 'name': '龐克風', 'actived': false},
    {'id': 'c', 'name': '現代風格', 'actived': false},
    {'id': 'd', 'name': '工業風格', 'actived': false},
    {'id': 'e', 'name': '鄉村風格', 'actived': false},
    {'id': 'f', 'name': '地中海風', 'actived': false},
    {'id': 'g', 'name': '地中海風', 'actived': false},
    {'id': 'h', 'name': '古典風格', 'actived': false},
    {'id': 'i', 'name': '奢華風格', 'actived': false},
    {'id': 'j', 'name': '美式海風', 'actived': false},
    {'id': 'k', 'name': '復古海風', 'actived': false},
  ])