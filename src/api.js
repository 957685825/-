import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios

// 常量 API 接口地址
const HOST = HOST_CONFIG

//图片服务器（静态资源）服务器地址
const STATIC_SERVER_HOST = HOST_STATIC_SERVER_HOST


const VueHttp = new Vue()
//用户名全局变量获取

/*
 * 关博讲坛/列表
 * type:分类
 * */
const GBJT_LIST = `${HOST}hgmuseum/iface/jk/xxlist`
/*
 * 详情页
 * id:（活动、咨询，讲坛、）的ID
 * */
const GB_DETAILS = `${HOST}/hgmuseum/iface/jk/xxinfo`

/*
 * 关博展览列表(分类)
 * type:分类
 **/
const EXHIBIT_LIST = `${HOST}hgmuseum/iface/jk/exhibitlist2?platform=weixin`

/*
 * 关博展览详情
 * exhibitId:分类的id
 **/
const EXHIBIT_DETAILS = `${HOST}hgmuseum/iface/jk/exhibitdetail`
/*
 * 轮播图
 * type:分类
 **/
const LB_LIST = `${HOST}hgmuseum/iface/jk/lblist`


/*
 * 关博藏品详情
 * artId:藏品id
 **/
const COLLECTION_DETAILS = `${HOST}hgmuseum/iface/jk/artdetail`
/*
 * 关博藏品list
 * exId:展览的id（如果是从展览里面过来的带展览相关的id）
 **/
const COLLECTION_LIST = `${HOST}hgmuseum/iface/jk/getExArt`

/*
 * 关博影像
 * type:gbyxlb
 **/
const MUSEUM_VIDEO_LIST = `${HOST}/hgmuseum/iface/jk/lblist?type=gbyxlb`

/*
 * 关于关博
 * type:类型
 **/
const MUSEUM_ABOUT_DETAILS = `${HOST}/hgmuseum/iface/jk/jtinfo`

////只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
//if (!sessionIds) {
//	alert('用户信息不存在!');  
//	location.href='#/'
export default {
		about:{
			museumAbout:(jsons)=>{
				return VueHttp.$http.get(MUSEUM_ABOUT_DETAILS,{params:jsons})
			}
		},
		museumVideo:{
			videoList:()=>{
				return VueHttp.$http.get(MUSEUM_VIDEO_LIST)
			}
		},
		lunbo:{
			list:(jsons)=>{
				return VueHttp.$http.get(LB_LIST,{params:jsons})
			}
		},
		pulpit:{
			pulpitList:(jsons)=>{
				return VueHttp.$http.get(GBJT_LIST,{params:jsons})
			},
			pulpitDetails:(jsons)=>{
				return VueHttp.$http.get(GB_DETAILS,{params:jsons})
			}
		},
		exhibition:{
			exhibitList:(jsons)=>{
				return VueHttp.$http.get(EXHIBIT_LIST,{params:jsons})
			},
			exhibitDetails:(jsons)=>{
				return VueHttp.$http.get(EXHIBIT_DETAILS,{params:jsons})
			}
		
		},
		collection:{
			collectionDetails:(jsons)=>{
				return VueHttp.$http.get(COLLECTION_DETAILS,{params:jsons})
			},
			collectionList:(jsons)=>{
				return VueHttp.$http.get(COLLECTION_LIST,{params:jsons})
			}
		},
	   car:{
	   	/*添加购物车*/
	   	addCar:(jsons)=>{
	   		return VueHttp.$http.post(ADD_CAR,
	   	 			qs.stringify(jsons)   	 				   	 		
	   	 	)
	   	}
	   },
	  STATIC_SERVER_HOST:STATIC_SERVER_HOST
}
  	


