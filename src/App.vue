<template>
  <div id="app">

    <!-- 路由出口;路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <!--显示底部组件,只有$route.meta.showFooter为true才显示footer-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>


</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    name: 'app',
    components: {
        FooterGuide
    }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*这里是stylus语法*/
  #app
    width 100%
    height 100%
    background #f5f5f5

</style>
