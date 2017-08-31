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
//关博服务/参观指南
import VisitorGuide from '@/components/classification/gbfw/visitorGuide/visitorGuide.vue'
//关博服务/配套服务
import SupportingService from '@/components/classification/gbfw/supportingService/supportingService.vue'
//关博服务/相关链接wcShow
import RelatedLinks from '@/components/classification/gbfw/relatedLinks/relatedLinks.vue'
//关博服务/文创展示
import WcShow from '@/components/classification/gbfw/wcShow/wcShow.vue'
//玩转关博/902艇展
import exhibition902 from '@/components/classification/wzgb/902Exhibition/902Exhibition.vue'
//玩转关博/902艇展(详情)
import exhibitionContent902 from '@/components/classification/wzgb/902Exhibition/exhibitionContent.vue'
//走进关博/关于安博
import aboutMusem from '@/components/classification/zjgb/aboutCustomMuseum/about.vue'
//走进关博/关于安博（分类介绍详情）
import musemIntroduce from '@/components/classification/zjgb/aboutCustomMuseum/musemIntroduce.vue'
//走进关博/关博讲坛
import Pulpit from '@/components/classification/zjgb/customMuseumPulpit/pulpit.vue'
//走进关博/关博讲坛（分类）
import MusemClassfication from '@/components/classification/zjgb/customMuseumPulpit/musemClassfication.vue'
//走进关博/关博讲坛（详情）
import MusemPulpitDetails from '@/components/classification/zjgb/customMuseumPulpit/musemPulpitDetails.vue'
//走进关博/公共活动（分类）
import PublicActivity from '@/components/classification/zjgb/customMuseumPublicActivity/publicActivity.vue'

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
		    },{ //关博服务/参观指南.vue
		      path: '/VisitorGuide',
		      name: 'VisitorGuide',
		      component: VisitorGuide,
		      meta: {
		        title: '参观指南'
		      }
		    },{ //关博服务/配套服务
		      path: '/SupportingService',
		      name: 'SupportingService',
		      component: SupportingService,
		      meta: {
		        title: '配套服务'
		      }
		    },{ //关博服务/相关链接
		      path: '/RelatedLinks',
		      name: 'RelatedLinks',
		      component: RelatedLinks,
		      meta: {
		        title: '相关链接'
		      }
		    },{ //关博服务/文创展示
		      path: '/WcShow',
		      name: 'WcShow',
		      component: WcShow,
		      meta: {
		        title: '文创展示'
		      }
		    },{ //玩转关博/902艇展
		      path: '/exhibition902',
		      name: 'exhibition902',
		      component: exhibition902,
		      meta: {
		        title: '902艇展'
		      }
		    },{ //玩转关博/902艇展(详情)
		      path: '/exhibitionContent902',
		      name: 'exhibitionContent902',
		      component: exhibitionContent902,
		      meta: {
		        title: '902艇展'
		      }
		    },{ //走进关博/关于关博
		      path: '/aboutMusem',
		      name: 'aboutMusem',
		      component: aboutMusem,
		      meta: {
		        title: '关于关博'
		      }
		    },{ //走进关博/关于关博(关博简介)
		      path: '/musemIntroduce',
		      name: 'musemIntroduce',
		      component: musemIntroduce,
		      meta: {
		        title: '关博简介'
		      }
		    },{ //走进关博/关博讲坛
		      path: '/Pulpit',
		      name: 'Pulpit',
		      component: Pulpit,
		      meta: {
		        title: '关博讲坛'
		      }
		    },{ //走进关博/关博讲坛（分类）
		      path: '/MusemClassfication',
		      name: 'MusemClassfication',
		      component: MusemClassfication,
		      meta: {
		        title: '关博讲坛'
		      }
		    },{ //走进关博/关博讲坛（详情）
		      path: '/MusemPulpitDetails',
		      name: 'MusemPulpitDetails',
		      component: MusemPulpitDetails,
		      meta: {
		        title: '关博讲坛'
		      }
		    },{ //走进关博/公共活动（分类）
		      path: '/PublicActivity',
		      name: 'PublicActivity',
		      component: PublicActivity,
		      meta: {
		        title: '公共活动'
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

