<template>
    <div>{{num}}</div>
</template>
<script>
//引入axios由于作者不在对vue-resource进行跟新发生http服务
import axios from "axios";
//单纯为了测试父组件数据变化后子组件会变化多少
export default {
  props: ["num"],
  data() {
    return {
     
    }
  },
  methods: {
    
  },
  created() {

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
