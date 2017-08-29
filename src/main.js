import Vue from 'vue'
import App from './App'
//引入mint-ui
import MintUI from 'mint-ui'
//引入ajax注入原型
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'mint-ui/lib/style.css'


//引入路由
import router from '@/router'
//引入vuex
import store from '@/store'
//引入一个自定义的util函数，里面定义的是全局公用的方法
Vue.use(MintUI);
//引入ajax
Vue.use(VueAxios,Axios)
//线上环境的时候隐藏一些打印的东西
Vue.config.productionTip = false
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
