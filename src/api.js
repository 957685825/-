import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios

// 常量 API 接口地址
const HOST = HOST_CONFIG;

//图片服务器（静态资源）服务器地址
const STATIC_SERVER_HOST = HOST_STATIC_SERVER_HOST;


var urlQuery = sessionStorage.getItem('urlQuery');

const VueHttp = new Vue();
//用户名全局变量获取
//localStorage.setItem("sessionId","2141731");
//var  userDbIds = localStorage.getItem('userDbId');	
//var  sessionIds = "";

/*查询sku*/
const  QUERY_SKU_URL = `${HOST}artup-build/builder/sku.do?format=json&ignore=true`;
/*查询属性对象*/
const  QUERY_ATTRIBUTE_URL = `${HOST}artup-build/builder/service/attributes.do?format=json&ignore=true`;

/*添加购物车*/
const ADD_CAR = `${HOST}artup-build/builder/cors/car/add/command.do?format=json&ignore=true`


////只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
//if (!sessionIds) {
//	alert('用户信息不存在!');  
//	location.href='#/'
export default {		
		testBaidu:{
	  		test:(inter)=>{
	  			return  VueHttp.$http.get(HOST+inter)   
	  		}
	   },
	   sku:{
	   		querySku:(paraJsons)=>{
	   			return VueHttp.$http.get(QUERY_SKU_URL,{params: paraJsons})
	   		},
	   		queryAttributes:(paraJsons)=>{
	   			return VueHttp.$http.get(QUERY_ATTRIBUTE_URL, {params: paraJsons})
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
	   address:{
		   
	   },

		
		
	
}
  	


