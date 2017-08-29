import Vue from 'vue'

//引入路由
import vueRouter from "vue-router"

//宝宝书
//import bbsMsgtest from '@/components/bbs/bbsMsg'
//import bbsEdittest from '@/components/bbs/bbsEdit'
//首页
import Index from '@/components/index/Index.vue'
//走进关博/展览展讯
import exhibition from '@/components/classification/zjgb/customMuseumExhibition/exhibitions.vue'
//走进关博/展览展讯／基本陈列（分类）
import exhibitionClassification from '@/components/classification/zjgb/customMuseumExhibition/exhibition/exhibitionClassification.vue'
//走进关博/展览展讯／基本陈列（分类）/展览详情
import exhibitionContent from '@/components/classification/zjgb/customMuseumExhibition/exhibition/exhibitionContents.vue'
//玩转关博/藏品列表(藏品鉴赏)
import collectionList from '@/components/classification/wzgb/collectionShow/collectionList.vue'
//玩转关博/藏品详情(藏品鉴赏)
import collectionDetails from '@/components/classification/wzgb/collectionShow/collectionDetails.vue'
//玩转关博/关事问答
import customMuseumQiestopms from '@/components/classification/wzgb/customMuseumQiestopms/customMuseumQiestopms.vue'
//玩转关博/关影留念i
import customMuseumSouvenir from '@/components/classification/wzgb/customMuseumSouvenir/customMuseumSouvenir.vue'
//关博服务/每日通关
import everydayClearance from '@/components/classification/gbfw/everydayClearance/everydayClearance.vue'

//注入路由
Vue.use(vueRouter)
let router =  new vueRouter({	
//	mode:'history',
	routes: [
		    { //首页
		      path: '/',
		      name: 'Index',
		      component: Index,
		      meta: {
		        title: '首页'
		      }
		    },{ //展览展讯
		      path: '/exhibition',
		      name: 'exhibition',
		      component: exhibition,
		      meta: {
		        title: '关博展览'
		      }
		    },{ //基本陈列
		      path: '/exhibitionClassification',
		      name: 'exhibitionClassification',
		      component: exhibitionClassification,
		      meta: {
		        title: '基本陈列'
		      }
		    },{ //藏品列表
		      path: '/collectionList',
		      name: 'collectionList',
		      component: collectionList,
		      meta: {
		        title: '藏品列表'
		      }
		    },{ //藏品详情
		      path: '/collectionDetails',
		      name: 'collectionDetails',
		      component: collectionDetails,
		      meta: {
		        title: '藏品详情'
		      }
		    },{ //关事问答
		      path: '/customMuseumQiestopms',
		      name: 'customMuseumQiestopms',
		      component: customMuseumQiestopms,
		      meta: {
		        title: '关事问答'
		      }
		    },{ //关影留念
		      path: '/customMuseumSouvenir',
		      name: 'customMuseumSouvenir',
		      component: customMuseumSouvenir,
		      meta: {
		        title: '关影留念'
		      }
		    }
		    ,{ //基本陈列/展览详情
		      path: '/exhibitionContent',
		      name: 'exhibitionContent',
		      component: exhibitionContent,
		      meta: {
		        title: '展览详情'
		      }
		    },{ //关博服务/每日通关
		      path: '/everydayClearance',
		      name: 'everydayClearance',
		      component: everydayClearance,
		      meta: {
		        title: '每日通关'
		      }
		    }
	  		]
})

//暴露出路由对象
router.afterEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  }
})
export default router

