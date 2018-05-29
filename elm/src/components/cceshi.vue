<template>
  <div >
      <div class="a1" @click="aaa()">
        好好学习
        <ceee :num='num'/>
      </div>
      <transition name="fold">
        <div v-show="show">
          出现一个效果
        </div>
          
      </transition>
  </div>
</template>
<script>
//引入axios由于作者不在对vue-resource进行跟新发生http服务
import axios from "axios"
import ceee from './ceshi1.vue'
export default {
  props: ["btn"],
  data() {
    return {
      show:!true,
      arr:[1,2,3,5,6,9,7,52,3],
      num:20
    }
  },
  methods: {
    
    aaa() {
      if(this.num==0){
        this.num=20;
      }else{
        this.num--;
      }
    },
    bbb(){
      console.log(arguments[0]);
    }
  },
  created() {
  },
  components: {
      ceee
    }
};
 
</script>

<style lang="stylus" rel="stylesheet/stylus">
.fold-enter-active {
  animation-name: fold-in;
  animation-duration: .5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: .5s;
}
@keyframes fold-in {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 100%, 0);
  }
}
</style>
