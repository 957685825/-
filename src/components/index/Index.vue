<template>
	<div id="index" style="width: 100%;">
	
		<div class="btn">
			<ul>
				<li style="color: red;">走进关博</li>
				<li>关于关博</li>
				<li><router-link to="/exhibition">关博展览</router-link></li>
				<li>关博讲坛</li>
				<li>公共活动</li>
			</ul>
			<ul>
				<li style="color: red;">玩转关博</li>
				<li>虚拟关博</li>
				<li>902艇展演</li>
				<li><router-link to="/collectionList">藏品鉴赏</router-link></li>
				<li><router-link to="/customMuseumSouvenir">关影留念</router-link></li>
				<li><router-link to="/customMuseumQiestopms">关事问答</router-link></li>
			</ul>

			<ul>
				<li style="color: red;">关博服务</li>
				<li><router-link to="/everydayClearance">每日通关</router-link></li>
				<li>参观指南</li>
				<li>配套服务</li>
				<li>文创展示</li>
				<li>相关链接</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Api from '../../API.js'
import { Swipe, SwipeItem,Indicator } from 'mint-ui';
export default {
  data () {
	    return {
	      indexImg:[]
	    }
	  },
	methods:{
		
	},
	mounted(){
	
	}

}
</script>

<style>
	.btn{
		width: 100%;
		height: 100%;		
	}
	.btn ul{
		margin-top: 2rem;
	}
	.btn ul li{
		margin-top: 0.4rem;
	}
</style>