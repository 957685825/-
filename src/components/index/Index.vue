<template>
	<div id="index" style="width: 100%;">
	
		<div class="btn">
			<ul>
				<li style="color: red;">走进关博</li>
				<li><router-link to='/aboutMusem'>关于关博</router-link></li>
				<li><router-link to="/exhibition">关博展览</router-link></li>
				<li><router-link to='/Pulpit'>关博讲坛</router-link></li>
				<li><router-link to='/PublicActivity'>公共活动</router-link></li>
			</ul>
			<ul>
				<li style="color: red;">玩转关博</li>
				<li><router-link to='/CustomMuseumVideo'>关博影像</router-link></li>
				<li><router-link to='/exhibition902'>902艇展演</router-link></li>
				<li><router-link to="/collectionList">藏品鉴赏</router-link></li>
				<li><router-link to="/customMuseumSouvenir">关影留念</router-link></li>
				<li><router-link to="/customMuseumQiestopms">关事问答</router-link></li>
			</ul>

			<ul>
				<li style="color: red;">关博服务</li>
				<li><router-link to="/everydayClearance">每日通关</router-link></li>
				<li><router-link to='/VisitorGuide'>参观指南</router-link></li>
				<li><router-link to='/SupportingService'>配套服务</router-link></li>
				<li><router-link to='/WcShow'>文创展示</router-link></li>
				<li><router-link to='/RelatedLinks'>相关链接</router-link></li>
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