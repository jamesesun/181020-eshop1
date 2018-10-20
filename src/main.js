import Vue from 'vue'
import App from './App.vue'
import router from './router'  //导入路由器



//要通过 router 配置参数注入路由器
new Vue({
  render: h => h(App),
  router  //注入路由器
}).$mount('#app')

/*

通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由
在其他组件中可以使用<router-link/>、<router-view/>了

*/
