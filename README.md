# eshop-client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```




                      ###项目流程概要说明###
================================================================ 
依赖库：
dependencies: {
    "vue": "^2.5.17",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
  }
  
npm install vue-router --save
npm install vuex --save



src/下的目录说明：
api：与后台交互目录，包含接口请求函数和ajax请求函数
common：通用资源目录
components:非路由组件
pages:路由组件
router：路由器模块
store：vuex状态管理模块
filter：过滤器模块
mock:后台数据模拟模块
App.vue:挂载到index.html元素上去的根组件
main.js: JS入口
static：本项目初始静态资源，供参考。




安装 stylus  stylus-loader 依赖包
npm install stylus stylus-loader --save-dev

stylus:将stylus转译成css,
stylus-loader:webpack识别stylus。利用stylus-loader,能够将stylus编译成css


界面拆分2大块区域:
1,底部FooterGuide.vue是固定非路由组件，是用来切换路由组件的
路由组件分：主页、搜索、订单、我的
components/FooterGuide/FooterGuide.vue

2,除底部组件外,上部全是路由组件(头部也是路由组件的内部结构)。
路由组件分：主页、搜索、订单、我的
pages/Msite/Msite.vue   首页相当于home
pages/Order/Order.vue
pages/Search/Search.vue
pages/Profile/Profile.vue


结构图：

 components:
            FooterGuide/FooterGuide.vue
 pages:
       Msite/Msite.vue
       Order/Order.vue
       Search/Search.vue
       Profile/Profile.vue
       
 App.vue
 
 main.js
 
================================================================ 
完成路由器模块 src/router/index.js：


/*路由器模块*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)//使用VueRouter
export default new VueRouter({ //创建路由器,暴露出去,在main.js中注册后才能用
    routes: [
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
        },
        {
            path: '/order',
            component: Order,
        },
        {
            path: '/profile',
            component: Profile,
        }
    ]
})


================================================================ 
从初始资源里找dom元素、样式、图片分别挂到：
Msite/Msite.vue
Order/Order.vue
Search/Search.vue
Profile/Profile.vue

在浏览器里调试一下，确保静态组件拆分后均可用。

================================================================








================================================================ 
做 首页轮播区域的轮播效果,要用到swiper.js 和swiper.min.css

下载到当前项目中：
npm install swiper --save


在Msite中import进来
 import Swiper from 'swiper'
 import 'swiper/dist/css/swiper.min.css'




/*  打开首页就要有轮播功能，用 mounted  */
        mounted(){
          new Swiper('.swiper-container', {
              loop: true, // 循环模式选项
              // 如果需要分页器
              pagination: {
                  el: '.swiper-pagination',
              },
          })
        },


================================================================

首页商家列表区域 src/components/ShopList/ShopList.vue





================================================================
点击Profile-->中间区域的"登录/注册"的一级路由组件
src\pages\Login\Login.vue