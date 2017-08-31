<template>
	<!--展览展讯-->
	<div id="exhibition">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000" :show-indicators="false">
			  <mt-swipe-item style="background: orchid;">1</mt-swipe-item>
			  <mt-swipe-item style="background: orange;">2</mt-swipe-item>
			  <mt-swipe-item style="background: red;">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="exhibitList">
			<router-link to="/">
				<div class="exhibitBtn">
					<div class="gghdBtnBox">
						活动咨询	
					</div>
					<div class="imgBox">
						<img src="../../../../assets/img/zlzx1_03.jpg" alt="" />
					</div>
				</div>
			</router-link>
			<div class="exhibitBtn">
				<div class="gghdBtnBox">
					活动回顾
				</div>
				<div class="imgBox">
					<img src="../../../../assets/img/zlzx3_03.jpg" alt="" />
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import { Swipe, SwipeItem,Indicator } from 'mint-ui';
export default {
  data () {
	    return {
	     
	    }
	 },
    methods:{
		
    },
    mounted(){

	}
}
</script>

<style>
</style>