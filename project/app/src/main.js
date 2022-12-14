import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
//轮播图组件
import Carsousel from '@/components/Carousel'
//第一个参数:全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name,Carsousel)
//引入mockServe.js---mock数据
import '@/mock/mockServe'
//引入swiper样式
import "swiper/css/swiper.css"; 

//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//测试
//import {reqCategoryList} from '@/api'
//reqCategoryList();

new Vue({
  render: h => h(App),
  //注册路由:底下的写法KV一致省略V【router小写】
  //注册路由信息:当这里书写router的时候，组件身上都带有$route,$router属性
  router,
  //注册仓库:组件实例的身上会多一个$store属性
  store
}).$mount('#app')
