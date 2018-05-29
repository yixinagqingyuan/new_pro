<template>
  <div>
    <!-- <ceshi/> -->
    <header1 v-bind:seller="seller"></header1>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script>
//引入axios由于作者不在对vue-resource进行跟新发生http服务
  import axios from 'axios'
  import header1 from './components/header/header'
  import ceshi from './components/cceshi'
  const OK = 0;
  export default {
    data() {
      return {
        // seller: null // 有问题
        seller: {},
      }
    },
    created() {
      // 使用vue-resource发送ajax请求express提供的接口
      /*this.$http.get('/api/seller')
        .then(response => {
          const result = response.body
          if (result.code===OK) {
            this.seller = result.data
            console.log('vue-resource', this.seller)
          }
        })*/
      // 使用axios发送ajax请求mockjs提供的接口
       var self=this;
       //console.log(self);
      setTimeout(() => {
        // 另一种写法
       //在严格模式下，重新规定了执行上下文中的this，禁止函数中this关键字指向全局对象
         axios.get('/api2/seller').then(function(res){
             const result = res.data;
            //console.log(result.code);
            
            if (result.code === OK) {    
              self.seller = result.data;
              self.seller.score = 3.6;
             //console.log(result.data);
            }
         }).catch(error=>{
           console.log(error)
         })
        // axios.get('/api2/seller')
        //   .then(response => {
        //     const result = response.data;
        //     console.log(result);
        //     if (result.code === OK) {
        //       this.seller = result.data;
        //       this.seller.score = 3.6;
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   })
      }, 1000)
    },
    components: {
      header1,ceshi
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixins.styl"

  .tab
    height 40px
    line-height 40px
    display flex
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      font-size 14px
      color rgb(77, 85, 93)
      text-align center
      .active
        color: red
</style>
