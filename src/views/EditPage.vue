<template>
  <div class="EditPage">
    <input type="checkbox" name="" id="sideMenu-active">
    <div class="sideMenu">
      <span>STEP= {{step}}</span>
      <div class="breadcrumb">
        <div class="bread" :id="step==1 ? 'actived' : 'bread'">
            <div class="breadInner">
              <span>Step1.&ensp;Chose a Theme</span>
            </div>
        </div>
        <div class="bread"  :id="step==2 ? 'actived' : 'bread'">
            <div class="breadInner">
              <span>Step2.&ensp;Pick Color U Like</span>
            </div>
        </div>
        <div class="bread"  :id="step==3 ? 'actived' : 'bread'">
            <div class="breadInner">
              <span>Step3.&ensp;Type UR DATA In</span>
            </div>
        </div>
      </div>   

      <div class="active-container">
        <theme-chose v-if="step==1"/>
        <pick-color v-if="step==2" />
        <type-data v-if="step==3"/>
      </div>
      
      <div class="button-group">
        <button @click="steper(-1)" :disabled="step<=1">prev</button>
        <button @click="steper(1)" :disabled="step>=3">next</button>
      </div>

      <label for="sideMenu-active">
        <i>❤</i>
      </label>
    </div>
  </div>
</template>

<script>
import PickColor from '@/components/EditMenu/PickColor'
import ThemeChose from '@/components/EditMenu/ThemeChose'
import TypeData from '@/components/EditMenu/TypeData'
import { ref } from 'vue'

export default {
  name: 'EditPage',
  components: {
    PickColor,
    ThemeChose,
    TypeData,
  },
  setup() {
    const step = ref(1)
    
    const steper = (mode) =>{
      if(mode > 0) step.value += 1
      else step.value -= 1
    }

    return {
      step,
      steper
    }
  }
}
</script>


<style lang="scss" >
@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500|PT+Sans+Narrow:400,700|Play:400,700|Ubuntu+Condensed&display=swap&subset=cyrillic');

.EditPage {
  position: absolute;
  top: 0;
  width: 0;
  height: 100vh;

}

/* sidebar setting */
  a, label {
    cursor: pointer;
  }

  .sideMenu {
    width: 80vw;
    height: 100%;
    background-color: #ff7575c7;
    border-right: 3px solid #d1d1d1;
    display: flex;
    flex-direction: column; //主軸
    box-shadow: 5px 0 5px rgba(23, 23, 54, 0.6);
    position: relative; // label 定位在這個上
    transform: translateX(-100%); // 將 sideMenu 左橫移 100%，使他到螢幕外
    transition: 0.5s; // 側邊選單收合的時間差



    label {
      width: 20px;
      height: 80px;
      background-color: #d1d1d1;
      color: #686666;
      // 絕對定位在 sideMenu 上
      position: absolute;
      right: -20px;
      top: 0;
      bottom: 0;
      margin: auto;
      line-height: 80px;
      text-align: center;
      border-radius: 0 5px 5px 0;
      box-shadow: 5px 0 5px rgba(23, 23, 54, 0.6);
    }
  }

  #sideMenu-active:checked + .sideMenu {
    transform: translateX(0);
    z-index: 5;
    // 當我點擊 sideMenu 時，checkbox 會啟動 id，讓側邊選單跑出來
    label .fas {
      transform: scaleX(-1); // 使 label 裡的圖案橫向反轉
    }
  }

  #sideMenu-active {
    position: absolute;
    opacity: 0; //使 checkbox 變透明
    z-index: -1; // 為了保險不要讓該功能還選得到，可將其排序往後跳
  }

  nav {
    a {
      display: block;
      color: #fff;
      padding: 20px 10px;
      position: relative;

      .fas {
        margin-right: -1.1em;
        transform: scale(0);
        //使圖示消失
        transition: 0.3s;
      }

      &:hover .fas {
        margin-right: 0em; //使文字回到原來的位置
        transform: scale(1); //使圖示出現
      }

      & + a::before {
        content: "";
        position: absolute;
        border-top: 1px dashed #ffffff;
        left: 10px;
        right: 10px;
        top: 0px;
      }
    }
  }

/* breadCrumb */
  .breadcrumb {
    display: flex;
    justify-content: space-evenly;
  }

  .bread {
    width: 25%;
    height: fit-content;
    border-radius: 10px;
    text-align: center;
    background-color: white;
    color: #252525;
    font-family: 'Oswald', sans-serif;
    padding: .5rem 0;
    letter-spacing: 1px;
    font-size: .8rem;
    transform: skew(-21deg);
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  }
  #actived{
    background: #490099;
    color: #FFF;
  }
  .breadInner{
    width: 100%;
    height: 100%;
    font-family: 'Oswald', sans-serif;  
    transform: skew(21deg);
  }

/* operate area*/
  .active-container {
    width: 80%;
    height: 80%;
    margin: 2% auto;
  }
/* Buttons */
.button-group {
  display: flex;
  justify-content: center;
  button {
    background: #490099;
    height: 2rem;
    width: 5rem;
    color: #fff;
    margin: 0 .5rem;
    border: none;
    border-radius: 5rem;
    box-shadow: 2px 2px 0 0 #9456d9, -1px -1px 0 0 #cecece;
  }
  button:active{
     box-shadow: inset 2px 2px 0 0 #cecece, inset -1px -1px 0 0 #9456d9
  }
  button:disabled, button[disabled]{
    background-color: #cccccc;
    color: #666666;
    box-shadow: none;
  }


}

</style>
